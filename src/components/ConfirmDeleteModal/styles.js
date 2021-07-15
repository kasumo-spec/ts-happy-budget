import styled from "styled-components";

export const ButtonDeleteModal = styled.button`
  background: white;
  position: relative;
  right: 20px;

  @media screen and (min-width: 750px) {
    svg {
      width: 22px;
      height: 22px;
    }
  }
`;

export const TextWrap = styled.div`
  p {
    font-weight: 500;
    font-size: 20px;
    margin-bottom: 20px;
  }
`;

export const ButtonWrap = styled.div`
  display: flex;
  justify-content: flex-end;

  button {
    padding: 3px 10px;
  }

  button + button {
    margin-left: 10px;
  }
`;
