import { PieChart, Pie, Label, ResponsiveContainer, Cell } from 'recharts';
import piechartdata from "../data/piechartdata.json";




export default function PieChartInFlexbox() {
  return (
    <div className="w-full h-full bg-white rounded-2xl shadow-sm border border-gray-100 p-6 flex flex-col">
      {/* Header */}
      <div className="mb-6">
        <h2 className="text-xl font-bold text-gray-900 mb-1">{piechartdata.title}</h2>
        <p className="text-sm text-gray-500">{piechartdata.subtitle}</p>
      </div>

      {/* Chart */}
      <div className="flex-1 min-h-[250px] w-full relative">
        <ResponsiveContainer width="100%" height="100%">
          <PieChart>
            <Pie
              data={piechartdata.data}
              dataKey="value"
              nameKey="name"
              cx="50%"
              cy="50%"
              innerRadius="60%"
              outerRadius="80%"
              stroke="none"
              startAngle={90}
              endAngle={-270}
            >
              {piechartdata.data.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={entry.fill} />
              ))}
              <Label
                value={piechartdata.total}
                position="center"
              />
            </Pie>
          </PieChart>
        </ResponsiveContainer>
      </div>

      {/* Legend */}
      <div className="flex flex-wrap justify-center gap-6 mt-6 border-t border-dashed border-gray-200 pt-6">
        {piechartdata.data.map((item, index) => (
          <div key={index} className="flex items-center gap-2">
            <div
              className="w-3 h-3 rounded-full"
              style={{ backgroundColor: item.fill }}
            />
            <span className="text-sm font-medium text-gray-700">
              {item.name}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}
