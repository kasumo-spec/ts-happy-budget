import { createContext, useContext, useEffect, useState } from "react";
import jwtDecode from "jwt-decode";
import api from "../../services";

export const UserContext = createContext([]);

export const UserProvider = ({ children }) => {
  const [userId, setUserId] = useState(0);
  const [userName, setUserName] = useState("");
  const [token, setToken] = useState("");
  const [createSuccess, setCreateSucess] = useState(Boolean);
  const [loginSuccess, setLoginSuccess] = useState(Boolean);

  useEffect(() => {
    let storagedToken = localStorage.getItem("@HappyBudget:token") || "";
    if (storagedToken !== "") {
      setToken(storagedToken);
      let decoderId = jwtDecode(storagedToken);
      let idFromToken = parseInt(decoderId.sub);
      setUserId(idFromToken);
      api
        .get(`users/${idFromToken}`, {
          headers: {
            Authorization: `Bearer ${storagedToken}`,
          },
        })
        .then((res) => setUserName(res.data.name));
    }
  }, [token]);

  const createUser = (data) => {
    api
      .post("register", data)
      .then((res) => {
        if (res.status === 201) {
          setCreateSucess(true);
        }
      })
      .catch((_) => setCreateSucess(false));
  };

  const loginUser = (data) => {
    api
      .post("login", data)
      .then((res) => {
        localStorage.setItem("@HappyBudget:token", res.data.accessToken);
        setToken(res.data.accessToken);
        setLoginSuccess(true);
      })
      .catch((_) => setLoginSuccess(false));
  };

  return (
    <UserContext.Provider
      value={{
        loginUser,
        createUser,
        loginSuccess,
        createSuccess,
        token,
        userName,
        userId,
        setToken,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};

export const useUser = () => useContext(UserContext);
