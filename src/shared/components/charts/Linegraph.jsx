import React from "react";
import { Line, LineChart, ResponsiveContainer, Tooltip } from "recharts";

const Linegraph = ({ chart, color }) => {
  return (
    <div className="w-full h-full">
      <ResponsiveContainer width="100%" height="100%">
        <LineChart data={chart}>
          <Tooltip/>
          <Line
            type="monotone"
            dataKey="value"
            stroke={color}
            strokeWidth={3}
            dot={false}
            isAnimationActive={true}
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};

export default Linegraph;
