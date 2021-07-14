import styled from "styled-components";

export const ExpenseContainer = styled.div`
  width: 100%;
  height: 100%;
  font-weight: bold;
  text-align: center;
  header {
    padding: 0 15px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 50px;

    div.buttonContent {
    }

    /* > button {
      height: 30px;
      width: 30px;
      font-size: 30px;
      padding: 0;
      font-weight: bold;
      border-radius: 50%;
      background-color: #eb6f68;
      border: 1px solide red;
    } */
  }
`;

export const ButtonSetComponent = styled.button`
  color: ${(props) => (props.active ? "#eb6f68" : "black")};
  padding-top: 2px;
  margin-left: 5px;
  font-size: 20px;
  background-color: transparent;
  transition: all 0.3s;
  :hover {
    color: var(--green);
  }
`;

export const ExpenseContent = styled.div`
  height: calc(100% - 50px);
  display: flex;
  flex-direction: column;
  div.statement {
    display: flex;
    flex-direction: column;
    align-items: stretch;
    overflow: auto;
    margin-bottom: 20px;
    h2 {
      font-size: 20px;
      font-weight: bold;
      padding: 20px 0 10px;
    }
  }
  @media (min-width: 1100px) {
    flex-direction: row;
    width: 95%;
    margin: auto;
    div.statement {
      flex: 1;
    }
  }
`;

export const CategoryFilters = styled.div`
  position: relative;
  h4 {
    margin-left: 20px;
  }
  div {
    margin: 10px 0;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    button {
      border-radius: 50%;
      margin: 0 5px;
      padding: 5px;
      img {
        margin: 2px;
        width: 25px;
      }
    }
  }

  @media (min-width: 1100px) {
    width: 200px;
    margin-right: 20px;
  }
`;
