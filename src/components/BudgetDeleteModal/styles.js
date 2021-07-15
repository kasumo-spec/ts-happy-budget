import styled from "styled-components";
import { ButtonType } from "../Button/styles";

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
