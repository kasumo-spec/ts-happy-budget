import { Container, Page, Header, LottieWrap } from "./styles";
import income from "../../assets/lotties/income.json";
import Lottie from "react-lottie";
import IncomeComponent from "../../components/IncomeComponent";
const lottieOptions = {
  loop: true,
  width: 300,
  autoplay: false,
  rendererSettings: {
    preserveAspectRatio: "xMidYMid slice",
  },
};
const Incomes = () => {
  return (
    <>
      <Container>
        <Header>
          <h2 className="tittle">Receitas</h2>
        </Header>
        <LottieWrap className="lottie">
          <Lottie options={{ ...lottieOptions, animationData: income }} />
        </LottieWrap>

        <Page>
          <IncomeComponent />
        </Page>
      </Container>
    </>
  );
};

export default Incomes;
