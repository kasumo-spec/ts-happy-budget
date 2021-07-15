import { Typography } from "antd";
import styled from "styled-components";

export const ChartDiv = styled.div`
  display: flex;
  height: 300px !important;
  .web {
    display: none;
    overflow: auto;
  }
  .mobile {
    display: block;
    overflow: auto;
  }
  @media screen and (min-width: 600px) {
    .web {
      display: block;
    }
    .mobile {
      display: none;
    }
  }
`;

export const ButtonsDiv = styled.div`
  display: flex;
`;

export const InfosDiv = styled(ButtonsDiv)`
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;

  img {
    height: 500px;
    width: 250px;
  }

  .textNoBudget {
    font-weight: 500;
  }

  @media screen and (min-width: 1400px) {
    img {
      margin-top: 200px;
      width: 40%;
    }

    .textNoBudget {
      font-size: 20px;
      font-weight: 500;
      margin-bottom: 10px;
    }
  }
`;

export const NoData = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  font-weight: 500;
  font-size: 18px;
  img {
    width: 75%;
    height: 80%;
  }
  @media screen and (min-width: 600px) {
    img {
      width: 55%;
    }
  }
  @media screen and (min-width: 1000px) {
    font-size: 22px;

    img {
      margin-top: 60px;
      max-width: 400px;
      max-height: 400px;
      width: 35%;
      height: 100%;
    }
  }
`;

export const SpanCustom = styled(Typography)`
  margin-bottom: 5px;
  text-align: center;
`;
