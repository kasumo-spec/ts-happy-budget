import { createContext, useContext, useEffect, useState } from "react";
import api from "../../services";
import { useUser } from "../users";

export const DebtContext = createContext([]);

export const DebtProvider = ({ children }) => {
  const { token } = useUser();
  const [debtCreateSuccess, setDebtCreateSuccess] = useState(Boolean);
  const [debtEditSuccess, setDebtEditSuccess] = useState(Boolean);
  const [debtDeleteSuccess, setDebtDeleteSuccess] = useState(Boolean);
  const [debts, setDebts] = useState([]);

  useEffect(() => {
    if (token !== "") {
      api
        .get("debit", {
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
      .post("debt", data, {
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
      .patch(`debt/${id}`, data, {
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
      .delete(`debt/${data}`, {
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
