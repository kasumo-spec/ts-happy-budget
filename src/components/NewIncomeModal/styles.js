import styled from "styled-components";
import { Modal } from "antd";
import { TiPlus } from "react-icons/ti";
export const CustomModal = styled(Modal)`
  h3 {
    font-weight: bold;
    position: relative;
    bottom: 18px;
  }

  p {
    font-size: 12px;
    margin-top: 5px;
  }

  .ant-modal-header {
    background-color: var(--white);
    border-radius: 5px;
    text-align: center;
  }

  .ant-modal-content {
    background-color: var(--white);
    border-radius: 5px;
  }

  .ant-modal-title {
    font-size: 24px;
    font-weight: bold;
  }

  .ant-modal-body {
    background-color: var(--white-green);
    border-radius: 15px;
    padding: 40px;
  }

  .ant-modal-footer {
    border-radius: 15px;
  }

  .wrap {
    width: 100%;
    display: flex;
    justify-content: center;
  }

  @media screen and (min-width: 460px) {
    .ant-modal-title {
      font-size: 30px;
    }
  }

  @media screen and (min-width: 600px) {
    p {
      font-size: 20px;
    }
  }
`;

export const InputModal = styled.div`
  input {
    border-radius: 5px;
    border: 2px solid var(--violet);

    color: var(--black);
    font-weight: 500;
    font-size: 16px;
    width: 100%;
    height: 20px;
    padding: 20px 12px;

    @media (min-width: 540px) {
      font-size: 20px;

      padding: 25px 12px;
    }
  }

  span {
    position: absolute;
    top: 148.5px;
    display: flex;

    color: var(--black);
    font-weight: 500;
    font-size: 16px;
    width: 20px;
    height: 20px;
    padding: 20px 12px;

    @media (min-width: 540px) {
      font-size: 20px;
      top: 156px;
      padding: 25px 12px;
    }
  }

  @media screen and (min-width: 720px) {
    span {
      bottom: 349.6px;
    }
  }

  .input {
    margin-top: 20px;
    padding-left: 30px;
  }

  @media screen and (min-width: 540px) {
    .input {
      padding-left: 38px;
    }
  }
`;

export const CardContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  div {
    width: 49%;

    transition: all 200ms;
  }

  @media screen and (min-width: 600px) {
    div {
      width: 30%;
    }
  }
`;

export const Item = styled.div`
  display: flex;
  flex-wrap: wrap;
  height: 48px;
  position: relative;
  margin-top: 10px;
  width: 50%;
`;

export const CardCategory = styled.label`
  background: var(--white);
  border: 3px solid ${(props) => props.color};
  justify-content: center;

  width: 100%;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  z-index: 0;

  margin: 4px;
  border-radius: 5px;
  padding: 8px 0;
  transition: all 300ms;

  p {
    font-size: 10px;
    font-weight: 600;
    margin: 0;
  }

  @media (min-width: 430px) {
    height: 40px;
    p {
      font-size: 14px;
    }
  }

  @media (min-width: 460px) {
    width: 100%;
    max-width: 198px;

    margin: 0;

    @media (min-width: 600px) {
      padding: 22px 0;
      p {
        font-size: 18px;
      }
    }
  }
`;

export const CardWrap = styled.div`
  min-width: 100px;
  display: flex;
  align-items: center;
  justify-content: space-around;

  img {
    width: 20px;
  }

  @media screen and (min-width: 600px) {
    min-width: 180px;

    img {
      width: 40px;
    }
  }
`;

export const CustomText = styled.p`
  color: ${(props) => props.color};
  z-index: 20;
  margin: 0;
  font-size: 18px;
  text-align: center;
  font-weight: 500;
  transition: all 300ms;
`;

export const RadioButton = styled.input`
  position: relative;
  opacity: 0;
  z-index: 205;
  cursor: pointer;
  transition: all 300ms;

  width: 100%;
  height: 48px;

  &:hover ~ ${CardCategory} {
    filter: brightness(0.92);
  }

  &:checked + ${CardCategory} {
    background: ${(props) => props.color};

    p {
      color: var(--white);
    }
  }

  @media (min-width: 460px) {
    width: 100%;
    max-width: 198px;
  }
`;
export const ButtonWrap = styled.div`
  display: flex;
  width: 100%;
  justify-content: flex-end;

  button {
    margin-top: 40px;
    font-size: 20px;

    padding: 4px 30px;
  }
`;

export const SecondaryButton = styled(TiPlus)`
  color: var(--violet);
  width: 35px;
  height: 35px;
  padding: 7px;
  fill: white;
  background-color: var(--health);
  border-radius: 50%;
  cursor: pointer;

  &:hover {
    filter: brightness(0.85);
  }
`;
