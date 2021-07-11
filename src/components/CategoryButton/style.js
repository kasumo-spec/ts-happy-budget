import styled from "styled-components";

export const CategoryButtons = styled.button`
  padding: 10px;
  border-radius: 5px;
  background-color: ${(props) =>
    props.selected === true ? `var(--${props.category})` : "transparent"};
  color: ${(props) =>
    props.category === "others" ? "var(--blue-green)" : "var(--white)"};
  font-size: 12px;
  font-weight: 600;
  transition: 300ms;
  padding: 6px 1px;
  border: 3px solid ${(props) => props.category};
  display: flex;
  align-items: center;
  position: relative;
  z-index: 1;
  img {
    margin-left: 25px;
    width: 100%;
    height: 100%;
    padding-bottom: 2px;
  }

  :hover {
    filter: brightness(0.85);
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
