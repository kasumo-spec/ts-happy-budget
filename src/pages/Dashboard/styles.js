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
export const ContainerTwoCards = styled.div`
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
  padding: 0 15px;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.4), 0 6px 20px 0 rgba(0, 0, 0, 0.4);
  .tittle {
    text-align: center;
    font-weight: 700;
    color: var(--white);
    font-size: 28px;
    margin-top: 10px;
  }

  /*increase effect*/
  position: relative;
  transition: all 0.6s cubic-bezier(0.165, 0.84, 0.44, 1);
  &::after {
    content: "";
    position: absolute;
    z-index: -1;
    opacity: 0;
    border-radius: 5px;
    box-shadow: 0 8px 16px 0 rgba(0, 0, 0, 0.8),
      0 12px 40px 0 rgba(0, 0, 0, 0.8);
    transition: all 0.6s cubic-bezier(0.165, 0.84, 0.44, 1);
  }

  &:hover {
    transform: scale(1.04, 1.04);
  }

  &:hover::after {
    opacity: 1;
  }
  /*increase effect*/

  @media screen and (min-width: 400px) {
    .tittle {
      font-size: 32px;
    }
  }

  @media screen and (min-width: 1000px) {
    width: 48%;
  }

  @media screen and (min-width: 1024px) and (max-height: 759px) {
    h2 {
      font-size: 30px !important;
    }
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
      width: 160px;
      margin-top: 20px;
      font-size: 28px;
    }

    p + button {
      margin-top: 30px;
      padding: 8px 50px;
    }
  }

  @media screen and (min-width: 1100px) and (max-height: 725px) {
    h3 {
      font-size: 20px !important;
    }

    .status:first-child {
      margin-top: 0px !important;
    }

    p {
      width: 200px;
      font-size: 18px !important;
    }

    .wrapLottie {
      width: 150px !important;
      height: 150px !important;
    }
  }

  @media screen and (min-width: 1300px) {
    h3 {
      font-size: 30px;
    }

    .status:first-child {
      margin-top: 30px;
    }
    h3 + button {
      padding: 8px 20px;
    }

    p {
      width: 200px;
    }

    .wrapLottie {
      width: 250px !important;
      height: 240px;
    }
  }

  @media screen and (min-width: 1400px) {
    p {
      width: 250px;
    }
  }

  @media screen and (min-width: 1500px) {
    position: relative;
    bottom: 20px;
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
  padding: 0 15px;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.4), 0 6px 20px 0 rgba(0, 0, 0, 0.4);
  .tittle {
    text-align: center;
    font-weight: 700;
    color: var(--white);
    font-size: 28px;
    margin-top: 10px;
  }

  /*increase effect*/
  position: relative;
  transition: all 0.6s cubic-bezier(0.165, 0.84, 0.44, 1);
  &::after {
    content: "";
    position: absolute;
    z-index: -1;
    opacity: 0;
    border-radius: 5px;
    box-shadow: 0 8px 16px 0 rgba(0, 0, 0, 0.8),
      0 12px 40px 0 rgba(0, 0, 0, 0.8);
    transition: all 0.6s cubic-bezier(0.165, 0.84, 0.44, 1);
  }

  &:hover {
    transform: scale(1.04, 1.04);
  }

  &:hover::after {
    opacity: 1;
  }
  /*increase effect*/
  @media screen and (min-width: 1000px) {
    width: 48%;
  }

  @media screen and (min-width: 1024px) and (max-height: 759px) {
    h2 {
      font-size: 30px !important;
    }
  }
  @media screen and (min-width: 1200px) {
    .tittle {
      font-size: 42px;
    }
  }
`;

export const Budget = styled.div`
  width: 90%;
  height: 35vh;
  border-radius: 5px;
  background-color: var(--blue-green);
  padding: 0 15px;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.4), 0 6px 20px 0 rgba(0, 0, 0, 0.4);
  .tittle {
    text-align: center;
    font-weight: 700;
    color: var(--white);
    font-size: 28px;
    margin-top: 10px;
  }

  p {
    font-size: 20px;
  }

  /*increase effect*/
  position: relative;
  transition: all 0.6s cubic-bezier(0.165, 0.84, 0.44, 1);
  &::after {
    content: "";
    position: absolute;
    z-index: -1;
    opacity: 0;
    border-radius: 5px;
    box-shadow: 0 8px 16px 0 rgba(0, 0, 0, 0.8),
      0 12px 40px 0 rgba(0, 0, 0, 0.8);
    transition: all 0.6s cubic-bezier(0.165, 0.84, 0.44, 1);
  }

  &:hover {
    transform: scale(1.04, 1.04);
  }

  &:hover::after {
    opacity: 1;
  }
  /*increase effect*/

  @media screen and (min-width: 400px) {
    .tittle {
      font-size: 32px;
    }
  }

  @media screen and (min-width: 1000px) {
    width: 48%;
  }

  @media screen and (min-width: 1024px) and (max-height: 759px) {
    margin-top: 20px;
    h2 {
      font-size: 30px !important;
    }
  }

  @media screen and (min-width: 1200px) {
    .tittle {
      font-size: 42px;
    }

    p {
      font-size: 20px;
    }
  }

  @media screen and (min-width: 1400px) {
    p {
      font-size: 28px;
    }
  }
`;

export const Tips = styled.div`
  width: 90%;
  height: 35vh;
  border-radius: 5px;
  background-color: var(--blue-tips);
  margin: 20px 0;
  padding: 0 15px;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.4), 0 6px 20px 0 rgba(0, 0, 0, 0.4);
  .tittle {
    text-align: center;
    font-weight: 700;
    color: var(--white);
    font-size: 28px;
    margin-top: 10px;
  }

  p {
    font-size: 20px;
  }

  /*increase effect*/
  position: relative;
  transition: all 0.6s cubic-bezier(0.165, 0.84, 0.44, 1);
  &::after {
    content: "";
    position: absolute;
    z-index: -1;
    opacity: 0;
    border-radius: 5px;
    box-shadow: 0 8px 16px 0 rgba(0, 0, 0, 0.8),
      0 12px 40px 0 rgba(0, 0, 0, 0.8);
    transition: all 0.6s cubic-bezier(0.165, 0.84, 0.44, 1);
  }

  &:hover {
    transform: scale(1.04, 1.04);
  }

  &:hover::after {
    opacity: 1;
  }
  /*increase effect*/
  @media screen and (min-width: 1000px) {
    width: 48%;
  }

  @media screen and (min-width: 1024px) and (max-height: 759px) {
    margin-bottom: 0px;
    h2 {
      font-size: 30px !important;
    }
  }
  @media screen and (min-width: 1200px) {
    .tittle {
      font-size: 42px;
    }

    p {
      font-size: 20px;
    }
  }

  @media screen and (min-width: 1400px) {
    p {
      font-size: 28px;
    }

    .wrapLottie div {
      width: 270px !important;
    }
  }

  @media screen and (min-width: 1600px) {
    .wrapLottie div {
      position: relative;
      width: 400px !important;
      right: 50px;
      top: 10px;
    }
  }
`;
