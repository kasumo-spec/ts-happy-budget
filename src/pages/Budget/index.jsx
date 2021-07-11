import { Container, Page, Header, LottieWrap } from "./styles";
import income from "../../assets/lotties/budget.json";
import Lottie from "react-lottie";
import BudgetComponent from "../../components/BudgetComponent";

const lottieOptions = {
  loop: true,
  autoplay: false,
  rendererSettings: {
    preserveAspectRatio: "xMidYMid slice",
  },
};

const Budget = () => {

  return (
    <>
      <Container>
        <Header>
          <h2 className="tittle">Orçamento</h2>
        </Header>
        <LottieWrap className="lottie">
          <Lottie options={{ ...lottieOptions, animationData: income }} />
        </LottieWrap>

        <Page>
          <BudgetComponent />
        </Page>
      </Container>
    </>
  );
};

export default Budget;
