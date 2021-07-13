import styled from "styled-components";

export const MainContainer = styled.div`
  div {
    height: 100% !important;
    max-height: 360px;
    width: 100% !important;
    overflow: hidden !important;
  }

  @media screen and (min-width: 700px) {
    div {
      height: 59% !important;
      max-height: 360px;
      max-width: 1250px;
      width: 59% !important;
    }
  }

  @media screen and (min-height: 600px) and (max-height: 800px) and (min-width: 1000px) {
    div {
      width: 40% !important;
    }
  }
`;
