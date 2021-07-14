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
import { PieChartComponent } from "../Chart/pieChart";
import { Link } from "react-router-dom";

import noData from "../../assets/png/noDataChart.png";

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
  const [monthlyIncomes, setMonthlyIncomes] = useState([]);
  const [totalPerCategories, setTotalPerCategories] = useState([
    { category: "salary", value: 0 },
    { category: "gift", value: 0 },
    { category: "investment", value: 0 },
    { category: "others", value: 0 },
  ]);

  const [hasBudget, setHasBudget] = useState(false);

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
    setHasBudget(false);
    budgets.forEach((budget) => {
      if (budget.name === `${month}/${year}`) {
        setHasBudget(true);
        let result = [];
        result = incomes.filter((income) => {
          return income.budgetId === budget.id;
        });
        return setMonthlyIncomes(result);
      }
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [budgets, incomes, month]);

  useEffect(() => {
    if (categorySelected !== "") {
      const incomesSelected = monthlyIncomes.filter(
        (income) => income.category === categorySelected
      );
      setFilteredIncomes(incomesSelected);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [categorySelected]);

  useEffect(() => {
    if (monthlyIncomes.length > 0 && active === false) {
      for (let i = 0; i < totalPerCategories.length; i++) {
        const partial = totalPerCategories[i];
        partial.value = 0;

        for (let j = 0; j < monthlyIncomes.length; j++) {
          const partialDebts = monthlyIncomes[j];
          if (partial.category === partialDebts.category) {
            partial.value += partialDebts.value;
          }
        }
      }
      setTotalPerCategories([...totalPerCategories]);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [incomes, month, active]);

  const handleCategorySelected = (event) => {
    const value = event.target.alt;
    if (value === categorySelected) {
      setCategorySelected("");
      setFilteredIncomes([]);
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
        {hasBudget ? (
          <NewIncomeModal />
        ) : (
          <Link to="/budgets">Adicionar Orçamento</Link>
        )}
      </header>
      {active ? (
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
            {hasBudget ? (
              <>
                {categorySelected ? (
                  filteredIncomes.length === 0 ? (
                    <>
                      <h3>
                        Não consta nenhuma receita cadastrado nesta categoria,
                        clique em outra categoria ou selecione a mesma categoria
                        para trazer todas as receitas cadastradas
                      </h3>
                      <img src={noData} alt="noData"></img>
                    </>
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
                    Nenhuma receita cadastrada para esse período, clique no
                    botão "Adicionar" acima e faça o primeiro registro deste
                    mês.
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
            ) : (
              <>
                <h3>
                  Antes de registrar as receitas é necessário criar um orçamento
                  para esse período. E para isso clique no "Adicionar Orçamento"
                  e selecione o período desejado"
                </h3>
                <img
                  src={noData}
                  alt="noData"
                  style={{ width: 300, margin: "0 auto" }}
                ></img>
              </>
            )}
          </div>
        </IncomeContent>
      ) : monthlyIncomes.length === 0 ? (
        <h3>Nenhuma receita cadastrado neste orçamento.</h3>
      ) : (
        <PieChartComponent data={totalPerCategories} />
      )}
    </IncomeContainer>
  );
};

export default IncomeComponent;
