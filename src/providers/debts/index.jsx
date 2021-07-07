import { createContext, useContext, useEffect, useState } from "react";
import api from "../../services";
import { useUser } from "../users";

export const DebtContext = createContext([]);

export const DebtProvider = ({ children }) => {
  const { token, userId } = useUser();
  const [debtCreateSuccess, setDebtCreateSuccess] = useState(false);
  const [debtEditSuccess, setDebtEditSuccess] = useState(false);
  const [debtDeleteSuccess, setDebtDeleteSuccess] = useState(false);
  const [debts, setDebts] = useState([]);

  useEffect(() => {
    if (token !== "") {
      api
        .get(`debit/?userId=${userId}`, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        })
        .then((res) => {
          setDebts(res.data);
        });
    }
  }, [debtCreateSuccess, debtEditSuccess, debtDeleteSuccess, token]);

  const createDebt = (data) => {
    api
      .post("debit", data, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((res) => {
        if (res.status === 201) {
          setDebtCreateSuccess(true);
        }
      })
      .catch((_) => setDebtCreateSuccess(false));
  };

  const editDebt = (data, id) => {
    api
      .patch(`debit/${id}`, data, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((_) => {
        setDebtEditSuccess(true);
      })
      .catch((_) => setDebtEditSuccess(false));
  };

  const deleteDebt = (data) => {
    api
      .delete(`debit/${data}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((_) => {
        setDebtDeleteSuccess(true);
      })
      .catch((_) => setDebtDeleteSuccess(false));
  };

  return (
    <DebtContext.Provider
      value={{
        createDebt,
        editDebt,
        deleteDebt,
        debts,
        debtCreateSuccess,
        debtEditSuccess,
        debtDeleteSuccess,
      }}
    >
      {children}
    </DebtContext.Provider>
  );
};

export const useDebts = () => useContext(DebtContext);
