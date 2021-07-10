import styled from "styled-components";

export const CardContainer = styled.div`
  border-radius: 5px;
  margin: 3px;
  background-color: ${(props) =>
    props.category ? `var(--${props.category})` : "var(--violet)"};
  color: ${(props) =>
    props.category === "others" ? "var(--blue-green)" : "var(--white)"};
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
  justify-content: space-between;
  align-items: center;
  position: relative;
  z-index: 1;
  img {
    margin: 0 10px;
    width: 100%;
    height: 100%;
    padding-bottom: 2px;
    flex: 1;
  }
  p {
    flex: 4;
    text-align: center;
  }
  span {
    flex: 2;
  }
  button {
    background-color: transparent;
    color: black;
    transition: all 0.3s;
    border-radius: 50%;
    svg {
      width: 20;
      height: 20px;
    }
    :hover {
      color: var(--blue-green);
    }
  }

  @media (min-width: 310px) {
    padding: 6px 5px;
  }

  @media (min-width: 500px) {
    font-size: 14px;
  }

  @media (min-width: 800px) {
    font-size: 20px;
  }
`;
