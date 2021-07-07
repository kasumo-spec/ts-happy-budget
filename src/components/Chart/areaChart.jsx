import { useEffect, useState } from "react";
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
  Cell,
} from "recharts";
import { useBudget } from "../../providers/budget";
import { useDebts } from "../../providers/debts";
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

  const { debts } = useDebts();

  const { budgets } = useBudget();

  useEffect(() => {
    if (debts.length !== 0) {
      data.forEach((d) => {
        for (let i = 0; i < data.length; i++) {
          const partial = debts[i];
          if (partial !== undefined) {
            if (d.category === partial.category) {
              let deb = "Gasto";
              d[deb] = partial.value;
              if (budgets.length > 0) {
                budgets.forEach((b) => {
                  if (b.category === partial.category) {
                    let budg = "Orçamento";
                    d[budg] = b.value;
                  }
                });
              } else {
                let budg = "Orçamento";
                d[budg] = 0;
              }
            }
          } else {
            let deb = "Gasto";
            d[deb] = 0;
          }
        }
      });
    }
    console.log(data);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [data]);

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
            {debts.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={colors[index % 20]} />
            ))}
          </Bar>
          {/* <Line dataKey="value" stroke="#ff7300" /> */}
        </ComposedChart>
      </ResponsiveContainer>
    </ChartContainer>
  );
};

// const data = [
//   {
//     name: "Page A",
//     uv: 590,
//     pv: 800,
//     amt: 1400,
//   },
//   {
//     name: "Page B",
//     uv: 868,
//     pv: 967,
//     amt: 1506,
//   },
//   {
//     name: "Page C",
//     uv: 1397,
//     pv: 1098,
//     amt: 989,
//   },
//   {
//     name: "Page D",
//     uv: 1480,
//     pv: 1200,
//     amt: 1228,
//   },
//   {
//     name: "Page E",
//     uv: 1520,
//     pv: 1108,
//     amt: 1100,
//   },
//   {
//     name: "Page F",
//     uv: 1400,
//     pv: 680,
//     amt: 1700,
//   },
// ];
