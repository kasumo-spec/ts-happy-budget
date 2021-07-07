import { useEffect, useState } from "react";
import { PieChart, Pie, Sector, Cell, ResponsiveContainer } from "recharts";
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

const RADIAN = Math.PI / 180;

const StructurePieChart = (props) => {
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
    value,
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
      >{`${value.toLocaleString("pt-br", {
        style: "currency",
        currency: "BRL",
      })}`}</text>
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

  const { debts } = useDebts();

  const onPieEnter = (_, index) => {
    setActiveIndex(index);
  };

  const [data, setData] = useState([
    { category: "Moradia", value: 0 },
    { category: "Alimentação", value: 0 },
    { category: "Transporte", value: 0 },
    { category: "Saúde", value: 0 },
    { category: "Educação", value: 0 },
    { category: "Lazer", value: 0 },
    { category: "Pets", value: 0 },
    { category: "Outros", value: 0 },
  ]);

  useEffect(() => {
    if (debts.length > 0) {
      for (let debt = 0; debt < debts.length; debt++) {
        const partial = debts[debt];
        data.forEach((d) => {
          if (d.category === partial.category) {
            d.value += partial.value;
            setData([...data]);
          }
        });
      }
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [debts]);

  return (
    <ChartContainer>
      <ResponsiveContainer width="100%" height="100%">
        <PieChart width={500} height={500}>
          <Pie
            activeIndex={activeIndex}
            activeShape={StructurePieChart}
            data={data}
            cx="50%"
            cy="50%"
            innerRadius={50}
            outerRadius={80}
            // fill="#8884d8"
            dataKey="value"
            onMouseEnter={onPieEnter}
            isAnimationActive
          >
            {data.map((_, index) => (
              <Cell
                key={`cell-${index}`}
                fill={colors[index % colors.length]}
              />
            ))}
          </Pie>
        </PieChart>
      </ResponsiveContainer>
    </ChartContainer>
  );
};
