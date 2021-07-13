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

import market from "../../assets/categorys/market.png";
import food from "../../assets/categorys/food.png";
import health from "../../assets/categorys/health.png";
import pet from "../../assets/categorys/pet.png";
import home from "../../assets/categorys/home.svg";
import hobby from "../../assets/categorys/hobby.png";
import transport from "../../assets/categorys/transport.png";
import study from "../../assets/categorys/study.png";
import others from "../../assets/categorys/otherIncome.png";

import { maskMoney } from "../../utils/maskMoney";
import { useUser } from "../../providers/users";
import { useBudget } from "../../providers/budget";
import { useDebits } from "../../providers/debts";

const NewExpenseModal = () => {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [select, setSelect] = useState("");
  const { userId } = useUser();
  const { idBudget } = useBudget();
  const { createDebit } = useDebits();

  const showModal = () => {
    setIsModalVisible(true);
    setValue("name", "");
    setValue("value", "");
    setSelect("");
  };
  const handleOk = () => {
    setIsModalVisible(false);
    setValue("name", "");
    setValue("value", "");
  };
  const handleCancel = () => {
    setIsModalVisible(false);
    setValue("name", "");
    setValue("value", "");
  };

  const handleSelectChange = (event) => {
    const value = event.target.value;
    setSelect(value);
  };

  const { setValue, handleSubmit, register } = useForm();

  const submitForm = (data) => {
    let valueFormated = parseFloat(
      data.value.replaceAll(".", "").replace(",", ".")
    );
    let formatedObject = {
      name: data.name,
      value: valueFormated,
      userId: userId,
      budgetId: idBudget,
      category: select,
    };
    createDebit(formatedObject);
    setIsModalVisible(false);
  };

  return (
    <>
      <Button onClick={showModal}>Adicionar</Button>

      <CustomModal
        visible={isModalVisible}
        onOk={handleOk}
        onCancel={handleCancel}
        width={700}
        title="Adicionar despesa"
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
              placeholder="Descrição da despesa"
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
                value="market"
                checked={select === "market"}
                color="var(--market)"
                required
              />
              <CardCategory color="var(--market)">
                <CardWrap>
                  <CustomText color="var(--market)">Mercado</CustomText>
                  <img src={market} alt="money" />
                </CardWrap>
              </CardCategory>
            </Item>

            <Item onChange={(event) => handleSelectChange(event)}>
              <RadioButton
                type="radio"
                name="radio"
                value="food"
                checked={select === "food"}
                color="var(--food)"
                required
              />
              <CardCategory color="var(--food)">
                <CardWrap>
                  <CustomText color="var(--food)">Comida</CustomText>
                  <img src={food} alt="food" />
                </CardWrap>
              </CardCategory>
            </Item>

            <Item onChange={(event) => handleSelectChange(event)}>
              <RadioButton
                type="radio"
                name="radio"
                value="health"
                checked={select === "health"}
                color="var(--health)"
                required
              />
              <CardCategory color="var(--health)">
                <CardWrap>
                  <CustomText color="var(--health)">Saúde</CustomText>
                  <img src={health} alt="health" />
                </CardWrap>
              </CardCategory>
            </Item>

            <Item onChange={(event) => handleSelectChange(event)}>
              <RadioButton
                type="radio"
                name="radio"
                value="pet"
                checked={select === "pet"}
                color="var(--pet)"
                required
              />
              <CardCategory color="var(--pet)">
                <CardWrap>
                  <CustomText color="var(--pet)">Outros</CustomText>
                  <img src={pet} alt="pet" />
                </CardWrap>
              </CardCategory>
            </Item>

            <Item onChange={(event) => handleSelectChange(event)}>
              <RadioButton
                type="radio"
                name="radio"
                value="home"
                checked={select === "home"}
                color="var(--home)"
                required
              />
              <CardCategory color="var(--home)">
                <CardWrap>
                  <CustomText color="var(--home)">Moradia</CustomText>
                  <img src={home} alt="home" />
                </CardWrap>
              </CardCategory>
            </Item>

            <Item onChange={(event) => handleSelectChange(event)}>
              <RadioButton
                type="radio"
                name="radio"
                value="hobby"
                checked={select === "hobby"}
                color="var(--hobby)"
                required
              />
              <CardCategory color="var(--hobby)">
                <CardWrap>
                  <CustomText color="var(--hobby)">Hobby</CustomText>
                  <img src={hobby} alt="hobby" />
                </CardWrap>
              </CardCategory>
            </Item>

            <Item onChange={(event) => handleSelectChange(event)}>
              <RadioButton
                type="radio"
                name="radio"
                value="transport"
                checked={select === "transport"}
                color="var(--transport)"
                required
              />
              <CardCategory color="var(--transport)">
                <CardWrap>
                  <CustomText color="var(--transport)">Transporte</CustomText>
                  <img src={transport} alt="transport" />
                </CardWrap>
              </CardCategory>
            </Item>

            <Item onChange={(event) => handleSelectChange(event)}>
              <RadioButton
                type="radio"
                name="radio"
                value="study"
                checked={select === "study"}
                color="var(--study)"
                required
              />
              <CardCategory color="var(--study)">
                <CardWrap>
                  <CustomText color="var(--study)">Educação</CustomText>
                  <img src={study} alt="study" />
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
                  <img src={others} alt="others" />
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

export default NewExpenseModal;
