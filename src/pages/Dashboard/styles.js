import styled from "styled-components";

export const ContainerDashBoard = styled.div`
  padding-top: 140px 32px 12px 12px;
  display: flex;
  flex-direction: column;
  justify-content: center;

  @media screen and (min-width: 720px) {
    padding-left: 330px;
    padding-right: 60px;
  }
`;
export const ContainerIncomeExpense = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  margin-top: 100px;

  @media screen and (min-width: 1000px) {
    flex-direction: row;
    margin-top: 20px;
    justify-content: space-between;
  }
`;
export const Income = styled.div`
  width: 90%;
  height: 35vh;
  border-radius: 5px;
  background-color: var(--green);
  box-shadow: 6px 6px 6px rgba(0, 0, 0, 0.25);
  .tittle {
    text-align: center;
    font-weight: 700;
    color: var(--white);
    font-size: 28px;
    margin-top: 10px;
  }

  @media screen and (min-width: 400px) {
    .tittle {
      font-size: 32px;
    }
  }

  @media screen and (min-width: 1000px) {
    width: 48%;
  }

  @media screen and (min-width: 1200px) {
    .tittle {
      font-size: 42px;
    }
  }
`;

export const ImageContainer = styled.div`
  display: flex;
  justify-content: space-between;
  flex: 2;
  h3 {
    text-align: center;
    font-weight: 700;
    color: var(--white);
    font-size: 20px;
    margin-left: 20px;
  }

  .status {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 90%;
  }

  h3 + button {
    margin-top: 20px;
    margin-left: 15px;
    padding: 6px 10px;
    text-align: center;
  }

  transition: all 300ms;
  .wrapLottie {
    opacity: 0.8;
    position: relative !important;
    width: 100px !important;
    height: 140px;
  }

  p {
    width: 150px;
    text-align: center;

    color: var(--white);
    font-size: 16px;
    font-weight: 500;
  }

  p + button {
    margin-top: 20px;
    padding: 6px 24px;
    text-align: center;
  }

  @media screen and (min-width: 400px) {
    justify-content: space-around;

    h3 {
      font-size: 24px;
    }

    .status {
      margin-top: 15px;
      justify-content: flex-start;
    }

    h3 + button {
      margin-top: 20px;
      margin-left: 15px;
      padding: 8px 16px;
      text-align: center;
    }

    .wrapLottie {
      width: 200px !important;
      height: 180px;
    }
  }

  @media screen and (min-width: 1100px) {
    p {
      width: 220px;

      font-size: 32px;
    }

    p + button {
      margin-top: 30px;
      padding: 8px 50px;
    }
  }

  @media screen and (min-width: 1300px) {
    h3 {
      font-size: 30px;
    }

    h3 + button {
      padding: 8px 20px;
    }

    .status {
      width: 60%;
    }
    .wrapLottie {
      width: 250px !important;
      height: 240px;
    }
  }

  @media screen and (min-width: 1500px) {
    h3 {
      font-size: 35px;
    }

    h3 + button {
      padding: 12px 35px;
    }

    .wrapLottie {
      width: 400px !important;
      height: 300px;
    }

    .expense {
      width: 300px !important;
      height: 300px !important;
    }
  }
`;

export const Expense = styled.div`
  width: 90%;
  height: 35vh;
  border-radius: 5px;
  background-color: var(--orange);
  margin: 20px 0;
  box-shadow: 6px 6px 6px rgba(0, 0, 0, 0.25);
  .tittle {
    text-align: center;
    font-weight: 700;
    color: var(--white);
    font-size: 28px;
    margin-top: 10px;
  }

  @media screen and (min-width: 1000px) {
    width: 48%;
  }

  @media screen and (min-width: 1200px) {
    .tittle {
      font-size: 42px;
    }
  }
`;

export const ContainerBudget = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 20px;
`;

export const Budget = styled.div`
  width: 90%;
  height: 35vh;
  border-radius: 5px;
  background-color: var(--blue-green);
  box-shadow: 6px 6px 6px rgba(0, 0, 0, 0.25);
  .tittle {
    text-align: center;
    font-weight: 700;
    color: var(--white);
    font-size: 28px;
    margin-top: 10px;
  }

  @media screen and (min-width: 1000px) {
    width: 100%;
    margin-top: 3%;
  }

  @media screen and (min-width: 1200px) {
    .tittle {
      font-size: 42px;
    }
  }
`;
