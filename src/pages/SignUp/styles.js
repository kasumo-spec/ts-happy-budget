import styled from "styled-components";
import Button from "../../components/Button";
import { TextField } from "@material-ui/core";
export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 83vh;

  @media screen and (min-width: 1400px) {
    height: 88vh;
  }
`;

export const ContainerSignup = styled.div`
  h1 {
    font-size: 3em;
    font-weight: 700;
    text-align: center;
    letter-spacing: 3px;
  }

  form {
    width: 55%;
    max-width: 350px;
    margin: auto;
    text-align: center;
  }

  form div {
    width: 100%;
  }

  p {
    margin: 0;
    text-align: start;
  }

  .redirectMessage {
    margin: 0px 0px 15px 0;
    font-size: 14px;
  }

  @media (min-width: 460px) {
    h1 {
      padding-top: 25px;
      font-size: 2.5em;
    }
  }
`;

export const ButtonForm = styled(Button)`
  @media (max-width: 1000px) {
    width: 100px;
    padding: 8px;
    font-size: 1em;
  }
`;

export const ImageContainer = styled.div`
  div {
    height: 100% !important;
    max-height: 360px;
    width: 100% !important;
  }

  @media screen and (min-width: 700px) {
    div {
      height: 90% !important;
      max-height: 360px;
      max-width: 1250px;
      width: 59% !important;
    }
  }

  @media screen and (min-height: 600px) and (max-height: 800px) and (min-width: 1000px) {
    div {
      width: 34% !important;
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
