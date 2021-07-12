import { useEffect, useState } from "react";

import { GoGraph } from "react-icons/go";
import { BsLayoutTextWindow } from "react-icons/bs";

import Card from "../CardStatement";
import CategoryButton from "../CategoryButton";
import NewIncomeModal from "../NewIncomeModal";
import { useIncome } from "../../providers/income";

import {
  ButtonSetComponent,
  CategoryFilters,
  IncomeContainer,
  IncomeContent,
} from "./styles";
import { useBudget } from "../../providers/budget";
import { BottomNavigation, BottomNavigationAction } from "@material-ui/core";
import ChevronLeftIcon from "@material-ui/icons/ChevronLeft";
import ChevronRightIcon from "@material-ui/icons/ChevronRight";

const IncomeComponent = () => {
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
  const [filteredIncomes, setFilteredIncomes] = useState([]);

  const { incomes, deleteIncome } = useIncome();
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

  const [monthlyIncomes, setMonthlyIncomes] = useState([]);

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
    setMonthlyIncomes([]);
    budgets.forEach((budget) => {
      if (budget.name === `${month}/${year}`) {
        let result = [];
        result = incomes.filter((income) => {
          return income.budgetId === budget.id;
        });
        return setMonthlyIncomes(result);
      }
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [budgets, incomes, month]);

  const handleCategorySelected = (event) => {
    const value = event.target.alt;
    if (value === categorySelected) {
      setCategorySelected("");
      setFilteredIncomes([]);
    } else {
      setCategorySelected(value);
    }
  };

  useEffect(() => {
    if (categorySelected !== "") {
      const incomesSelected = monthlyIncomes.filter(
        (income) => income.category === categorySelected
      );
      setFilteredIncomes(incomesSelected);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [categorySelected]);

  const handleActiveComponent = (element) => {
    if (element === "chart" && active === true) {
      setActive(false);
    }
    if (element === "statement" && active === false) {
      setActive(true);
    }
  };

  return (
    <IncomeContainer>
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

        <NewIncomeModal />
      </header>

      <IncomeContent>
        <CategoryFilters>
          <h4>Filtrar por categoria</h4>
          <div>
            <CategoryButton
              onClickFunc={(e) => {
                handleCategorySelected(e);
              }}
              category="salary"
              selected={categorySelected === "salary"}
              value="salary"
            />
            <CategoryButton
              onClickFunc={(e) => {
                handleCategorySelected(e);
              }}
              category="gift"
              selected={categorySelected === "gift"}
              value="gift"
            />
            <CategoryButton
              onClickFunc={(e) => {
                handleCategorySelected(e);
              }}
              category="investment"
              selected={categorySelected === "investment"}
              value="investment"
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
          <h2>Extrato de Receitas</h2>
          <>
            {categorySelected ? (
              filteredIncomes.length === 0 ? (
                <h3>
                  Não consta nenhuma receita cadastrado nesta categoria, clique
                  em outra categoria ou selecione a mesma categoria para trazer
                  todas as receitas cadastradas
                </h3>
              ) : (
                filteredIncomes.map((income, index) => (
                  <Card
                    key={index}
                    category={income.category}
                    entry={income}
                    onClickFunc={deleteIncome}
                  />
                ))
              )
            ) : monthlyIncomes.length === 0 ? (
              <h3>
                Nenhum débito cadastrado, clique no botão com sinal de mais (+)
                e comece a fazer o controle deste mês
              </h3>
            ) : (
              monthlyIncomes.map((income, index) => (
                <Card
                  key={index}
                  category={income.category}
                  entry={income}
                  onClickFunc={deleteIncome}
                />
              ))
            )}
          </>
        </div>
      </IncomeContent>
    </IncomeContainer>
  );
};

export default IncomeComponent;
