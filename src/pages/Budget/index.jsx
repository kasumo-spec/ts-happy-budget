import { Container, Page, Header, LottieWrap } from "./styles";
import income from "../../assets/lotties/budget.json";
import Lottie from "react-lottie";
import {useBudget} from "../../providers/budget";
import {useEffect, useState} from "react";
import {BottomNavigation, BottomNavigationAction} from "@material-ui/core";
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';

const lottieOptions = {
  loop: true,
  autoplay: false,
  rendererSettings: {
    preserveAspectRatio: "xMidYMid slice",
  },
};

const Budget = () => {
  const month = ["Janeiro de 2021", "Fevereiro de 2021", "Março de 2021", "Abril de 2021", "Maio de 2021",
    "Junho de 2021", "Julho de 2021", "Agosto de 2021", "Setembro de 2021", "Outubro de 2021",
    "Novembro de 2021", "Dezembro de 2021"]
  const {budgets} = useBudget()
  const [monthIndex, setMonthIndex] = useState(7)
  const [disableMinus, setDisableMinus] = useState(true)
  const [disableSum, setDisableSum] = useState(true)
  const [value] = useState()
  const thisDataNow = [...new Set(budgets.map((budget) => {
    return parseInt(budget.name[0])
  }))]
  const [elementBudget, setElementBudget] = useState(budgets[thisDataNow.indexOf(monthIndex)])


  const handleChange = (event, value) => {
    setMonthIndex(monthIndex + value)
  }

  useEffect(() => {
    if (monthIndex === 1) {
      setDisableMinus(true)
    } else {
      setDisableMinus(false)
    }
    if (monthIndex === 12) {
      setDisableSum(true)
    } else {
      setDisableSum(false)
    }
    setElementBudget(budgets[thisDataNow.indexOf(monthIndex)])
  }, [monthIndex])


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
          <div>
            <BottomNavigation value={value} onChange={handleChange} showLabels >
              <BottomNavigationAction value={-1} disabled={disableMinus} icon={<ChevronLeftIcon />} />
              <BottomNavigationAction disabled={true} label={month[monthIndex - 1]} />
              <BottomNavigationAction value={1} disabled={disableSum} icon={<ChevronRightIcon />} />
            </BottomNavigation>
          </div>
          <div>
            Em produção {JSON.stringify(elementBudget)}
          </div>
        </Page>
      </Container>
    </>
  );
};

export default Budget;
