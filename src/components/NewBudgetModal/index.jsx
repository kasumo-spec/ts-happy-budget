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
  InputCategory,
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
import { useBudget } from "../../providers/budget";

const NewExpenseModal = () => {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const { createBudget } = useBudget();

  const showModal = () => {
    setIsModalVisible(true);
  };
  const handleOk = () => {
    setIsModalVisible(false);
  };
  const handleCancel = () => {
    setIsModalVisible(false);
  };

  const { handleSubmit, register } = useForm();

  const submitForm = (data) => {
    let formatedObject = {};
    let predictionFormated = parseFloat(
      data.prediction.replaceAll(".", "").replace(",", ".")
    );
    for (let [key, value] of Object.entries(data)) {
      if (key !== "prediction") {
        formatedObject[key] = parseFloat(
          value.replaceAll(".", "").replace(",", ".")
        );
      }
    }
    createBudget(formatedObject, predictionFormated);
    setIsModalVisible(false);
  };

  return (
    <>
      <Button onClick={showModal}>Criar</Button>

      <CustomModal
        visible={isModalVisible}
        onOk={handleOk}
        onCancel={handleCancel}
        width={600}
        title="Criar orçamento"
        okText="Criar"
        cancelText="Cancelar"
        closeIcon={<FaTimes />}
        footer={null}
        bodyStyle={{ minHeight: 450 }}
      >
        <form onSubmit={handleSubmit(submitForm)}>
          <InputModal>
            <span>R$</span>
            <input
              {...register("prediction")}
              className="input"
              type="text"
              onChange={(e) => maskMoney(e.target, e)}
              placeholder="Qual sua renda média mensal ?"
              required
            />
          </InputModal>

          <p>O quanto você planeja gastar com:</p>
          <CardContainer>
            <Item>
              <InputCategory>
                <span>R$</span>

                <input
                  {...register("market")}
                  className="input"
                  type="text"
                  onChange={(e) => maskMoney(e.target, e)}
                  placeholder="Mercado?"
                  required
                />
              </InputCategory>

              <CardCategory color="var(--market)">
                <CardWrap>
                  <CustomText>Mercado</CustomText>
                  <img src={market} alt="money" />
                </CardWrap>
              </CardCategory>
            </Item>

            <Item>
              <InputCategory>
                <span>R$</span>

                <input
                  {...register("food")}
                  className="input"
                  type="text"
                  onChange={(e) => maskMoney(e.target, e)}
                  placeholder="Comida?"
                  required
                />
              </InputCategory>
              <CardCategory color="var(--food)">
                <CardWrap>
                  <CustomText color="var(--food)">Comida</CustomText>
                  <img src={food} alt="food" />
                </CardWrap>
              </CardCategory>
            </Item>

            <Item>
              <InputCategory>
                <span>R$</span>

                <input
                  {...register("health")}
                  className="input"
                  type="text"
                  onChange={(e) => maskMoney(e.target, e)}
                  placeholder="Saúde?"
                  required
                />
              </InputCategory>
              <CardCategory color="var(--health)">
                <CardWrap>
                  <CustomText color="var(--health)">Saúde</CustomText>
                  <img src={health} alt="health" />
                </CardWrap>
              </CardCategory>
            </Item>

            <Item>
              <InputCategory>
                <span>R$</span>

                <input
                  {...register("pet")}
                  className="input"
                  type="text"
                  onChange={(e) => maskMoney(e.target, e)}
                  placeholder="Pet?"
                  required
                />
              </InputCategory>
              <CardCategory color="var(--pet)">
                <CardWrap>
                  <CustomText color="var(--pet)">Pet</CustomText>
                  <img src={pet} alt="pet" />
                </CardWrap>
              </CardCategory>
            </Item>

            <Item>
              <InputCategory>
                <span>R$</span>

                <input
                  {...register("home")}
                  className="input"
                  type="text"
                  onChange={(e) => maskMoney(e.target, e)}
                  placeholder="Moradia?"
                  required
                />
              </InputCategory>
              <CardCategory color="var(--home)">
                <CardWrap>
                  <CustomText color="var(--home)">Moradia</CustomText>
                  <img src={home} alt="home" />
                </CardWrap>
              </CardCategory>
            </Item>

            <Item>
              <InputCategory>
                <span>R$</span>

                <input
                  {...register("hobby")}
                  className="input"
                  type="text"
                  onChange={(e) => maskMoney(e.target, e)}
                  placeholder="Hobby?"
                  required
                />
              </InputCategory>
              <CardCategory color="var(--hobby)">
                <CardWrap>
                  <CustomText color="var(--hobby)">Hobby</CustomText>
                  <img src={hobby} alt="hobby" />
                </CardWrap>
              </CardCategory>
            </Item>

            <Item>
              <InputCategory>
                <span>R$</span>

                <input
                  {...register("transport")}
                  className="input"
                  type="text"
                  onChange={(e) => maskMoney(e.target, e)}
                  placeholder="Transporte?"
                  required
                />
              </InputCategory>
              <CardCategory color="var(--transport)">
                <CardWrap>
                  <CustomText color="var(--transport)">Transporte</CustomText>
                  <img src={transport} alt="transport" />
                </CardWrap>
              </CardCategory>
            </Item>

            <Item>
              <InputCategory>
                <span>R$</span>

                <input
                  {...register("study")}
                  className="input"
                  type="text"
                  onChange={(e) => maskMoney(e.target, e)}
                  placeholder="Educação?"
                  required
                />
              </InputCategory>
              <CardCategory color="var(--study)">
                <CardWrap>
                  <CustomText color="var(--study)">Educação</CustomText>
                  <img src={study} alt="study" />
                </CardWrap>
              </CardCategory>
            </Item>

            <Item>
              <InputCategory>
                <span>R$</span>

                <input
                  {...register("others")}
                  className="input"
                  type="text"
                  onChange={(e) => maskMoney(e.target, e)}
                  placeholder="Outros?"
                  required
                />
              </InputCategory>
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
