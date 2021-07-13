import {
    Area,
    Bar,
    CartesianGrid,
    Cell,
    ComposedChart,
    Legend,
    Line,
    ResponsiveContainer,
    Tooltip,
    XAxis,
    YAxis
} from "recharts";

const ChartBudget = ({data, className}) => {

    return (
        <ResponsiveContainer className={className}>
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

                <Bar dataKey="Utilizado" barSize={20} >
                    {data.map((entry,index) => {
                        return <Cell key={`cell-${index}`} fill={entry.color} />
                    })}
                </Bar>

                <Area
                    dataKey="Orçado"
                    type="monotone"
                    fill="#8884d8"
                    stroke="#8884d8"
                />
            </ComposedChart>
        </ResponsiveContainer>
    )
}

export default ChartBudget