import React, { useEffect, useRef, useState } from "react";

import { RiDashboardLine } from "react-icons/ri";
import { BsFileSpreadsheet } from "react-icons/bs";
import { GiPayMoney, GiReceiveMoney } from "react-icons/gi";
import { FaPiggyBank } from "react-icons/fa";

import { NavLink, useHistory, useLocation } from "react-router-dom";

import {
  AsideContainer,
  ButtonLogoffWrapper,
  MenuWrapper,
  Profile,
} from "./styles";

import { useUser } from "../../providers/users";

import Button from "../Button";
import { useDebits } from "../../providers/debts";
import { useIncome } from "../../providers/income";
import Balance from "../Balance";

const Aside = () => {
  const history = useHistory();
  const { userName, setToken, setUserId, setUserName } = useUser();
  const { pathname } = useLocation();
  const [topIndicator, setTopIndicator] = useState(0);
  const [leftIndicator, setLeftIndicator] = useState(0);

  const [income, setIncome] = useState(0);
  const [expense, setExpense] = useState(0);

  const { totalDebits } = useDebits();
  const { totalIncomes } = useIncome();

  const indicator = useRef(0);
  const navLinks = useRef([]);

  const getDimensions = () => {
    navLinks.current.forEach((item) => {
      if (item?.className === "navlink--active") {
        const top = item.offsetTop;
        const left = item.offsetLeft;
        setLeftIndicator(`${left}px`);
        setTopIndicator(`${top}px`);
      }
    });
  };

  useEffect(() => {
    getDimensions();

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [pathname]);

  window.onresize = () => {
    getDimensions();
  };

  const logOff = () => {
    localStorage.clear();
    setToken("");
    setUserId(0);
    setUserName("");
    history.push("/");
  };

  useEffect(() => {
    if (totalIncomes.total !== undefined) {
      setIncome(totalIncomes.total);
    } else {
      setIncome(0);
    }
    if (totalDebits.total !== undefined) {
      setExpense(totalDebits.total);
    } else {
      setExpense(0);
    }
  }, [totalDebits, totalIncomes]);

  return (
    <AsideContainer>
      <Profile>
        <h2>Bem vindo!!!</h2>
        <h2>{userName}</h2>
        <Balance income={income} expense={expense} />
      </Profile>
      <div>
        <ButtonLogoffWrapper>
          <Button whiteSchema onClickFunc={logOff}>
            Sair
          </Button>
        </ButtonLogoffWrapper>
        <MenuWrapper topIndicator={topIndicator} leftIndicator={leftIndicator}>
          <NavLink
            to="/dashboard"
            ref={(el) => navLinks.current.push(el)}
            activeClassName="navlink--active"
          >
            <RiDashboardLine />
            <span>Vis??o geral</span>
          </NavLink>
          <NavLink
            to="/budgets"
            ref={(el) => navLinks.current.push(el)}
            activeClassName="navlink--active"
          >
            <BsFileSpreadsheet />
            <span>Or??amento</span>
          </NavLink>
          <NavLink
            to="/incomes"
            ref={(el) => navLinks.current.push(el)}
            activeClassName="navlink--active"
          >
            <GiReceiveMoney />
            <span>Receitas</span>
          </NavLink>
          <NavLink
            to="/expenses"
            ref={(el) => navLinks.current.push(el)}
            activeClassName="navlink--active"
          >
            <GiPayMoney />
            <span>Despesas</span>
          </NavLink>
          <NavLink
            to="/tips"
            ref={(el) => navLinks.current.push(el)}
            activeClassName="navlink--active"
          >
            <FaPiggyBank />
            <span>Dicas</span>
          </NavLink>
          <span
            className="indicator"
            ref={(el) => (indicator.current = el)}
          ></span>
        </MenuWrapper>
      </div>
    </AsideContainer>
  );
};

export default Aside;
