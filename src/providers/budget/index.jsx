import { createContext, useContext, useEffect, useState } from "react";
import api from "../../services";
import { useUser } from "../users";

export const BudgetContext = createContext([]);

export const BudgetProvider = ({ children }) => {
  const { userId, token } = useUser();
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
        });
    }
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
        if (res.status === 201) {
          setBudgetCreateSuccess(true);
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
        if (res.status === 200) {
          setBudgetDeleteSuccess(true);
        }
      })
      .catch((_) => {
        setBudgetDeleteSuccess(false);
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
        reqMonth
      }}
    >
      {children}
    </BudgetContext.Provider>
  );
};

export const useBudget = () => useContext(BudgetContext);
