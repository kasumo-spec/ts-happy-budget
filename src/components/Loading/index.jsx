import Lottie from "react-lottie";
import loading from "../../assets/lotties/loading.json";
import { Wrap, Container } from "./style";
const lottieOptions = {
  loop: true,
  autoplay: true,
  rendererSettings: {
    preserveAspectRatio: "xMidYMid slice",
  },
};

const Loading = () => {
  return (
    <Container>
      <Wrap>
        <Lottie options={{ ...lottieOptions, animationData: loading }} />
      </Wrap>
    </Container>
  );
};

export default Loading;
