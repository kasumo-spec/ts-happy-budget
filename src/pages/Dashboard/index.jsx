import { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";

import {
  ContainerDashBoard,
  ContainerTwoCards,
  Income,
  Expense,
  Budget,
  Tips,
  ImageContainer,
} from "./styles";
import income from "../../assets/lotties/income.json";
import expense from "../../assets/lotties/expense.json";
import budget from "../../assets/lotties/budget.json";
import tips from "../../assets/lotties/tips.json";
import Button from "../../components/Button";
import Lottie from "react-lottie";
import Loading from "../../components/Loading";

import NewIncomeModal from "../../components/NewIncomeModal";
import NewExpenseModal from "../../components/NewExpenseModal";
import NewBudgetModal from "../../components/NewBudgetModal";

import { useDebits } from "../../providers/debts";
import { useIncome } from "../../providers/income";
import { useBudget } from "../../providers/budget";

const lottieOptions = {
  loop: true,
  autoplay: false,
  rendererSettings: {
    preserveAspectRatio: "xMidYMid slice",
  },
};

const Dashboard = () => {
  const [hasBudget, setHasBudget] = useState(false);
  const { budgets, reqMonth } = useBudget();

  const history = useHistory();
  const { totalDebits, loading } = useDebits();
  const { totalIncomes } = useIncome();

  useEffect(() => {
    setHasBudget(false);
    budgets.forEach((budget) => {
      if (budget.name === reqMonth) {
        setHasBudget(true);
      }
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [budgets]);

  const redirectToTips = (path) => {
    history.push(path);
  };
  return (
    <>
      {loading ? (
        <Loading />
      ) : (
        <ContainerDashBoard>
          <ContainerTwoCards>
            <Income>
              <h2 className="tittle">Receitas</h2>

              <ImageContainer>
                {hasBudget ? (
                  <div className="status">
                    <h3>Total</h3>
                    <h3>
                      {totalIncomes.total
                        ? totalIncomes.total.toFixed(2)
                        : "0,00"}{" "}
                      R$
                    </h3>
                    <NewIncomeModal />
                  </div>
                ) : (
                  <div className="status">
                    <h3>Crie um or??amento para adicionar uma receita</h3>
                    <Button onClick={() => redirectToTips("/budgets")}>
                      Ir para Or??amento
                    </Button>
                  </div>
                )}
                <div className="wrapLottie">
                  <Lottie
                    options={{ ...lottieOptions, animationData: income }}
                  />
                </div>
              </ImageContainer>
            </Income>

            <Expense>
              <h2 className="tittle">Despesas</h2>
              <ImageContainer>
                {hasBudget ? (
                  <div className="status">
                    <h3>Total</h3>
                    <h3>
                      {totalDebits.total
                        ? totalDebits.total.toFixed(2)
                        : "0,00"}{" "}
                      R$
                    </h3>
                    <NewExpenseModal />
                  </div>
                ) : (
                  <div className="status">
                    <h3>Crie um or??amento para adicionar uma despesa</h3>
                    <Button onClick={() => redirectToTips("/budgets")}>
                      Ir para Or??amento
                    </Button>
                  </div>
                )}

                <div className="wrapLottie expense">
                  <Lottie
                    options={{ ...lottieOptions, animationData: expense }}
                  />
                </div>
              </ImageContainer>
            </Expense>
          </ContainerTwoCards>

          <ContainerTwoCards style={{ marginTop: 0 }}>
            <Budget>
              <h2 className="tittle">Or??amento</h2>

              <ImageContainer>
                {hasBudget ? (
                  <div className="status">
                    <p>
                      V?? at?? a p??gina de or??amento e verifique como est?? a sua
                      situa????o financeira.
                    </p>
                    <Button onClick={() => redirectToTips("/budgets")}>
                      Or??amento
                    </Button>
                  </div>
                ) : (
                  <div className="status">
                    <p>Clique no bot??o abaixo para criar seu or??amento</p>
                    <NewBudgetModal />
                  </div>
                )}
                <div className="wrapLottie">
                  <Lottie
                    options={{ ...lottieOptions, animationData: budget }}
                  />
                </div>
              </ImageContainer>
            </Budget>

            <Tips>
              <h2 className="tittle">Dicas para o bolso</h2>
              <ImageContainer>
                <div className="status">
                  <p>Descubra as melhores dicas para o seu or??amento decolar</p>
                  <Button onClick={() => redirectToTips("/tips")}>Abrir</Button>
                </div>
                <div className="wrapLottie expense">
                  <Lottie options={{ ...lottieOptions, animationData: tips }} />
                </div>
              </ImageContainer>
            </Tips>
          </ContainerTwoCards>
        </ContainerDashBoard>
      )}
    </>
  );
};

export default Dashboard;
