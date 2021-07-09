import { GoGraph } from "react-icons/go";
import { BsLayoutTextWindow } from "react-icons/bs";
import { BiPlus } from "react-icons/bi";
import Card from "../CardStatement";

// import salary from "../../assets/categorys/money.png";
// import gift from "../../assets/categorys/gift.png";
// import investment from "../../assets/categorys/investment.png";
// import otherIncome from "../../assets/categorys/otherIncome.png";
import market from "../../assets/categorys/market.png";
import food from "../../assets/categorys/food.png";
import health from "../../assets/categorys/health.png";
import pet from "../../assets/categorys/pet.png";
import home from "../../assets/categorys/home.svg";
import hobby from "../../assets/categorys/hobby.png";
import study from "../../assets/categorys/study.png";
import transport from "../../assets/categorys/transport.png";
import otherDebt from "../../assets/categorys/otherDebt.png";

import {
  ButtonSetComponent,
  CategoryFilters,
  ExpenseContainer,
  ExpenseContent,
} from "./styles";
import { useState } from "react";
import { useDebits } from "../../providers/debts";

const ExpenseComponent = () => {
  const [active, setActive] = useState(true);

  const { debits } = useDebits();

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
        <div> - julho 2021 - </div>

        <button>
          <BiPlus />
        </button>
      </header>

      <ExpenseContent>
        <CategoryFilters>
          <h4>Filtrar por categoria</h4>
          <div>
            <button>
              <img src={market} alt="market" />
            </button>
            <button>
              <img src={study} alt="study" />
            </button>
            <button>
              <img src={transport} alt="transport" />
            </button>
            <button>
              <img src={pet} alt="pet" />
            </button>
            <button>
              <img src={health} alt="health" />
            </button>
            <button>
              <img src={food} alt="food" />
            </button>
            <button>
              <img src={hobby} alt="hobby" />
            </button>
            <button>
              <img src={home} alt="home" />
            </button>
            <button>
              <img src={otherDebt} alt="other" />
            </button>
          </div>
        </CategoryFilters>

        <div className="statement">
          <h2>Extrato de despesas</h2>
          {debits.length === 0 ? (
            <h3>
              Nenhum débito cadastrado, clique no botão com sinal de mais (+) e
              comece a fazer o controle deste mês
            </h3>
          ) : (
            debits.map((debit, index) => (
              <Card key={index} category={debit.category} debit={debit} />
            ))
          )}
        </div>
      </ExpenseContent>
    </ExpenseContainer>
  );
};

export default ExpenseComponent;
