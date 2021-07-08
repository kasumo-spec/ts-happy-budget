import { Container, Page, Header, LottieWrap } from "./styles";
import income from "../../assets/lotties/expense.json";
import Lottie from "react-lottie";
const lottieOptions = {
  loop: true,
  autoplay: false,
  rendererSettings: {
    preserveAspectRatio: "xMidYMid slice",
  },
};
const Expenses = () => {
  return (
    <>
      <Container>
        <Header>
          <h2 className="tittle">Despesas</h2>
        </Header>
        <LottieWrap className="lottie">
          <Lottie options={{ ...lottieOptions, animationData: income }} />
        </LottieWrap>

        <Page></Page>
      </Container>
    </>
  );
};

export default Expenses;
