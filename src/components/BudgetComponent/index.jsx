import { useBudget } from "../../providers/budget";
import { useEffect, useState } from "react";
import { BottomNavigation, BottomNavigationAction } from "@material-ui/core";
import ChevronLeftIcon from "@material-ui/icons/ChevronLeft";
import ChevronRightIcon from "@material-ui/icons/ChevronRight";
import { ChartDiv, ButtonsDiv, InfosDiv, SpanCustom } from "./styes";
import BudgetDeleteModal from "../BudgetDeleteModal";
import NewBudgetModal from "../../components/NewBudgetModal";
import ChartBudget from "../BudgetChartComponent";
import { useIncome } from "../../providers/income";
import { useDebits } from "../../providers/debts";

import notFound from "../../assets/png/notFound.png";

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
    home: "Moradia",
    hobby: "Hobby",
    transport: "Transporte",
    study: "Estudos",
    others: "Outros",
    total: "Total",
  };
  const chartColors = {
    food: "#F0803C",
    market: "#A1867F",
    health: "#ff686b",
    pet: "#6c91c2",
    home: "#654a3e",
    hobby: "#f5d329",
    study: "#00c49a",
    transport: "#495383",
    others: "#057ef0",
    total: "#3cb1b9",
  };
  const { budgets } = useBudget();
  const { totalIncomes } = useIncome();
  const { totalDebits } = useDebits();
  const [value] = useState();
  const [elementBudget, setElementBudget] = useState();
  const [data, setData] = useState();
  const [mobileData, setMobileData] = useState();

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
            color: chartColors[key],
            Orçado: value,
            Utilizado: totalDebits[key],
            "Recebimento Previsto": result[0].prediction,
            "Recebimento Realizado": totalIncomes.total,
          });
        }
        let sortMobile = dataCreated;
        let max3Mobile = [];
        sortMobile.sort((a, b) => a.Orçado > b.Orçado);
        for (let i = 0; i < 3; i++) {
          max3Mobile.push(sortMobile[i]);
        }
        let total = 0;
        for (let i = 0; i < dataCreated.length; i++) {
          total += dataCreated[i].Utilizado;
        }
        dataCreated.push({
          name: translateCategory.total,
          color: chartColors.total,
          "Recebimento Previsto": result[0].prediction,
          "Recebimento Realizado": totalIncomes.total,
          Utilizado: total,
        });
        max3Mobile.push({
          name: translateCategory.total,
          color: chartColors.total,
          "Recebimento Previsto": result[0].prediction,
          "Recebimento Realizado": totalIncomes.total,
          Utilizado: total,
        });
        setData(dataCreated);
        setMobileData(max3Mobile);
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
          style={elementBudget ? { width: "95.5%" } : { width: "100%" }}
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
          <>
            <ChartBudget className={"web"} data={data} />
            <ChartBudget className={"mobile"} data={mobileData} />
          </>
        ) : month === "7" ? (
          <InfosDiv>
            <SpanCustom>
              Não há orçamentos para este mês! Crie agora clicando no botão
              abaixo.
            </SpanCustom>
            <NewBudgetModal />
          </InfosDiv>
        ) : (
          <InfosDiv>
            <img alt="not allowed" src={notFound}></img>
            <SpanCustom>Nenhum registro encontrado</SpanCustom>
          </InfosDiv>
        )}
      </ChartDiv>
    </>
  );
};

export default BudgetComponent;
