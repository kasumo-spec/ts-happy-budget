import { useState, useEffect } from "react";

import { GoGraph } from "react-icons/go";
import { BsLayoutTextWindow } from "react-icons/bs";
import { BiPlus } from "react-icons/bi";

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

  const [disablePrevious, setDisablePrevious] = useState(false);
  const [disableNext, setDisableNext] = useState(false);

  const { debits } = useDebits();

  const handleChange = (event, value) => {
    setMonth(month + value);
  };

  const handleCategorySelected = (event) => {
    const value = event.target.alt;
    if (value === categorySelected) {
      setCategorySelected("");
      setFilteredDebits([]);
    } else {
      setCategorySelected(value);
    }
  };

  useEffect(() => {
    if (categorySelected !== "") {
      const debitsSelected = debits.filter(
        (debit) => debit.category === categorySelected
      );
      setFilteredDebits(debitsSelected);
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

        <BottomNavigation onChange={handleChange} showLabels>
          <BottomNavigationAction
            value={-1}
            disabled={disablePrevious}
            icon={<ChevronLeftIcon />}
          />
          <BottomNavigationAction
            disabled={true}
            label={`${months[month - 1]} de ${year}`}
          />
          <BottomNavigationAction
            value={1}
            disabled={disableNext}
            icon={<ChevronRightIcon />}
          />
        </BottomNavigation>

        <button>
          <BiPlus />
        </button>
      </header>

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
          <>
            {categorySelected ? (
              filteredDebits.length === 0 ? (
                <h3>
                  Não consta nenhum débito cadastrado nesta categoria, clique em
                  outra categoria ou selecione novamente esta categoria para
                  trazer todos os débitos
                </h3>
              ) : (
                filteredDebits.map((debit, index) => (
                  <Card key={index} category={debit.category} debit={debit} />
                ))
              )
            ) : debits.length === 0 ? (
              <h3>
                Nenhum débito cadastrado, clique no botão com sinal de mais (+)
                e comece a fazer o controle deste mês
              </h3>
            ) : (
              debits.map((debit, index) => (
                <Card key={index} category={debit.category} debit={debit} />
              ))
            )}
          </>
        </div>
      </ExpenseContent>
    </ExpenseContainer>
  );
};

export default ExpenseComponent;
