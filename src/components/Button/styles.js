import styled from "styled-components";

export const ButtonType = styled.button`
  border-radius: 5px;
  background-color: ${(props) =>
    props.whiteSchema ? "var(--white)" : "var(--violet)"};
  color: ${(props) => (props.whiteSchema ? "var(--violet)" : "var(--white)")};
  font-size: 12px;
  font-weight: 600;
  transition: 300ms;
  padding: 6px 1px;
  border: 3px solid
    ${(props) => (props.whiteSchema ? "var(--violet)" : "transparent")};
  display: flex;
  align-items: center;
  position: relative;
  z-index: 1;

  :hover {
    background-color: ${(props) =>
      props.whiteSchema ? "#88ffff" : "var(--button-hover)"};
    color: ${(props) => (props.whiteSchema ? "var(--violet)" : "#fff")};
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
