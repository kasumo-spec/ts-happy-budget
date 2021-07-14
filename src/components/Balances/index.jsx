import { useDebits } from "../../providers/debts";
import { useIncome } from "../../providers/income";
import { useBudget } from "../../providers/budget";
import { useState } from "react";
import { useEffect } from "react";

const Balances = ({ type }) => {
  const { incomes } = useIncome();
  const { debits } = useDebits();
  const { budgets } = useBudget();

  const reqMonth = new Date().toLocaleString("en-US", {
    month: "numeric",
    year: "numeric",
  });

  const [actualIncomes, setActualIncomes] = useState([]);
  const [actualDebts, setActualDebts] = useState([]);

  const [incomeBalance, setIncomeBalance] = useState(0);
  const [debtBalance, setDebtBalance] = useState(0);
  const [totalBalance, setTotalBalance] = useState(0);

  useEffect(() => {
    setActualIncomes([]);
    setActualDebts([]);

    budgets.forEach((budget) => {
      if (budget.name === reqMonth) {
        let resultDebits = [];
        let resultIncomes = [];
        resultDebits = debits.filter((debit) => {
          return debit.budgetId === budget.id;
        });
        setActualDebts(resultDebits);
        resultIncomes = incomes.filter((income) => {
          return income.budgetId === budget.id;
        });
        setActualDebts(resultIncomes);
      }
    });
  }, [budgets, debits, incomes, reqMonth]);

  useEffect(() => {
    const totalIncome = actualIncomes.reduce((acc, income) => {
      return acc + income.value;
    });
    const totalDebt = actualDebts.reduce((acc, debt) => {
      return acc + debt.value;
    });
    setIncomeBalance(totalIncome);
    setDebtBalance(totalDebt);
    setTotalBalance(totalIncome - totalDebt);
  }, []);

  return (
    <>
      {type === "debt" ? (
        <h3>{debtBalance.toFixed(2)} R$</h3>
      ) : (
        <h3>{incomeBalance.toFixed(2)} R$</h3>
      )}
    </>
  );
};

export default Balances;
