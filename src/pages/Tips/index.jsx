import { Container, Page, Header, LottieWrap, HeaderPage, FaPigStyled, BoxTips, TipsItems, ArrowIcon, NewsPaperIcon } from "./styles";
import tips from "../../assets/lotties/tips.json";
import Lottie from "react-lottie";
import { useState } from "react";
import {TipsOne, TipsTwo, TipsTree, TipsFour } from "./TipsItems";
import { useHistory } from "react-router-dom";

const lottieOptions = {
  loop: true,
  autoplay: false,
  rendererSettings: {
    preserveAspectRatio: "xMidYMid slice",
  },
};
const Tips = () => {
  const [ShowButton, setShowButton] = useState(true);
  const [ShowTips, setShowTips] = useState(false);

  const history = useHistory();

  const SelectTip = (component) => {
  	setShowButton(false);
	  setShowTips(component);
  }

  return (
    <>
      <Container>
        <Header>
          <h2 className="tittle">Dicas para o bolso</h2>
        </Header>
        <LottieWrap className="lottie">
          <Lottie options={{ ...lottieOptions, animationData: tips }} />
        </LottieWrap>

        <Page>
          <HeaderPage>
            <FaPigStyled />
            {ShowButton? 
              <>
                <h3>Todas as dicas</h3>
                <button onClick={() => history.push("dashboard")} >Pagina inicial  <ArrowIcon /> </button> 
              </> :
              <button 
                 onClick={() => {
                   setShowTips(false)
                   setShowButton(true)}}
              >Voltar <ArrowIcon /> </button>
            }
          </HeaderPage>

          {ShowButton &&
            <BoxTips>
              <TipsItems onClick={() => SelectTip(<TipsOne />)}>< NewsPaperIcon /> O que é educação financeira?</TipsItems>

              <TipsItems onClick={() => SelectTip(<TipsTwo />)}>< NewsPaperIcon /> Reserva de emergência.</TipsItems>
            
              <TipsItems onClick={() => SelectTip(<TipsTree />)}>< NewsPaperIcon /> Programas de recompensa e seguros </TipsItems>

              <TipsItems onClick={() => SelectTip(<TipsFour />)}>< NewsPaperIcon /> Aproveitar o 13º salário com sabedoria</TipsItems>
            </BoxTips> 
          }	

		      {ShowTips}

        </Page>
      </Container>
    </>
  );
};

export default Tips;
