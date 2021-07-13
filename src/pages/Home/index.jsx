import { MainContainer } from "./styles";
import homeMain from "../../assets/lotties/homeMain.json";
import Lottie from "react-lottie";
const lottieOptions = {
  loop: true,

  autoplay: false,
  rendererSettings: {
    preserveAspectRatio: "xMidYMid slice",
  },
};
const Home = () => {
  return (
    <MainContainer>
      <Lottie options={{ ...lottieOptions, animationData: homeMain }} />
    </MainContainer>
  );
};

export default Home;
