import {
  ContainerDashBoard,
  ContainerIncomeExpense,
  ContainerBudget,
  Income,
  Expense,
  Budget,
  ImageContainer,
} from "./styles";
import income from "../../assets/lotties/income.json";
import expense from "../../assets/lotties/expense.json";
import budget from "../../assets/lotties/budget.json";
import Button from "../../components/Button";
import Lottie from "react-lottie";

import NewIncomeModal from "../../components/NewIncomeModal";
import NewExpenseModal from "../../components/NewExpenseModal";
import { ComposedChartComponent } from "../../components/Chart/areaChart";
import { useBudget } from "../../providers/budget";
const lottieOptions = {
  loop: true,
  autoplay: false,
  rendererSettings: {
    preserveAspectRatio: "xMidYMid slice",
  },
};

const Dashboard = () => {
  const { budgetsId } = useBudget();
  return (
    <ContainerDashBoard>
      <ContainerIncomeExpense>
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
      </ContainerIncomeExpense>
      <ContainerBudget>
        <Budget>
          <h2 className="tittle">Orçamento</h2>

          <ImageContainer>
            <div className="status">
              {budgetsId !== 0 ? (
                <ComposedChartComponent />
              ) : (
                <>
                  <p>Clique no botão abaixo para criar seu orçamento</p>
                  <Button>Criar</Button>
                </>
              )}
            </div>
            <div className="wrapLottie">
              <Lottie options={{ ...lottieOptions, animationData: budget }} />
            </div>
          </ImageContainer>
        </Budget>
      </ContainerBudget>
    </ContainerDashBoard>
  );
};

export default Dashboard;
