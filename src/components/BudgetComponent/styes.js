import styled from "styled-components";

export const ChartDiv = styled.div `
    display: flex;
    height: 300px !important;
    .web {
      display: none;
    }
    .mobile {
      display: block;
    }
  @media screen and (min-width: 600px){
    .web {
      display: block;
    }
    .mobile {
      display: none;
    }
  }
`

export const ButtonsDiv = styled.div `
    display: flex;
`

export const InfosDiv = styled(ButtonsDiv) `
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 100%;
`

