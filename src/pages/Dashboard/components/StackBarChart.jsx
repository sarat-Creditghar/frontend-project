import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";
import chartData from "../data/stacbarchartdata.json";

const StackedBarChart = () => {
  return (
    <div
      style={{
        width: "100%",
        maxHeight: "400px",
        display: "flex",
        alignItems: "center",
      }}
    >
      <ResponsiveContainer width="100%" aspect={3}>
        <BarChart
          data={chartData.months}
          margin={{ top: 20, right: 10, left: 0, bottom: 5 }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="month" />
          <YAxis />
          <Tooltip />
          <Legend />

          {chartData.legend.map((item) => (
            <Bar
              key={item.key}
              dataKey={item.key}
              stackId="a"
              fill={item.color}
            />
          ))}
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default StackedBarChart;
