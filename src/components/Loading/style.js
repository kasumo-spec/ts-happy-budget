import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 60vh;
  margin-left: 200px;
  p {
    display: block;
    margin-left: 50px;
    font-size: 30px;
    font-weight: 500;
  }
`;

export const Wrap = styled.div`
  div {
    width: 400px !important;
    height: 400px !important;
  }
`;
