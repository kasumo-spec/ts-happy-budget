import { Container, Page, Header, LottieWrap } from "./styles";
import tips from "../../assets/lotties/tips.json";
import Lottie from "react-lottie";
const lottieOptions = {
  loop: true,
  autoplay: false,
  rendererSettings: {
    preserveAspectRatio: "xMidYMid slice",
  },
};
const Tips = () => {
  return (
    <>
      <Container>
        <Header>
          <h2 className="tittle">Dicas para o bolso</h2>
        </Header>
        <LottieWrap className="lottie">
          <Lottie options={{ ...lottieOptions, animationData: tips }} />
        </LottieWrap>

        <Page></Page>
      </Container>
    </>
  );
};

export default Tips;
