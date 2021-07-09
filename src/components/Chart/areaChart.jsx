import { useEffect, useState } from "react";
import {
  ComposedChart,
  Area,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
  Cell,
} from "recharts";
import { useBudget } from "../../providers/budget";
import { useDebits } from "../../providers/debts";
import { ChartContainer } from "./styles";

const colors = [
  "#0088FE",
  "#00C49F",
  "#FFBB28",
  "#FF8042",
  "#161658",
  "#353535",
  "#05c405",
  "#bc65cb",
  "#3432fb",
];

export const ComposedChartComponent = () => {
  const [data, setData] = useState([
    { category: "Moradia" },
    { category: "Alimentação" },
    { category: "Transporte" },
    { category: "Saúde" },
    { category: "Educação" },
    { category: "Lazer" },
    { category: "Pets" },
    { category: "Outros" },
  ]);

  const { debits } = useDebits();

  const { budgets } = useBudget();

  useEffect(() => {
    if (debits.length !== 0) {
      data.forEach((d) => {
        for (let i = 0; i < data.length; i++) {
          const partial = debits[i];
          let deb = "Gasto";
          if (partial !== undefined) {
            if (d.category === partial.category) {
              console.log(d, partial);
              d[deb] = partial.value;
            }
          }
          if (partial === undefined) {
            d[deb] = 0;
          }
        }
        for (let j = 0; j < data.length; j++) {
          const partial = budgets[j];
          let budg = "Orçamento";
          if (partial !== undefined) {
            if (d.category === partial.category) {
              d[budg] = partial.value;
            }
          } else {
            let budg = "Orçamento";
            d[budg] = 0;
          }
        }
      });
      setData([...data]);
    }
    console.log(data);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [debits, budgets]);

  return (
    <ChartContainer>
      <ResponsiveContainer width="100%" height="100%">
        <ComposedChart
          layout="vertical"
          width={500}
          height={400}
          data={data}
          margin={{
            top: 20,
            right: 20,
            bottom: 20,
            left: 20,
          }}
        >
          <CartesianGrid stroke="#f5f5f5" />
          <XAxis type="number" />
          <YAxis dataKey="category" type="category" scale="band" />
          <Tooltip />
          <Legend />
          <Area dataKey="Orçamento" fill="#8884d8" stroke="#8884d8" />
          <Bar dataKey="Gasto" barSize={20} fill="#413ea0">
            {debits.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={colors[index % 20]} />
            ))}
          </Bar>
          {/* <Line dataKey="value" stroke="#ff7300" /> */}
        </ComposedChart>
      </ResponsiveContainer>
    </ChartContainer>
  );
};

import "./styles.css";
import React from "react";
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
  Scatter,
} from "recharts";

const budget = [
  { x: "Moradia", value: 1000 },
  { x: "Alimentação", value: 600 },
  { x: "Transporte", value: 300 },
  { x: "Saúde", value: 200 },
  { x: "Educação", value: 450 },
  { x: "Lazer", value: 150 },
  { x: "Pets", value: 60 },
  { x: "Outros", value: 200 },
];
const debts = [
  { x: "Moradia", value: 600 },
  { x: "Alimentação", value: 450 },
  { x: "Transporte", value: 200 },
  { x: "Saúde", value: 0 },
  { x: "Educação", value: 450 },
  { x: "Lazer", value: 100 },
  { x: "Pets", value: 30 },
  { x: "Outros", value: 80 },
];

export default function App() {
  return (
    <ComposedChart
      width={500}
      height={400}
      data={debts}
      margin={{
        top: 20,
        right: 20,
        bottom: 20,
        left: 20,
      }}
    >
      <CartesianGrid stroke="#f5f5f5" />
      <XAxis dataKey="x" />
      <YAxis />
      <Tooltip />
      <Legend />
      <Bar type="monotone" dataKey="value" fill="#8884d8" stroke="#8884d8" />
      <Bar dataKey="value" data={budget} barSize={20} fill="#413ea0" />
    </ComposedChart>
  );
}
