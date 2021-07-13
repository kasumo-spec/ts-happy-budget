import {useBudget} from "../../providers/budget";
import {useEffect, useState} from "react";
import {BottomNavigation, BottomNavigationAction} from "@material-ui/core";
import ChevronLeftIcon from "@material-ui/icons/ChevronLeft";
import ChevronRightIcon from "@material-ui/icons/ChevronRight"
import {ChartDiv, ButtonsDiv, InfosDiv} from "./styes";
import {
    ComposedChart,
    Line,
    Area,
    Bar,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    Legend,
    ResponsiveContainer,
} from 'recharts'
import BudgetDeleteModal from "../BudgetDeleteModal";
import NewBudgetModal from "../../components/NewBudgetModal";


const BudgetComponent = () => {
    const month = ["Janeiro de 2021", "Fevereiro de 2021", "Março de 2021", "Abril de 2021", "Maio de 2021",
        "Junho de 2021", "Julho de 2021", "Agosto de 2021", "Setembro de 2021", "Outubro de 2021",
        "Novembro de 2021", "Dezembro de 2021"]
    const { budgets } = useBudget()
    const [monthIndex, setMonthIndex] = useState(7)
    const [disableMinus, setDisableMinus] = useState(true)
    const [disableSum, setDisableSum] = useState(true)
    const [value] = useState()
    const thisDataNow = [...new Set(budgets.map((budget) => {
        return parseInt(budget.name[0])
    }))]
    const [elementBudget, setElementBudget] = useState(budgets[thisDataNow.indexOf(monthIndex)])
    const [data, setData] = useState()

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
    }, [monthIndex, budgets])

    useEffect(() => {
        if (budgets.length !== 0) {
            if (elementBudget === undefined){
                return null
            }
            let dataCreated = []
            for (let [key, value] of Object.entries(elementBudget.data)) {
                dataCreated.push(
                    {
                        "name": key,
                        "Orçado": value,
                        "Utilizado": 300,
                        "Orçamento Previsto": elementBudget.prediction
                    }
                )
            }
            let total = 0
            for (let i = 0; i < dataCreated.length; i++){
                total += dataCreated[i].Utilizado
            }
            dataCreated.push(
                {
                    "name": "total",
                    "Orçamento Previsto": elementBudget.prediction,
                    "Utilizado": total
                }
            )
            setData(dataCreated)
        } else {
            return null
        }
    }, [elementBudget, budgets])


    return (
    <>
        <ButtonsDiv>
            <BottomNavigation
                value={value}
                onChange={handleChange}
                showLabels
                style={elementBudget ? {width: '90%'} : {width: '100%'}} >
                <BottomNavigationAction value={-1} disabled={disableMinus} icon={<ChevronLeftIcon />} />
                <BottomNavigationAction disabled={true} label={month[monthIndex - 1]} />
                <BottomNavigationAction value={1} disabled={disableSum} icon={<ChevronRightIcon />} />
            </BottomNavigation>
            {elementBudget && <BudgetDeleteModal budgetId={elementBudget.id} flexGrow={1} />}
        </ButtonsDiv>
        <ChartDiv>
            {elementBudget ?
            <ResponsiveContainer>
                <ComposedChart width={500}
                               height={300}
                               data={data}
                               margin={{
                                   top: 20,
                                   right: 80,
                                   bottom: 20,
                                   left: 20,
                               }}>
                    <XAxis dataKey={"name"} />
                    <YAxis />
                    <Tooltip />
                    <Legend />
                    <CartesianGrid stroke="#f5f5f5" />
                    <Line type="monotone" dataKey="Orçamento Previsto" stroke="#ff7300" />
                    <Bar dataKey="Utilizado" barSize={20} fill="#413ea0" />
                    <Area dataKey="Orçado" type="monotone" fill="#8884d8" stroke="#8884d8" />
                </ComposedChart>
            </ResponsiveContainer> :
                monthIndex === 7 ?
                    <InfosDiv>
                        Não há orçamentos para este mês! Crie agora clicando
                        no botão BOTÃO LINDAMENTE ESTILIZADO!
                        <NewBudgetModal />
                    </InfosDiv> :
                    <InfosDiv>
                        Não é permitido criação de orçamento fora do mês corrente!
                    </InfosDiv>
            }
        </ChartDiv>
    </>
    )
}

export default BudgetComponent
