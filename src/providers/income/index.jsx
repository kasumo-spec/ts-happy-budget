import { createContext, useContext, useEffect, useState } from "react";
import api from "../../services";
import { useUser } from "../users";

import { NotificationsContext } from "../notifications";

export const IncomeContext = createContext([]);

export const IncomeProvider = ({ children }) => {
  const { token, userId } = useUser();
  const [incomeCreateSuccess, setIncomeCreateSuccess] = useState(Boolean);
  const [incomeEditSuccess, setIncomeEditSuccess] = useState(Boolean);
  const [incomeDeleteSuccess, setIncomeDeleteSuccess] = useState(Boolean);
  const [incomes, setIncomes] = useState([]);
  const reqDay = new Date().toLocaleString("en-US", { day: "numeric" });
  const {
    newIncomeSuccess,
    newIncomeError,
    deleteIncomeSuccess,
    deleteIncomeError,
  } = useContext(NotificationsContext);

  useEffect(() => {
    if (token !== "") {
      api
        .get(`income/?userId=${userId}`, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        })
        .then((res) => {
          setIncomes(res.data);
        });
    }
  }, [
    incomeCreateSuccess,
    incomeEditSuccess,
    incomeDeleteSuccess,
    token,
    userId,
  ]);

  const createIncome = (data) => {
    api
      .post(
        "income",
        { ...data, reqDay },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      )
      .then((res) => {
        if (res.status === 201) {
          setIncomeCreateSuccess(true);
          newIncomeSuccess();
        }
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
        setIncomeDeleteSuccess(true);
        deleteIncomeSuccess();
      })
      .catch((_) => {
        setIncomeDeleteSuccess(false);
        deleteIncomeError();
      });
  };

  return (
    <IncomeContext.Provider
      value={{
        createIncome,
        editIncome,
        deleteIncome,
        incomes,
        incomeCreateSuccess,
        incomeEditSuccess,
        incomeDeleteSuccess,
      }}
    >
      {children}
    </IncomeContext.Provider>
  );
};

export const useIncome = () => useContext(IncomeContext);
