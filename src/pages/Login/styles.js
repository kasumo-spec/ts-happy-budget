import { TextField } from "@material-ui/core";
import Button from "../../components/Button";
import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 83vh;

  @media screen and (min-width: 1400px) {
    height: 88vh;
  }

  @media screen and (min-height: 600px) and (max-height: 800px) and (min-width: 1000px) {
    height: 82vh;
  }
`;

export const ContainerForm = styled.div`
  height: calc(60vh - 95px);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  h1 {
    font-size: 3em;
    font-weight: 700;
    text-align: center;
    letter-spacing: 3px;
    margin-bottom: 20px;
  }

  form {
    width: 55%;
    max-width: 350px;

    text-align: center;
    max-height: 300px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }

  form div {
    width: 100%;
  }

  p {
    margin: 0px;
    text-align: start;
  }

  .redirectMessage {
    margin: 0px 0px 15px 0;
    font-size: 14px;
  }

  @media (min-width: 460px) {
    h1 {
      padding-top: 25px;
    }
  }
`;

export const FormInput = styled(TextField)`
  input {
    border: 2px solid #341e48;
    border-radius: 5px;
    padding: 8.5px 5px;
  }
`;

export const ButtonForm = styled(Button)`
  padding: 8px 16px;
  font-size: 1em;
  text-align: center;
  box-shadow: 4px 4px 4px rgba(0, 0, 0, 0.25);
`;

export const ImageContainer = styled.div`
  div {
    height: 100% !important;
    max-height: 360px;
    width: 100% !important;
    overflow: hidden !important;
  }

  @media screen and (min-width: 700px) {
    div {
      height: 100% !important;
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

export const ContainerSVG = styled.div`
  position: fixed;
  inset: 0;
  width: 100vw;
  height: 100vh;

  svg {
    transition: all 300ms;
  }

  .top {
    display: none;
  }

  .bottom {
    display: none;
  }

  @media screen and (min-width: 700px) {
    svg {
      width: 75vmin;
    }

    .top {
      display: block;
      position: absolute;
      left: -284px;
    }

    .bottom {
      display: block;
      position: absolute;
      right: -285px;
      bottom: 0px;
    }
  }

  @media screen and (min-width: 1400px) {
    svg {
      width: 100vmin;
    }

    .bottom {
      position: absolute;
      right: -285px;
      bottom: 0px;
    }
  }
`;
