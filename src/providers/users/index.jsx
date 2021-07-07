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
    if (localStorage.getItem("@HappyBudget:token")) {
      setToken(JSON.parse(localStorage.getItem("@HappyBudget:token")));
    }
    if (token !== "") {
      let decoderId = jwtDecode(token);
      setUserId(decoderId.sub);
      api
        .get(`users/${userId}`, {
          headers: {
            Authorization: `Bearer ${token}`,
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
        localStorage.setItem(
          "@HappyBudget:token",
          JSON.stringify(res.data.accessToken)
        );
        setToken(res.data.accessToken);
        setLoginSuccess(true);
      })
      .catch((_) => setLoginSuccess(false));
  };
  const user = {
    email: "rapha@mail.com",
    password: "123456",
  };
  loginUser(user);
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
      }}
    >
      {children}
    </UserContext.Provider>
  );
};

export const useUser = () => useContext(UserContext);
