import styled from "styled-components";

import { GrTrash } from "react-icons/gr";

export const GrTrashsTyled = styled(GrTrash)`
  fill: var(--violet);
  width: 15%;
  height: 35px;
`;

export const CardContainer = styled.div`
  border-radius: 5px;
  margin: 0 12px 12px 12px;
  background-color: ${(props) =>
    props.category ? `var(--${props.category})` : "var(--violet)"};

  font-size: 12px;
  font-weight: 600;
  transition: 300ms;
  padding: 6px 1px;
  border: ${(props) => `2px solid var(--${props.category})`};
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: relative;
  z-index: 1;

  box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.77), 0 3px 10px 0 rgba(0, 0, 0, 0.1);

  img {
    margin: 0 10px;
    max-width: 30px;

    padding-bottom: 2px;
    flex: 1;
  }
  p {
    flex: 4;
    text-align: center;
  }
  span {
    flex: 2;
  }
  button {
    background-color: transparent;
    color: black;
    transition: all 0.3s;
    border-radius: 5px;
    display: flex;
    justify-content: center;
    align-items: center;
    svg {
      width: 20px;
      height: 20px;
    }
    :hover {
      color: var(--blue-green);
    }
  }

  p,
  span {
    color: var(--black);
  }

  &:hover {
    border: ${(props) => `2px solid var(--${props.category})`};
    background-color: white;
    p,
    span,
    button svg {
      color: ${(props) => `var(--${props.category})`};
      fill: ${(props) => `var(--${props.category})`};
    }
  }

  @media (min-width: 310px) {
    padding: 8px 20px;
  }

  @media (min-width: 500px) {
    font-size: 14px;
    .test {
      max-width: 40px !important;
      min-height: 40px !important;
    }
    button svg {
      width: 28px;
      height: 28px;
    }
  }

  @media (min-width: 800px) {
    font-size: 20px;
  }
`;
