import { createContext, useContext, useEffect, useState } from "react";
import api from "../../services";
import { useUser } from "../users";

export const DebitContext = createContext([]);

export const DebitProvider = ({ children }) => {
  const { token, userId } = useUser();
  const [debitCreateSuccess, setDebitCreateSuccess] = useState(Boolean);
  const [debitEditSuccess, setDebitEditSuccess] = useState(Boolean);
  const [debitDeleteSuccess, setDebitDeleteSuccess] = useState(Boolean);
  const [debits, setDebits] = useState([]);
  const [totalDebits, setTtotalDebits] = useState([
    { category: "Moradia", value: 0 },
    { category: "Alimentação", value: 0 },
    { category: "Transporte", value: 0 },
    { category: "Saúde", value: 0 },
    { category: "Educação", value: 0 },
    { category: "Lazer", value: 0 },
    { category: "Pets", value: 0 },
    { category: "Outros", value: 0 },
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
        totalDebits,
      }}
    >
      {children}
    </DebitContext.Provider>
  );
};

export const useDebits = () => useContext(DebitContext);
