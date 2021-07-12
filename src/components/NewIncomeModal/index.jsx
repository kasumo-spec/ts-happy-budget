import React, { useState } from "react";
import { useForm } from "react-hook-form";

import "antd/dist/antd.css";
import { FaTimes } from "react-icons/fa";

import Button from "../Button";

import {
  CustomModal,
  ButtonWrap,
  CardCategory,
  CardContainer,
  CustomText,
  InputModal,
  Item,
  RadioButton,
  CardWrap,
} from "./styles";

import money from "../../assets/categorys/money.png";
import gift from "../../assets/categorys/gift.png";
import others from "../../assets/categorys/otherIncome.png";
import investment from "../../assets/categorys/investment.png";

import { maskMoney } from "../../utils/maskMoney";

const NewIncomeModal = () => {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [select, setSelect] = useState("");

  const showModal = () => {
    setIsModalVisible(true);
    setValue("name", "");
    setValue("description", "");
    setSelect("");
  };
  const handleOk = () => {
    setIsModalVisible(false);
    setValue("name", "");
    setValue("description", "");
  };
  const handleCancel = () => {
    setIsModalVisible(false);
    setValue("name", "");
    setValue("description", "");
  };

  const handleSelectChange = (event) => {
    const value = event.target.value;
    setSelect(value);
  };

  const { setValue, handleSubmit, register } = useForm();

  const submitForm = (data) => {
    const formatedValue = parseInt(
      data.value.replace(",", "").replaceAll(".", "")
    );
  };

  return (
    <>
      <Button onClick={showModal}>Adicionar</Button>

      <CustomModal
        visible={isModalVisible}
        onOk={handleOk}
        onCancel={handleCancel}
        width={700}
        title="Adicionar Receita"
        okText="Criar"
        cancelText="Cancelar"
        closeIcon={<FaTimes />}
        footer={null}
        bodyStyle={{ minHeight: 450 }}
      >
        <form onSubmit={handleSubmit(submitForm)}>
          <InputModal>
            <input
              type="text"
              placeholder="Descrição da receita"
              required
              {...register("name")}
            />
          </InputModal>
          <InputModal>
            <span>R$</span>
            <input
              {...register("value")}
              className="input"
              type="text"
              onChange={(e) => maskMoney(e.target, e)}
              placeholder="Valor"
              required
            />
          </InputModal>
          <p>Em qual categoria sua receita se encaixa?</p>
          <CardContainer>
            <Item onChange={(event) => handleSelectChange(event)}>
              <RadioButton
                type="radio"
                name="radio"
                value="salary"
                checked={select === "salary"}
                color="var(--salary)"
                required
              />
              <CardCategory color="var(--salary)">
                <CardWrap>
                  <CustomText color="var(--salary)">Salário</CustomText>
                  <img src={money} alt="money"></img>
                </CardWrap>
              </CardCategory>
            </Item>

            <Item onChange={(event) => handleSelectChange(event)}>
              <RadioButton
                type="radio"
                name="radio"
                value="gift"
                checked={select === "gift"}
                color="var(--gift)"
                required
              />
              <CardCategory color="var(--gift)">
                <CardWrap>
                  <CustomText color="var(--gift)">Presente</CustomText>
                  <img src={gift} alt="gift"></img>
                </CardWrap>
              </CardCategory>
            </Item>

            <Item onChange={(event) => handleSelectChange(event)}>
              <RadioButton
                type="radio"
                name="radio"
                value="investment"
                checked={select === "investment"}
                color="var(--investment)"
                required
              />
              <CardCategory color="var(--investment)">
                <CardWrap>
                  <CustomText color="var(--investment)">
                    Investimento
                  </CustomText>
                  <img src={investment} alt="gift"></img>
                </CardWrap>
              </CardCategory>
            </Item>

            <Item onChange={(event) => handleSelectChange(event)}>
              <RadioButton
                type="radio"
                name="radio"
                value="others"
                checked={select === "others"}
                color="var(--others)"
                required
              />
              <CardCategory color="var(--others)">
                <CardWrap>
                  <CustomText color="var(--others)">Outros</CustomText>
                  <img src={others} alt="others"></img>
                </CardWrap>
              </CardCategory>
            </Item>
          </CardContainer>

          <ButtonWrap>
            <Button type="submit">Criar</Button>
          </ButtonWrap>
        </form>
      </CustomModal>
    </>
  );
};

export default NewIncomeModal;
