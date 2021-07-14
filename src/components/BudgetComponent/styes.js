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

  font-weight: 500;
  font-size: 18px;
  img {
    width: 70%;
    height: 80%;
  }

  @media screen and (min-width: 1000px) {
    font-size: 22px;
    img {
      width: 50%;
      height: 100%;
    }
  }
`;

export const SpanCustom = styled(Typography)`
  margin-bottom: 5px;
  text-align: center;
`;
