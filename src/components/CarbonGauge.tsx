
import { PieChart, Pie, Cell, ResponsiveContainer } from "recharts";

interface CarbonGaugeProps {
  value: number;
  maxValue: number;
  label: string;
}

const CarbonGauge = ({ value, maxValue, label }: CarbonGaugeProps) => {
  // Calculate percentage
  const percentage = (value / maxValue) * 100;
  
  // Color determination based on percentage
  const getColor = () => {
    if (percentage <= 30) return "#4CAF50"; // Good - green
    if (percentage <= 70) return "#FFC107"; // Moderate - yellow/amber
    return "#F44336"; // High - red
  };

  // Data for the gauge chart
  const data = [
    { name: "Value", value: value },
    { name: "Remaining", value: maxValue - value },
  ];

  return (
    <div className="flex flex-col items-center">
      <div className="w-full h-48 relative">
        <ResponsiveContainer width="100%" height="100%">
          <PieChart>
            <Pie
              data={data}
              cx="50%"
              cy="50%"
              startAngle={180}
              endAngle={0}
              innerRadius="60%"
              outerRadius="80%"
              paddingAngle={0}
              dataKey="value"
              cornerRadius={4}
            >
              <Cell key="cell-0" fill={getColor()} />
              <Cell key="cell-1" fill="#E0E0E0" />
            </Pie>
          </PieChart>
        </ResponsiveContainer>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/4 text-center">
          <p className="text-3xl font-bold">{value}</p>
          <p className="text-sm text-gray-500">kg CO2</p>
        </div>
      </div>
      <p className="text-lg font-medium mt-2 text-center">
        {label}
      </p>
    </div>
  );
};

export default CarbonGauge;
