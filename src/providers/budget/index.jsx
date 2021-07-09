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
  const [budgetsId, setBudgetsId] = useState(0);

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
          setBudgets(res.data[0].data);
          setBudgetsId(idBudget);
        });
    }
  }, [userId, budgetCreateSuccess, budgetDeleteSuccess]);

  const createBudget = (data) => {
    let budgetInfos = {
      userId: userId,
      name: reqMonth,
      data: { data },
    };
    api.post("budget", budgetInfos).then((res) => {
      if (res.status === 201) {
        setBudgetCreateSuccess(true);
      }
    });
  };

  const deleteBudget = (data) => {
    api
      .delete(`budget/${data}`, {
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
        budgetCreateSuccess,
        budgetDeleteSuccess,
        createBudget,
        deleteBudget,
        budgetsId,
      }}
    >
      {children}
    </BudgetContext.Provider>
  );
};

export const useBudget = () => useContext(BudgetContext);
