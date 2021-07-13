import { useBudget } from "../../providers/budget";
import { useEffect, useState } from "react";
import { BottomNavigation, BottomNavigationAction } from "@material-ui/core";
import ChevronLeftIcon from "@material-ui/icons/ChevronLeft";
import ChevronRightIcon from "@material-ui/icons/ChevronRight";
import { ChartDiv, ButtonsDiv, InfosDiv } from "./styes";
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
} from "recharts";
import BudgetDeleteModal from "../BudgetDeleteModal";
import NewBudgetModal from "../../components/NewBudgetModal";


//todo: Correção pra mobile +
//      Implementação dos 3 maiores pro mobile +
//      Corrigir o layout do botão de deletar +
//      Tentar solucionar as cores no Gráfico +

const BudgetComponent = () => {
  const months = [
    "Janeiro",
    "Fevereiro",
    "Março",
    "Abril",
    "Maio",
    "Junho",
    "Julho",
    "Agosto",
    "Setembro",
    "Outubro",
    "Novembro",
    "Dezembro",
  ];
  const translateCategory = {
    market: "Mercado",
    food: "Comida",
    health: "Saúde",
    pet: "Pet",
    home: "Casa",
    hobby: "Hobby",
    transport: "Transporte",
    study: "Estudos",
    others: "Outros",
    total: "Total"
  }
  const { budgets } = useBudget();
  const [value] = useState();
  const [elementBudget, setElementBudget] = useState();
  const [data, setData] = useState();

  const [month, setMonth] = useState(
    new Date().toLocaleString("en-US", {
      month: "numeric",
    })
  );

  const [year, setYear] = useState(
    new Date().toLocaleString("en-US", {
      year: "numeric",
    })
  );

  const handleChange = (event, value) => {
    if (value < 0) {
      if (parseInt(month) === 1) {
        setYear(parseInt(year) + value);
        setMonth("12");
      } else {
        const newMonth = parseInt(month) + value;
        setMonth(newMonth.toString());
      }
    } else {
      if (parseInt(month) === 12) {
        setYear(parseInt(year) + value);
        setMonth("1");
      } else {
        const newMonth = parseInt(month) + value;
        setMonth(newMonth.toString());
      }
    }
  };

  useEffect(() => {
    let result = [];
    budgets.find((budget) => {
      if (budget.name === `${month}/${year}`) {
        result.push(budget);
      }
      setElementBudget(result[0]);
    });
    if (budgets.length !== 0) {
      if (result[0] === undefined) {
        return null;
      } else {
        let dataCreated = [];
        for (let [key, value] of Object.entries(result[0].data)) {
          dataCreated.push({
            name: translateCategory[key],
            Orçado: value,
            Utilizado: 300,
            "Recebimento Previsto": result[0].prediction,
            "Recebimento Realizado": 100
          });
        }
        let total = 0;
        let recebidos = 0;
        for (let i = 0; i < dataCreated.length; i++) {
          total += dataCreated[i].Utilizado;
          recebidos += dataCreated[i]["Recebimento Realizado"]
        }
        dataCreated.push({
          name: translateCategory.total,
          "Recebimento Previsto": result[0].prediction,
          "Recebimento Realizado": recebidos,
          Utilizado: total,
        });
        setData(dataCreated);
      }
    } else {
      return null;
    }
  }, [month, budgets]);

  return (
    <>
      <ButtonsDiv>
        <BottomNavigation
          value={value}
          onChange={handleChange}
          showLabels
          style={elementBudget ? { width: "90%" } : { width: "100%" }}
        >
          <BottomNavigationAction value={-1} icon={<ChevronLeftIcon />} />
          <BottomNavigationAction
            disabled={true}
            label={`${months[month - 1]} de ${year}`}
          />
          <BottomNavigationAction value={1} icon={<ChevronRightIcon />} />
        </BottomNavigation>
        {elementBudget && (
          <BudgetDeleteModal budgetId={elementBudget.id} flexGrow={1} />
        )}
      </ButtonsDiv>
      <ChartDiv>
        {elementBudget ? (
          <ResponsiveContainer>
            <ComposedChart
              width={500}
              height={300}
              data={data}
              margin={{
                top: 20,
                right: 80,
                bottom: 20,
                left: 20,
              }}
            >
              <XAxis dataKey={"name"} />
              <YAxis />
              <Tooltip />
              <Legend />
              <CartesianGrid stroke="#f5f5f5" />
              <Line
                type="monotone"
                dataKey="Recebimento Previsto"
                stroke="#ff7300"
              />
              <Line
                type="monotone"
                dataKey="Recebimento Realizado"
                stroke="green"
              />
              <Bar dataKey="Utilizado" barSize={20} fill="#413ea0" />
              <Area
                dataKey="Orçado"
                type="monotone"
                fill="#8884d8"
                stroke="#8884d8"
              />
            </ComposedChart>
          </ResponsiveContainer>
        ) : month === "7" ? (
          <InfosDiv>
            Não há orçamentos para este mês! Crie agora clicando no botão BOTÃO
            LINDAMENTE ESTILIZADO!
            <NewBudgetModal />
          </InfosDiv>
        ) : (
          <InfosDiv>
            Não é permitido criação de orçamento fora do mês corrente!
          </InfosDiv>
        )}
      </ChartDiv>
    </>
  );
};

export default BudgetComponent;
