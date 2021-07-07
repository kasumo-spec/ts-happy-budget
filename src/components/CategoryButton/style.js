import styled from "styled-components";

export const CategoryButtons = styled.button`
  :root {
    //primary's colors:
    --salary: #3cb1b9;
    --gift: #a33e57;
    --investment: #3e517a;
    --food: #a1867f;
    --health: #ff686b;
    --pet: #6c91c2;
    --home: #654a3e;
    --fun: #f5d329;
    --education: #00c49a;
    --transport: #495383;
    --otherIncome: #057ef0;
    --otherDebt: #edfcf9;
  }

  border-radius: 5px;
  background-color: ${(props) =>
    props.category ? `var(--${props.category})` : "var(--violet)"};
  color: ${(props) =>
    props.category === "otherDebt" ? "var(--blue-green)" : "var(--white)"};
  font-size: 12px;
  font-weight: 600;
  transition: 300ms;
  padding: 6px 1px;
  border: 3px solid
    ${(props) =>
      props.category === "otherDebt"
        ? "var(--blue-green)"
        : `var(--${props.category})`};
  display: flex;
  align-items: center;
  position: relative;
  z-index: 1;
  img {
    width: 20px;
    height: 20px;
  }

  :hover {
    filter: brightness(0.85);
  }

  @media (min-width: 310px) {
    padding: 6px 8px;
  }

  @media (min-width: 500px) {
    font-size: 14px;
    padding: 6px 20px;
  }

  @media (min-width: 800px) {
    font-size: 20px;
    padding: 6px 28px;
  }
`;
