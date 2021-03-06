import { useState, useEffect } from "react";

import { GoGraph } from "react-icons/go";
import { BsLayoutTextWindow } from "react-icons/bs";
import NewExpenseModal from "../NewExpenseModal";

import Card from "../CardStatement";
import CategoryButton from "../CategoryButton";

import {
  ButtonSetComponent,
  CategoryFilters,
  ExpenseContainer,
  ExpenseContent,
} from "./styles";

import { useDebits } from "../../providers/debts";

import { BottomNavigation, BottomNavigationAction } from "@material-ui/core";
import ChevronLeftIcon from "@material-ui/icons/ChevronLeft";
import ChevronRightIcon from "@material-ui/icons/ChevronRight";
import { useBudget } from "../../providers/budget";
import { PieChartComponent } from "../Chart/pieChart";
import { Link } from "react-router-dom";

import noBudget from "../../assets/png/noBudget.png";
import notFound from "../../assets/png/notFound.png";
import noExpense from "../../assets/png/noExpense.png";
import noExpenseGraph from "../../assets/png/noExpenseGraph.png";
import Loading from "../../components/Loading";
const ExpenseComponent = () => {
  const months = [
    "Janeiro",
    "Fevereiro",
    "Março",
    "Abril",
    "Maio",
    "Junho",
    "Julho",
    "Agosto",
    "Setembro",
    "Outubro",
    "Novembro",
    "Dezembro",
  ];

  const [active, setActive] = useState(true);
  const [categorySelected, setCategorySelected] = useState("");
  const [filteredDebits, setFilteredDebits] = useState([]);
  const [monthlyDebts, setMonthlyDebts] = useState([]);
  const [totalPerCategories, setTotalPerCategories] = useState([
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

  const [hasBudget, setHasBudget] = useState(false);

  const { debits, loading } = useDebits();
  const { budgets } = useBudget();

  const [month, setMonth] = useState(
    new Date().toLocaleString("en-US", {
      month: "numeric",
    })
  );
  const [year, setYear] = useState(
    new Date().toLocaleString("en-US", {
      year: "numeric",
    })
  );

  const handleChange = (_, value) => {
    setCategorySelected("");
    if (value < 0) {
      if (parseInt(month) === 1) {
        setYear(parseInt(year) + value);
        setMonth("12");
      } else {
        const newMonth = parseInt(month) + value;
        setMonth(newMonth.toString());
      }
    } else {
      if (parseInt(month) === 12) {
        setYear(parseInt(year) + value);
        setMonth("1");
      } else {
        const newMonth = parseInt(month) + value;
        setMonth(newMonth.toString());
      }
    }
  };

  useEffect(() => {
    setMonthlyDebts([]);
    setHasBudget(false);
    budgets.forEach((budget) => {
      if (budget.name === `${month}/${year}`) {
        setHasBudget(true);
        let result = [];
        result = debits.filter((debit) => {
          return debit.budgetId === budget.id;
        });
        return setMonthlyDebts(result);
      }
    });
    if (categorySelected !== "") {
      const debitsSelected = monthlyDebts.filter(
        (debit) => debit.category === categorySelected
      );
      setFilteredDebits(debitsSelected);
    }
    if (monthlyDebts.length > 0 && active === false) {
      for (let i = 0; i < totalPerCategories.length; i++) {
        const partial = totalPerCategories[i];
        partial.value = 0;

        for (let j = 0; j < monthlyDebts.length; j++) {
          const partialDebts = monthlyDebts[j];
          if (partial.category === partialDebts.category) {
            partial.value += partialDebts.value;
          }
        }
      }
      setTotalPerCategories([...totalPerCategories]);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [debits, month, categorySelected, active]);

  const handleCategorySelected = (event) => {
    const value = event.target.alt;
    if (value === categorySelected) {
      setCategorySelected("");
      setFilteredDebits([]);
    } else {
      setCategorySelected(value);
    }
  };

  const handleActiveComponent = (element) => {
    if (element === "chart" && active === true) {
      setActive(false);
    }
    if (element === "statement" && active === false) {
      setActive(true);
    }
  };

  return (
    <>
      {loading ? (
        <Loading />
      ) : (
        <ExpenseContainer>
          <header>
            <div className="buttonContent">
              <ButtonSetComponent
                active={!active}
                onClick={() => handleActiveComponent("chart")}
              >
                <GoGraph />
              </ButtonSetComponent>
              <ButtonSetComponent
                active={active}
                onClick={() => handleActiveComponent("statement")}
              >
                <BsLayoutTextWindow />
              </ButtonSetComponent>
            </div>
            <div className="months">
              <BottomNavigation
                style={{ height: "50px", background: "transparent" }}
                onChange={handleChange}
                showLabels
              >
                <BottomNavigationAction value={-1} icon={<ChevronLeftIcon />} />
                <BottomNavigationAction
                  disabled={true}
                  label={`${months[month - 1]} de ${year}`}
                />
                <BottomNavigationAction value={1} icon={<ChevronRightIcon />} />
              </BottomNavigation>
            </div>
            {hasBudget ? (
              <NewExpenseModal secondary />
            ) : (
              <Link to="/budgets">Criar Orçamento</Link>
            )}
          </header>

          {active ? (
            <ExpenseContent>
              <CategoryFilters>
                <h4>Filtrar por categoria</h4>
                <div>
                  <CategoryButton
                    onClickFunc={(e) => {
                      handleCategorySelected(e);
                    }}
                    category="market"
                    selected={categorySelected === "market"}
                    value="market"
                  />
                  <CategoryButton
                    onClickFunc={(e) => {
                      handleCategorySelected(e);
                    }}
                    category="study"
                    selected={categorySelected === "study"}
                    value="study"
                  />
                  <CategoryButton
                    onClickFunc={(e) => {
                      handleCategorySelected(e);
                    }}
                    category="transport"
                    selected={categorySelected === "transport"}
                    value="transport"
                  />
                  <CategoryButton
                    onClickFunc={(e) => {
                      handleCategorySelected(e);
                    }}
                    category="pet"
                    selected={categorySelected === "pet"}
                    value="pet"
                  />
                  <CategoryButton
                    onClickFunc={(e) => {
                      handleCategorySelected(e);
                    }}
                    category="health"
                    selected={categorySelected === "health"}
                    value="health"
                  />
                  <CategoryButton
                    onClickFunc={(e) => {
                      handleCategorySelected(e);
                    }}
                    category="food"
                    selected={categorySelected === "food"}
                    value="food"
                  />

                  <CategoryButton
                    onClickFunc={(e) => {
                      handleCategorySelected(e);
                    }}
                    category="hobby"
                    selected={categorySelected === "hobby"}
                    value="hobby"
                  />
                  <CategoryButton
                    onClickFunc={(e) => {
                      handleCategorySelected(e);
                    }}
                    category="home"
                    selected={categorySelected === "home"}
                    value="home"
                  />

                  <CategoryButton
                    onClickFunc={(e) => {
                      handleCategorySelected(e);
                    }}
                    category="others"
                    selected={categorySelected === "others"}
                    value="others"
                  />
                </div>
              </CategoryFilters>

              <div className="statement">
                <h2>Extrato de despesas</h2>
                {hasBudget ? (
                  <>
                    {categorySelected ? (
                      filteredDebits.length === 0 ? (
                        <h3>
                          Nenhum débito cadastrado nesta categoria, clique em
                          outra categoria ou selecione novamente esta categoria
                          para trazer todos os débitos
                        </h3>
                      ) : (
                        filteredDebits.map((debit, index) => (
                          <Card
                            key={index}
                            category={debit.category}
                            entry={debit}
                            type="debit"
                          />
                        ))
                      )
                    ) : monthlyDebts.length === 0 ? (
                      <>
                        <img src={noExpense} alt="no Expenses"></img>
                        <h3>
                          Nenhuma despesa cadastrada, clique no botão
                          "Adicionar" acima para e faça o primeiro registro
                          deste mês.
                        </h3>
                      </>
                    ) : (
                      monthlyDebts.map((debit, index) => (
                        <Card
                          key={index}
                          category={debit.category}
                          entry={debit}
                          type="debit"
                        />
                      ))
                    )}
                  </>
                ) : month === "7" ? (
                  <>
                    <img src={noBudget} alt="noBudget" />
                    <h3>
                      Para cadastrar uma despesa é necessário ter criado o
                      orçamento do mês. Para isso clique no Criar Orçamento
                    </h3>
                  </>
                ) : (
                  <>
                    <img alt="not allowed" src={notFound}></img>
                    <h3>Nenhum registro encontrado</h3>
                    <h3>Reitas e depesas só podem ser criadas no mês atual</h3>
                  </>
                )}
              </div>
            </ExpenseContent>
          ) : monthlyDebts.length === 0 ? (
            <>
              <img src={noExpenseGraph} alt="no expense found"></img>
              <h3>Nenhum débito cadastrado neste orçamento.</h3>
            </>
          ) : (
            <PieChartComponent data={totalPerCategories} />
          )}
        </ExpenseContainer>
      )}
    </>
  );
};

export default ExpenseComponent;
