import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import chartData from "../../../features/dashboard/data/stacbarchartdata.json";
import { ChevronDown } from "lucide-react";

const StackedBarChart = () => {
  return (
    <div className="w-full h-full bg-white rounded-2xl shadow-sm border border-gray-100 p-4 flex flex-col">
      {/* Header */}
      <div className="flex justify-between items-start mb-6">
        <div>
          <h2 className="text-lg font-bold text-gray-900">{chartData.title}</h2>
          <p className="text-sm text-gray-500 mt-1">{chartData.subTitle}</p>
        </div>
        
      </div>

      {/* Custom Legend with Stats */}
      <div className="flex flex-wrap gap-4 mb-6">
        {chartData.legend.map((item) => (
          <div key={item.key} className="flex flex-col">
            <div className="flex items-center gap-2 mb-1">
              <div
                className="w-3 h-3 rounded-full"
                style={{ backgroundColor: item.color }}
              />
              <span className="text-sm font-medium text-gray-600">
                {item.name}
              </span>
            </div>
            <span className="text-lg font-bold text-gray-900 pl-5">
              {chartData.kpi[item.key]}
            </span>
          </div>
        ))}
      </div>

      {/* Chart */}
      <div className="flex-1 min-h-[250px] w-full relative">
        <ResponsiveContainer width="100%" height="50%">
          <BarChart
            data={chartData.months}
            margin={{ top: 10, right: 0, left: -20, bottom: 0 }}
            barSize={20}
          >
            <CartesianGrid
              strokeDasharray="3 3"
              vertical={false}
              stroke="#E5E7EB"
            />
            <XAxis
              dataKey="month"
              axisLine={false}
              tickLine={false}
              tick={{ fill: "#9CA3AF", fontSize: 12 }}
              dy={10}
            />
            <YAxis
              axisLine={false}
              tickLine={false}
              tick={{ fill: "#9CA3AF", fontSize: 12 }}
            />
            <Tooltip
              cursor={{ fill: "transparent" }}
              contentStyle={{
                backgroundColor: "#fff",
                borderRadius: "8px",
                border: "1px solid #E5E7EB",
                boxShadow: "0 4px 6px -1px rgba(0, 0, 0, 0.1)",
              }}
            />
            {chartData.legend.map((item, index) => (
              <Bar
                key={item.key}
                dataKey={item.key}
                stackId="a"
                fill={item.color}
                radius={
                  index === chartData.legend.length - 1 ? [4, 4, 0, 0] : [0, 0, 0, 0]
                }
              />
            ))}
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default StackedBarChart;
