import { useEffect, useState } from "react";

import { useBudget } from "../../providers/budget";
import { useDebits } from "../../providers/debts";

import {
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
  BarChart,
} from "recharts";

// const colors = [
//   "#0088FE",
//   "#00C49F",
//   "#FFBB28",
//   "#FF8042",
//   "#161658",
//   "#353535",
//   "#05c405",
//   "#bc65cb",
//   "#3432fb",
// ];

export const ComposedChartComponent = () => {
  const { totalDebits } = useDebits();

  const { budgets } = useBudget();

  const [data, setData] = useState([]);

  useEffect(() => {
    const result = [];
    if (budgets.length !== 0) {
      for (let i = 0; i < totalDebits.length; i++) {
        const partial = totalDebits[i];
        for (let j = 0; j < totalDebits.length; j++) {
          const partialBudget = budgets[j];
          if (partialBudget !== undefined) {
            if (partialBudget.category === partial.category) {
              result.push({ ...partial, budget: partialBudget.value });
            }
          } else {
            result.push({ ...partial, budget: 0 });
          }
        }
      }
    }

    setData(result);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [totalDebits, budgets]);

  return (
    <ResponsiveContainer width="100%" height="100%">
      <BarChart
        width={800}
        height={300}
        data={data}
        margin={{
          top: 5,
          right: 30,
          left: 20,
          bottom: 5,
        }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="category" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Bar
          dataKey="value"
          name="Gastos realizados"
          fill="#8884d8"
          unit=" R$"
        />
        <Bar
          dataKey="budget"
          unit=" R$"
          name="Gastos previstos"
          fill="#82ca9d"
        />
      </BarChart>
    </ResponsiveContainer>
  );
};
