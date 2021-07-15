import { createContext, useContext, useEffect, useState } from "react";
import api from "../../services";
import { useUser } from "../users";
import jwtDecode from "jwt-decode";

export const BudgetContext = createContext([]);

export const BudgetProvider = ({ children }) => {
  const { userId, token, setToken } = useUser();
  const reqMonth = new Date().toLocaleString("en-US", {
    month: "numeric",
    year: "numeric",
  });
  const [budgetCreateSuccess, setBudgetCreateSuccess] = useState(Boolean);
  const [budgetDeleteSuccess, setBudgetDeleteSuccess] = useState(Boolean);
  const [budgets, setBudgets] = useState([]);
  const [idBudget, setIdBudget] = useState(Number);

  useEffect(() => {
    if (token !== "") {
      let decoderId = jwtDecode(token);
      let dateNow = new Date();
      if (decoderId.exp < Math.floor(dateNow.getTime() / 1000)) {
        localStorage.clear();
        return setToken("");
      }
      api
        .get(`budget/?userId=${userId}`, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        })
        .then((res) => {
          const idBudget = res.data[0].id;
          setIdBudget(idBudget);
          setBudgets(res.data);
          res.data.forEach((budget) => {
            if (budget.name === reqMonth) {
              setIdBudget(budget.id);
            }
          });
        })
        .catch(() => {
          setBudgets([]);
          setIdBudget();
        });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [userId, budgetCreateSuccess, budgetDeleteSuccess]);

  const createBudget = (data, prediction) => {
    let budgetInfos = {
      userId: userId,
      name: reqMonth,
      prediction: prediction,
      data: data,
    };
    api
      .post("budget", budgetInfos, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((res) => {
        if (budgetCreateSuccess === false) {
          setBudgetCreateSuccess(true);
        } else {
          setBudgetCreateSuccess(false);
        }
      })
      .catch((_) => {
        if (budgetCreateSuccess === false) {
          setBudgetCreateSuccess(true);
        } else {
          setBudgetCreateSuccess(false);
        }
      });
  };

  const deleteBudget = (idBudget) => {
    api
      .delete(`budget/${idBudget}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((res) => {
        if (budgetDeleteSuccess === false) {
          setBudgetDeleteSuccess(true);
        } else {
          setBudgetDeleteSuccess(false);
        }
      })
      .catch((_) => {
        if (budgetDeleteSuccess === false) {
          setBudgetDeleteSuccess(true);
        } else {
          setBudgetDeleteSuccess(false);
        }
      });
  };

  return (
    <BudgetContext.Provider
      value={{
        budgets,
        idBudget,
        setIdBudget,
        budgetCreateSuccess,
        budgetDeleteSuccess,
        createBudget,
        deleteBudget,
        reqMonth,
      }}
    >
      {children}
    </BudgetContext.Provider>
  );
};

export const useBudget = () => useContext(BudgetContext);
