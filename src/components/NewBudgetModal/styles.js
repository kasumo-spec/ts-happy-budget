import styled from "styled-components";
import { Modal } from "antd";

export const CustomModal = styled(Modal)`
  h3 {
    font-weight: bold;
    position: relative;
    bottom: 18px;
  }

  p {
    font-size: 12px;
    margin: 5px 0;
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
    padding: 0px 40px 20px 40px;
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
    font-size: 10px;
    width: 100%;
    height: 20px;
    padding: 16px 0px;
  }

  span {
    position: absolute;
    top: 46px;
    display: flex;

    color: var(--black);
    font-weight: 500;
    font-size: 10px;
    width: 20px;
    height: 20px;
    padding: 20px 12px;
  }

  .input {
    padding-left: 23px;
  }

  @media (min-width: 340px) {
    input {
      font-size: 15px;
    }
    span {
      font-size: 15px;
      top: 43px;
    }

    .input {
      padding-left: 28px;
    }
  }

  @media screen and (min-width: 600px) {
    input {
      height: 44px;
      font-size: 20px;
    }

    span {
      font-size: 20px;
      padding: 18px 12px;
      top: 44px;
    }
    .input {
      padding-left: 35px;
    }
  }
`;

export const CardContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  width: 100%;
`;

export const Item = styled.div`
  display: flex;
  justify-content: space-between;
  height: 40px;

  width: 100%;

  @media screen and (min-width: 600px) {
    height: 50px;
  }
`;

export const CardCategory = styled.div`
  background: ${(props) => props.color};
  justify-content: center;
  display: flex;
  align-items: center;

  height: 30px;
  width: 80%;
  border-radius: 5px;

  p {
    font-size: 10px;
    font-weight: 600;
    margin: 0;
  }

  @media (min-width: 600px) {
    padding: 22px 0;
    p {
      font-size: 18px;
    }
  }
`;

export const CardWrap = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-around;

  img {
    width: 20px;
    margin-left: 5px;
  }

  @media screen and (min-width: 600px) {
    min-width: 180px;

    img {
      width: 40px;
    }
  }
`;

export const CustomText = styled.p`
  color: var(--white);
  margin: 0;
  font-size: 18px;
  text-align: center;
  font-weight: 500;
`;

export const InputCategory = styled.div`
  display: flex;
  width: 100%;
  input {
    border-radius: 5px;
    border: 2px solid var(--violet);
    position: absolute;
    z-index: 1;
    color: var(--black);
    font-weight: 500;
    font-size: 10px;
    width: 37%;
    height: 30px;
    padding: 10px 12px;
  }
  @media (min-width: 340px) {
    font-size: 16px;
  }

  span {
    position: relative;
    display: inline-block;
    z-index: 2;
    display: flex;

    color: var(--black);
    font-weight: 500;
    font-size: 10px;
    max-width: 0px;
    height: 20px;
    padding: 20px 12px;

    bottom: 12px;
  }

  .input {
    padding-left: 25px;
  }
  @media (min-width: 340px) {
    span {
      font-size: 16px;
      padding: 15px 12px;
    }

    input {
      font-size: 16px;
    }

    .input {
      padding-left: 30px;
    }
  }

  @media screen and (min-width: 600px) {
    input {
      height: 42px;
      font-size: 20px;
    }

    span {
      font-size: 20px;
      padding: 18px 12px;
    }
    .input {
      padding-left: 35px;
    }
  }
`;
export const ButtonWrap = styled.div`
  display: flex;
  width: 100%;
  justify-content: flex-end;

  button {
    margin-top: 20px;
    font-size: 14px;

    padding: 4px 30px;
  }
`;
