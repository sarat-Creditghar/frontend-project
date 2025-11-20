import { PieChart, Pie, Label, ResponsiveContainer } from 'recharts';
import piechartdata from "../data/piechartdata.json";

const MyPie = () => (
  <Pie
    data={piechartdata?.data}
    dataKey="value"
    nameKey="name"
    innerRadius="60%"
    outerRadius="80%"
    stroke="none"
    isAnimationActive={false}
  />
);

export default function PieChartInFlexbox() {
  return (
    <div
      style={{
        display: 'flex',
        flexWrap: 'wrap',
        width: '100%',
        minHeight: '300px',
        padding: '10px',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >

      {/* 🔥 Fully Responsive Donut */}
      <div style={{ width: '350px', height: '350px' }}>
        <ResponsiveContainer width="100%" height="100%">
          <PieChart>
            <MyPie />
            <Label
              position="center"
              value={piechartdata?.total}
              fontSize={22}
              fontWeight={700}
              fill="#000"
            />
          </PieChart>
        </ResponsiveContainer>
      </div>

    </div>
  );
}
