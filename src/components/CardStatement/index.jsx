import { CardContainer } from "./style";

import market from "../../assets/categorys/market.png";
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
import others from "../../assets/categorys/otherDebt.png";

import { FaRegTrashAlt } from "react-icons/fa";
import { useDebits } from "../../providers/debts";

const Card = ({ debit }) => {
  const { deleteDebit } = useDebits();
  const categorys = [
    "market",
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
    "others",
  ];

  const icons = [
    market,
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
    others,
  ];

  let image = icons[categorys.indexOf(debit.category.toLowerCase())];
  console.log(debit.category.toLowerCase());
  return (
    <CardContainer category={debit.category}>
      <img src={image} alt={debit.category} />
      <p>{debit.name}</p>
      <span>
        R${" "}
        {debit.value.toLocaleString("pt-br", {
          style: "currency",
          currency: "BRL",
        })}
      </span>
      <span>{debit.reqDay}</span>
      <button onClick={() => deleteDebit(debit.id)}>
        <FaRegTrashAlt />
      </button>
    </CardContainer>
  );
};

export default Card;
