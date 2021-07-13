import { HeaderPage, FaPigStyled, BoxTips, TipsItems, ArrowIcon, NewsPaperIcon } from "./styles";
import { useState } from "react";
import { useHistory } from "react-router";
import {TipsOne, TipsTwo, TipsTree, TipsFour } from "../TipsItems";


const TipsComponent = () => {
    const [ShowButton, setShowButton] = useState(true);
    const [ShowTips, setShowTips] = useState(false);
  
    const history = useHistory();
  
    const SelectTip = (component) => {
        setShowButton(false);
        setShowTips(component);
    }
    return(
        <div>
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
        </div>
    );
}

export default TipsComponent