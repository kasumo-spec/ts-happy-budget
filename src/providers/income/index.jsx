import { createContext, useContext, useEffect, useState } from "react";
import api from "../../services";
import { useUser } from "../users";
import { NotificationsContext } from "../notifications";
import { useBudget } from "../budget";
import jwtDecode from "jwt-decode";

export const IncomeContext = createContext([]);

export const IncomeProvider = ({ children }) => {
  const { token, userId, setToken } = useUser();
  const { idBudget } = useBudget();
  const [incomeCreateSuccess, setIncomeCreateSuccess] = useState(Boolean);
  const [incomeEditSuccess, setIncomeEditSuccess] = useState(Boolean);
  const [incomeDeleteSuccess, setIncomeDeleteSuccess] = useState(Boolean);
  const [incomes, setIncomes] = useState([]);
  const [totalIncomes, setTotalIncomes] = useState({});
  const [loading, setLoading] = useState(true);
  const categoryTest = {
    salary: 0,
    gift: 1,
    investment: 2,
    others: 3,
    total: 4,
  };

  const {
    newIncomeSuccess,
    newIncomeError,
    deleteIncomeSuccess,
    deleteIncomeError,
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
        .get(`income/?userId=${userId}`, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        })
        .then((res) => {
          setIncomes(res.data);
          let rebuildIncome = [[], [], [], [], []];
          res.data.forEach((income) => {
            if (income.budgetId === idBudget) {
              rebuildIncome[categoryTest[`${income.category}`]].push({
                category: income.category,
                value: income.value,
              });
            }
          });
          for (let i = 0; i < 4; i++) {
            rebuildIncome[i] = rebuildIncome[i].reduce(
              (a, b) => a + b.value,
              0
            );
            rebuildIncome[4].push(rebuildIncome[i]);
          }
          rebuildIncome[4] = rebuildIncome[4].reduce((a, b) => a + b, 0);
          setTotalIncomes({
            salary: rebuildIncome[0],
            gift: rebuildIncome[1],
            investment: rebuildIncome[2],
            others: rebuildIncome[3],
            total: rebuildIncome[4],
          });
          setLoading(false);
        })
        .catch(() => {
          setLoading(false);
          setIncomes([]);
          setTotalIncomes({});
        });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [
    incomeCreateSuccess,
    incomeEditSuccess,
    incomeDeleteSuccess,
    token,
    userId,
    idBudget,
  ]);

  const createIncome = (data) => {
    api
      .post("income", data, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((_) => {
        if (incomeCreateSuccess === true) {
          setIncomeCreateSuccess(false);
        } else {
          setIncomeCreateSuccess(true);
        }
        newIncomeSuccess();
      })
      .catch((_) => {
        setIncomeCreateSuccess(false);
        newIncomeError();
      });
  };

  const editIncome = (data, id) => {
    api
      .patch(`income/${id}`, data, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((_) => {
        setIncomeEditSuccess(true);
      })
      .catch((_) => setIncomeEditSuccess(false));
  };

  const deleteIncome = (data) => {
    api
      .delete(`income/${data}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((_) => {
        if (incomeDeleteSuccess === true) {
          setIncomeDeleteSuccess(false);
        } else {
          setIncomeDeleteSuccess(true);
        }
        deleteIncomeSuccess();
      })
      .catch((_) => {
        setIncomeDeleteSuccess(false);
        deleteIncomeError();
        setIncomes([]);
      });
  };

  return (
    <IncomeContext.Provider
      value={{
        createIncome,
        editIncome,
        deleteIncome,
        incomes,
        totalIncomes,
        incomeCreateSuccess,
        incomeEditSuccess,
        incomeDeleteSuccess,
        loading,
      }}
    >
      {children}
    </IncomeContext.Provider>
  );
};

export const useIncome = () => useContext(IncomeContext);
