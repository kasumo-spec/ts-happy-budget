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

const IncomeComponent = () => {
  const [active, setActive] = useState(true);
  const [categorySelected, setCategorySelected] = useState("");
  const [filteredIncomes, setFilteredIncomes] = useState([]);

  const { incomes, deleteIncome } = useIncome();

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
      const incomesSelected = incomes.filter(
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
        <div> - julho 2021 - </div>

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
            ) : incomes.length === 0 ? (
              <h3>
                Nenhum débito cadastrado, clique no botão com sinal de mais (+)
                e comece a fazer o controle deste mês
              </h3>
            ) : (
              incomes.map((income, index) => (
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
