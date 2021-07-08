import styled from "styled-components";

export const HeaderContainer = styled.header`
  width: 100%;
  background-color: white;
  padding: 18px 8px;
  display: ${(props) =>
    props.location === "/" ||
    props.location === "/login" ||
    props.location === "/signup"
      ? "flex"
      : "none"};
  align-items: center;
  justify-content: space-between;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 3;

  img {
    width: 150px;
  }

  @media (min-width: 500px) {
    img {
      width: 250px;
    }
  }

  @media screen and (min-width: 720px) {
    width: 100%;

    padding: 10px 25px 5px 5px;
    margin: 0;
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    display: flex;

    img {
      width: 300px;
      height: 77px;
      margin-left: 20px;
    }
  }
`;

export const ButtonsWrapper = styled.div`
  display: flex;

  button {
    margin-left: 8px;
  }
`;
