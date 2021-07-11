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

const NewExpenseModal = () => {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [select, setSelect] = useState("");

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

  const { setValue, handleSubmit, register } = useForm();

  const submitForm = (data) => {
    const formatedValue = parseInt(
      data.value.replace(",", "").replaceAll(".", "")
    );
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
              {...register("value")}
              className="input"
              type="text"
              onChange={(e) => maskMoney(e.target, e)}
              placeholder="Quanto você planeja gastar no mês ?"
              required
            />
          </InputModal>

          <p>O quanto você planeja gastar com:</p>
          <CardContainer>
            <Item>
              <InputCategory>
                <span>R$</span>

                <input
                  {...register("value")}
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
                  <img src={market} alt="money"></img>
                </CardWrap>
              </CardCategory>
            </Item>

            <Item>
              <InputCategory>
                <span>R$</span>

                <input
                  {...register("value")}
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
                  <img src={food} alt="food"></img>
                </CardWrap>
              </CardCategory>
            </Item>

            <Item>
              <InputCategory>
                <span>R$</span>

                <input
                  {...register("value")}
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
                  <img src={health} alt="health"></img>
                </CardWrap>
              </CardCategory>
            </Item>

            <Item>
              <InputCategory>
                <span>R$</span>

                <input
                  {...register("value")}
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
                  <img src={pet} alt="pet"></img>
                </CardWrap>
              </CardCategory>
            </Item>

            <Item>
              <InputCategory>
                <span>R$</span>

                <input
                  {...register("value")}
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
                  <img src={home} alt="home"></img>
                </CardWrap>
              </CardCategory>
            </Item>

            <Item>
              <InputCategory>
                <span>R$</span>

                <input
                  {...register("value")}
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
                  <img src={hobby} alt="hobby"></img>
                </CardWrap>
              </CardCategory>
            </Item>

            <Item>
              <InputCategory>
                <span>R$</span>

                <input
                  {...register("value")}
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
                  <img src={transport} alt="transport"></img>
                </CardWrap>
              </CardCategory>
            </Item>

            <Item>
              <InputCategory>
                <span>R$</span>

                <input
                  {...register("value")}
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
                  <img src={study} alt="study"></img>
                </CardWrap>
              </CardCategory>
            </Item>

            <Item>
              <InputCategory>
                <span>R$</span>

                <input
                  {...register("value")}
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

export default NewExpenseModal;
