import { createContext, useContext, useEffect, useState } from "react";
import api from "../../services";
import { useUser } from "../users";
import { NotificationsContext } from "../notifications";
import { useBudget } from "../budget";
import jwtDecode from "jwt-decode";

export const DebitContext = createContext([]);

export const DebitProvider = ({ children }) => {
  const { token, userId, setToken } = useUser();
  const { idBudget } = useBudget();
  const [debitCreateSuccess, setDebitCreateSuccess] = useState(Boolean);
  const [debitEditSuccess, setDebitEditSuccess] = useState(Boolean);
  const [debitDeleteSuccess, setDebitDeleteSuccess] = useState(Boolean);
  const [debits, setDebits] = useState([]);
  const [totalDebits, setTotalDebits] = useState({});
  const [loading, setLoading] = useState(true);
  const categoryTest = {
    market: 0,
    food: 1,
    health: 2,
    pet: 3,
    home: 4,
    hobby: 5,
    transport: 6,
    study: 7,
    others: 8,
    total: 9,
  };

  const {
    newDebitSuccess,
    newDebitError,
    deleteDebitSuccess,
    deleteDebitError,
  } = useContext(NotificationsContext);

  useEffect(() => {
    if (token !== "" && userId !== 0) {
      let decoderId = jwtDecode(token);
      let dateNow = new Date();
      if (decoderId.exp < Math.floor(dateNow.getTime() / 1000)) {
        localStorage.clear();
        return setToken("");
      }
      api
        .get(`debit/?userId=${userId}`, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        })
        .then((res) => {
          setDebits(res.data);
          let rebuildDebit = [[], [], [], [], [], [], [], [], [], []];
          res.data.forEach((debit) => {
            if (debit.budgetId === idBudget) {
              rebuildDebit[categoryTest[`${debit.category}`]].push({
                category: debit.category,
                value: debit.value,
              });
            }
          });
          for (let i = 0; i < 9; i++) {
            rebuildDebit[i] = rebuildDebit[i].reduce((a, b) => a + b.value, 0);
            rebuildDebit[9].push(rebuildDebit[i]);
          }
          rebuildDebit[9] = rebuildDebit[9].reduce((a, b) => a + b, 0);

          setTotalDebits({
            market: rebuildDebit[0],
            food: rebuildDebit[1],
            health: rebuildDebit[2],
            pet: rebuildDebit[3],
            home: rebuildDebit[4],
            hobby: rebuildDebit[5],
            transport: rebuildDebit[6],
            study: rebuildDebit[7],
            others: rebuildDebit[8],
            total: rebuildDebit[9],
          });
          setLoading(false);
        })
        .catch(() => {
          setDebits([]);
          setLoading(false);
        });
    }
  }, [
    debitCreateSuccess,
    debitEditSuccess,
    debitDeleteSuccess,
    token,
    userId,
    idBudget,
  ]);

  const createDebit = (data) => {
    api
      .post("debit", data, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((_) => {
        if (debitCreateSuccess === false) {
          setDebitCreateSuccess(true);
        } else {
          setDebitCreateSuccess(false);
        }
        newDebitSuccess();
      })
      .catch((_) => {
        setDebitCreateSuccess(false);
        newDebitError();
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
        if (debitDeleteSuccess === false) {
          setDebitDeleteSuccess(true);
        } else {
          setDebitDeleteSuccess(false);
        }
        deleteDebitSuccess();
      })
      .catch((_) => {
        setDebitDeleteSuccess(false);
        deleteDebitError();
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
        totalDebits,
        loading,
      }}
    >
      {children}
    </DebitContext.Provider>
  );
};

export const useDebits = () => useContext(DebitContext);
