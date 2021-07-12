import { createContext, useContext, useEffect, useState } from "react";
import api from "../../services";
import { useUser } from "../users";
import jwtDecode from "jwt-decode";
import { NotificationsContext } from "../notifications"

export const DebitContext = createContext([]);

export const DebitProvider = ({ children }) => {
  const { token } = useUser();
  const [debitCreateSuccess, setDebitCreateSuccess] = useState(Boolean);
  const [debitEditSuccess, setDebitEditSuccess] = useState(Boolean);
  const [debitDeleteSuccess, setDebitDeleteSuccess] = useState(Boolean);
  const [debits, setDebits] = useState([]);
  const reqDay = new Date().toLocaleString("en-US", { day: "numeric" });
  const { newDebitSuccess, newDebitError, deleteDebitSuccess, deleteDebitError } = useContext(NotificationsContext)

  useEffect(() => {
    if (token !== "") {
      api
        .get("debit", {
          headers: {
            Authorization: `Bearer ${localStorage.getItem(
              "@HappyBudget:token"
            )}`,
          },
        })
        .then((res) => {
          let decoderId = jwtDecode(localStorage.getItem("@HappyBudget:token"));
          let userForEffect = parseInt(decoderId.sub);
          let userDebits = res.data.filter(
            (item) => item.userId === userForEffect
          );
          setDebits(userDebits);
        });
    }
  }, [debitCreateSuccess, debitEditSuccess, debitDeleteSuccess]);

  const createDebit = (data) => {
    api
      .post(
        "debit",
        { ...data, reqDay },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      )
      .then((res) => {
        if (res.status === 201) {
          setDebitCreateSuccess(true);
          newDebitSuccess()
        }
      })
      .catch((_) => {
        setDebitCreateSuccess(false)
        newDebitError()
      });
  };

  const editDebit = (data, id) => {
    api
      .patch(`debit/${id}`, data, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((_) => {
        setDebitEditSuccess(true);
      })
      .catch((_) => setDebitEditSuccess(false));
  };

  const deleteDebit = (data) => {
    api
      .delete(`debit/${data}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((_) => {
        setDebitDeleteSuccess(true);
        deleteDebitSuccess()
      })
      .catch((_) => {
        setDebitDeleteSuccess(false)
        deleteDebitError()
      });
  };

  return (
    <DebitContext.Provider
      value={{
        createDebit,
        editDebit,
        deleteDebit,
        debits,
        debitCreateSuccess,
        debitEditSuccess,
        debitDeleteSuccess,
      }}
    >
      {children}
    </DebitContext.Provider>
  );
};

export const useDebits = () => useContext(DebitContext);
