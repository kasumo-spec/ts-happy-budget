import { useState } from "react";
import {
  PieChart,
  Pie,
  Sector,
  ResponsiveContainer,
  Cell,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
} from "recharts";

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

const RADIAN = Math.PI / 180;

const StructurePieChart = (props) => {
  console.log(props);
  const {
    cx,
    cy,
    midAngle,
    innerRadius,
    outerRadius,
    startAngle,
    endAngle,
    fill,
    payload,
    percent,
    amount,
  } = props;
  const sin = Math.sin(-RADIAN * midAngle);
  const cos = Math.cos(-RADIAN * midAngle);
  const sx = cx + (outerRadius + 10) * cos;
  const sy = cy + (outerRadius + 10) * sin;
  const mx = cx + (outerRadius + 30) * cos;
  const my = cy + (outerRadius + 30) * sin;
  const ex = mx + (cos >= 0 ? 1 : -1) * 22;
  const ey = my;
  const textAnchor = cos >= 0 ? "start" : "end";

  return (
    <g>
      <text x={cx} y={cy} dy={8} textAnchor="middle" fill={fill}>
        {payload.category}
      </text>
      <Sector
        cx={cx}
        cy={cy}
        innerRadius={innerRadius}
        outerRadius={outerRadius}
        startAngle={startAngle}
        endAngle={endAngle}
        fill={fill}
      />
      <Sector
        cx={cx}
        cy={cy}
        startAngle={startAngle}
        endAngle={endAngle}
        innerRadius={outerRadius + 6}
        outerRadius={outerRadius + 10}
        fill={fill}
      />
      <path
        d={`M${sx},${sy}L${mx},${my}L${ex},${ey}`}
        stroke={fill}
        fill="none"
      />
      <circle cx={ex} cy={ey} r={2} fill={fill} stroke="none" />
      <text
        x={ex + (cos >= 0 ? 1 : -1) * 12}
        y={ey}
        textAnchor={textAnchor}
        fill="#333"
      >{`${amount}`}</text>
      <text
        x={ex + (cos >= 0 ? 1 : -1) * 12}
        y={ey}
        dy={18}
        textAnchor={textAnchor}
        fill="#999"
      >
        {`(${(percent * 100).toFixed(2)}%)`}
      </text>
    </g>
  );
};

export const PieChartComponent = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const onPieEnter = (_, index) => {
    setActiveIndex(index);
  };

  const data = [
    { category: "Moradia", value: 400, amount: "R$400,00" },
    { category: "Alimentação", value: 300, amount: "R$300,00" },
    { category: "Transporte", value: 300, amount: "R$300,00" },
    { category: "Saúde", value: 200, amount: "R$200,00" },
    { category: "Educação", value: 200, amount: "R$200,00" },
    { category: "Lazer", value: 200, amount: "R$200,00" },
    { category: "Pets", value: 200, amount: "R$200,00" },
    { category: "Outros", value: 200, amount: "R$200,00" },
  ];

  return (
    // <ResponsiveContainer width="100%" height="100%">
    <PieChart width={500} height={500}>
      <Pie
        activeIndex={activeIndex}
        activeShape={StructurePieChart}
        data={data}
        cx="50%"
        cy="50%"
        innerRadius={50}
        outerRadius={80}
        fill="#8884d8"
        dataKey="value"
        onMouseEnter={onPieEnter}
        isAnimationActive
      >
        {data.map((_, index) => (
          <Cell key={`cell-${index}`} fill={colors[index % colors.length]} />
        ))}
      </Pie>
    </PieChart>
    // </ResponsiveContainer>
  );
};

export const BarChartComponent = () => {
  const data = [
    { name: "Moradia", value: 400, amount: "R$400,00" },
    { name: "Alimentação", value: 300, amount: "R$300,00" },
    { name: "Transporte", value: 300, amount: "R$300,00" },
    { name: "Saúde", value: 200, amount: "R$200,00" },
    { name: "Educação", value: 200, amount: "R$200,00" },
    { name: "Lazer", value: 200, amount: "R$200,00" },
    { name: "Pets", value: 200, amount: "R$200,00" },
    { name: "Outros", value: 200, amount: "R$200,00" },
  ];

  return (
    // <ResponsiveContainer width="100%" height="100%">
    <BarChart
      width={500}
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
      <XAxis />
      <YAxis dataKey="name" />
      <Tooltip />
      <Legend />
      {data.map((element, index) => (
        <Bar
          key={`cell-${index}`}
          dataKey={element.category}
          fill={colors[index % colors.length]}
        />
      ))}
    </BarChart>
    // </ResponsiveContainer>
  );
};
