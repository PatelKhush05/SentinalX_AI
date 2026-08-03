import {
  ResponsiveContainer,
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
} from "recharts";

import { memoryData } from "../../data/chartData";

function MemoryChart() {
  return (
    <ResponsiveContainer width="100%" height={300}>
      <AreaChart data={memoryData}>
        <CartesianGrid strokeDasharray="3 3" />

        <XAxis dataKey="time" />

        <YAxis unit=" GB" />

        <Tooltip />

        <Area
          type="monotone"
          dataKey="usage"
          stroke="#16a34a"
          fill="#bbf7d0"
          strokeWidth={3}
        />
      </AreaChart>
    </ResponsiveContainer>
  );
}

export default MemoryChart;