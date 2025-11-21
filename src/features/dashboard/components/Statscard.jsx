import React from "react";
import { Bar, BarChart, ResponsiveContainer, Tooltip } from "recharts";
import { TrendingUp, TrendingDown } from "lucide-react";

const Statscard = ({ t }) => {
  
  const chartData = t?.chartData || [];
  const isPositive = t?.trend === "up";
  const color = t?.color;



  return (
    <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6 flex items-center justify-between h-full">
      
      <div className="flex flex-col justify-between h-full">
        <div>
          <h3 className="text-sm font-medium text-gray-500 mb-1">{t.title}</h3>
          <div className="text-3xl font-bold text-gray-900">{t.value}</div>
        </div>

        <div className="flex items-center gap-2 mt-4">
          <div
            className={`flex items-center gap-1 text-sm font-medium ${isPositive ? "text-green-600" : "text-red-600"
              }`}
          >
            {isPositive ? <TrendingUp size={16} /> : <TrendingDown size={16} />}
            <span>{t.changePercentage}</span>
          </div>
          <span className="text-sm text-gray-400">{t.changeLabel}</span>
        </div>
      </div>

      {/* Right Side: Mini Bar Chart */}
      <div className="w-32 h-16">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart data={chartData} >
            <Bar
              dataKey="value"
              fill={color} // Violet color from the image
             
              barSize={12}
            />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default Statscard;
