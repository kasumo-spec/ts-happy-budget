import styled from "styled-components";

export const ChartDiv = styled.div `
    display: flex;
    height: 300px !important;
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