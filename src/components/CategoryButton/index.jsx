import { CategoryButtons } from "./styles";
// import salary from "../../assets/svg";
// --gift: #a33e57;
// --investment: #3e517a;
// --food: #a1867f;
// --health: #ff686b;
// --pet: #6c91c2;
// --home: #654a3e;
// --fun: #f5d329;
// --education: #00c49a;
// --transport: #495383;
// --otherIncome: #057ef0;
// --otherDebt: #edfcf9;

const CategoryButton = ({ onClickFunc, children, category, ...rest }) => {
  return (
    <CategoryButtons
      type="button"
      category={category}
      onClick={onClickFunc}
      {...rest}
    >
      {children}
      <img src="" alt="" />
    </CategoryButtons>
  );
};

export default CategoryButton;
