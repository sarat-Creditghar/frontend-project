import React from "react";
import { LineChart, Line, ResponsiveContainer } from "recharts";
import { TrendingUp, TrendingDown } from "lucide-react";
import { iconRegistry } from "../../../config/iconRegistry";
import Linegraph from "../../../shared/components/charts/Linegraph";



const AnalyticCard = ({ data }) => {


  const { icon, label, display, trend, chart, color, lineColor } = data;
  const Icon = iconRegistry[icon];
  const isPositive = trend.direction === "up";

 
 
  return (
    <div
      className="relative p-6 rounded-xl flex flex-col justify-between  transition-transform "
      style={{ backgroundColor: color}}
    >
      {/* Header */}
      <div className="flex justify-between items-start z-10">
        <div className="p-3 bg-white/20 backdrop-blur-sm rounded-2xl">
          <Icon className="w-8 h-8 text-gray-800" strokeWidth={1.5} />
        </div>
        <div className="flex items-center gap-1 font-medium text-gray-800">
          {isPositive ? (
            <TrendingUp className="w-5 h-5" />
          ) : (
            <TrendingDown className="w-5 h-5" />
          )}
          <span className="text-lg">
            {isPositive ? "+" : ""}
            {trend.percentage}%
          </span>
        </div>
      </div>

      {/* Content */}
      <div className="z-10 mt-4">
        <p className="text-gray-700 text-lg font-medium mb-1">{label}</p>
        <h3 className="text-4xl font-bold text-gray-900 tracking-tight">{display}</h3>
      </div>

      {/* Chart */}
      <div className="absolute bottom-0 right-0 w-1/2 h-1/2 opacity-80">
        <Linegraph chart={chart} color={lineColor}/>
      </div>
    </div>
  );
};

export default AnalyticCard;
