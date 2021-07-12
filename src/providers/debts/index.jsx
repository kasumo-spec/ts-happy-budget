import { createContext, useContext, useEffect, useState } from "react";
import api from "../../services";
import { useUser } from "../users";
import jwtDecode from "jwt-decode";

export const DebitContext = createContext([]);

export const DebitProvider = ({ children }) => {
  const { token, userId } = useUser();
  const [debitCreateSuccess, setDebitCreateSuccess] = useState(Boolean);
  const [debitEditSuccess, setDebitEditSuccess] = useState(Boolean);
  const [debitDeleteSuccess, setDebitDeleteSuccess] = useState(Boolean);
  const [debits, setDebits] = useState([]);
  const [totalDebits, setTtotalDebits] = useState([
    { category: "home", value: 0 },
    { category: "food", value: 0 },
    { category: "transport", value: 0 },
    { category: "health", value: 0 },
    { category: "study", value: 0 },
    { category: "hobby", value: 0 },
    { category: "pet", value: 0 },
    { category: "market", value: 0 },
    { category: "others", value: 0 },
  ]);

  const reqDay = new Date().toLocaleString("en-US", { day: "numeric" });

  useEffect(() => {
    if (debits.length > 0) {
      for (let i = 0; i < totalDebits.length; i++) {
        const partial = totalDebits[i];
        partial.value = 0;

        for (let j = 0; j < debits.length; j++) {
          const partialDebts = debits[j];
          if (partial.category === partialDebts.category) {
            partial.value += partialDebts.value;
          }
        }
      }
      setTtotalDebits([...totalDebits]);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [debits]);

  useEffect(() => {
    if (token !== "") {
      api
        .get(`debit/?userId=${userId}`, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        })
        .then((res) => {
          setDebits(res.data);
        });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [userId, debitCreateSuccess, debitEditSuccess, debitDeleteSuccess]);

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
        }
      })
      .catch((_) => setDebitCreateSuccess(false));
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
      })
      .catch((_) => setDebitDeleteSuccess(false));
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
<<<<<<< HEAD
        totalDebits,
=======
>>>>>>> develop
      }}
    >
      {children}
    </DebitContext.Provider>
  );
};

export const useDebits = () => useContext(DebitContext);
