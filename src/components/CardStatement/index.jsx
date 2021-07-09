import { CardContainer } from "./style";

import salary from "../../assets/categorys/money.png";
import gift from "../../assets/categorys/gift.png";
import investment from "../../assets/categorys/investment.png";
import food from "../../assets/categorys/food.png";
import health from "../../assets/categorys/health.png";
import pet from "../../assets/categorys/pet.png";
import home from "../../assets/categorys/home.svg";
import hobby from "../../assets/categorys/hobby.png";
import study from "../../assets/categorys/study.png";
import transport from "../../assets/categorys/transport.png";
import otherIncome from "../../assets/categorys/otherIncome.png";
import otherDebt from "../../assets/categorys/otherDebt.png";

import { FaRegTrashAlt } from "react-icons/fa";

const Card = ({ onClickFunc, children, category, ...rest }) => {
  const categorys = [
    "salary",
    "gift",
    "investment",
    "food",
    "health",
    "pet",
    "home",
    "hobby",
    "study",
    "transport",
    "otherIncome",
    "otherDebt",
  ];

  const icons = [
    salary,
    gift,
    investment,
    food,
    health,
    pet,
    home,
    hobby,
    study,
    transport,
    otherIncome,
    otherDebt,
  ];

  let image = icons[categorys.indexOf(category)];

  return (
    <CardContainer category={category}>
      <img src={image} alt={category} />
      <p>Presente de aniversário</p>
      <span>1.000,00 R$</span>
      <span>07/07/2021</span>
      <button>
        <FaRegTrashAlt />
      </button>
    </CardContainer>
  );
};

export default Card;
