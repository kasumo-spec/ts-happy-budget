import styled from "styled-components";

export const StylizedP = styled.p `

`

export const Budget = styled.div`
  width: 98%;
  height: 30px;
  margin: 10px 5px;
  border-radius: 5px;
  
  display: flex;
  justify-content: center;
  align-items: center;

  p {
    font-weight: 700;
    font-size: 11px;
  }

  @media screen and (min-width: 400px) {
    width: 170px;
    height: 40px;
  
    p {
      font-size: 16px;
    }
  }
`;