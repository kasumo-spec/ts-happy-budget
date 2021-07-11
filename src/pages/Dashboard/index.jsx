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

import NewIncomeModal from "../../components/NewIncomeModal";
import NewExpenseModal from "../../components/NewExpenseModal";
import NewBudgetModal from "../../components/NewBudgetModal";

import { useHistory } from "react-router-dom";
const lottieOptions = {
  loop: true,
  autoplay: false,
  rendererSettings: {
    preserveAspectRatio: "xMidYMid slice",
  },
};

const Dashboard = () => {
  const history = useHistory();

  const redirectToTips = () => {
    history.push("/tips");
  };

  return (
    <ContainerDashBoard>
      <ContainerTwoCards>
        <Income>
          <h2 className="tittle">Receitas</h2>

          <ImageContainer>
            <div className="status">
              <h3>Total</h3>
              <h3>100.000,00R$</h3>
              <NewIncomeModal />
            </div>
            <div className="wrapLottie">
              <Lottie options={{ ...lottieOptions, animationData: income }} />
            </div>
          </ImageContainer>
        </Income>
        <Expense>
          <h2 className="tittle">Despesas</h2>
          <ImageContainer>
            <div className="status">
              <h3>Total</h3>
              <h3>100.000,00R$</h3>
              <NewExpenseModal />
            </div>
            <div className="wrapLottie expense">
              <Lottie options={{ ...lottieOptions, animationData: expense }} />
            </div>
          </ImageContainer>
        </Expense>
      </ContainerTwoCards>
      <ContainerTwoCards style={{ marginTop: 0 }}>
        <Budget>
          <h2 className="tittle">Orçamento</h2>

          <ImageContainer>
            <div className="status">
              <p>Clique no botão abaixo para criar seu orçamento</p>
              <NewBudgetModal />
            </div>
            <div className="wrapLottie">
              <Lottie options={{ ...lottieOptions, animationData: budget }} />
            </div>
          </ImageContainer>
        </Budget>

        <Tips>
          <h2 className="tittle">Dicas para o bolso</h2>
          <ImageContainer>
            <div className="status">
              <p>Descubra as melhores dicas para o seu orçamento decolar</p>
              <Button onClick={redirectToTips}>Abrir</Button>
            </div>
            <div className="wrapLottie expense">
              <Lottie options={{ ...lottieOptions, animationData: tips }} />
            </div>
          </ImageContainer>
        </Tips>
      </ContainerTwoCards>
    </ContainerDashBoard>
  );
};

export default Dashboard;
