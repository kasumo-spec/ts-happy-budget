import { CategoryButtons } from "./style";
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

const CategoryButton = ({
  onClickFunc,
  children,
  category,
  value,
  selected,
  ...rest
}) => {
  const categorys = [
    "salary",
    "gift",
    "investment",
    "market",
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
    salary,
    gift,
    investment,
    market,
    food,
    health,
    pet,
    home,
    hobby,
    study,
    transport,
    others,
  ];

  let image = icons[categorys.indexOf(category)];

  return (
    <CategoryButtons
      type="button"
      category={category}
      onClick={onClickFunc}
      selected={selected}
      value={value}
      {...rest}
    >
      {children}
      <img src={image} alt={category} />
    </CategoryButtons>
  );
};

export default CategoryButton;
