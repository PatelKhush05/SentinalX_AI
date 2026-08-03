import {
  ResponsiveContainer,
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
} from "recharts";

import { cpuData } from "../../data/chartData";

function CpuChart() {
  return (
    <ResponsiveContainer width="100%" height={300}>
      <LineChart data={cpuData}>
        <CartesianGrid strokeDasharray="3 3" />

        <XAxis dataKey="time" />

        <YAxis unit="%" />

        <Tooltip />

        <Line
          type="monotone"
          dataKey="usage"
          stroke="#2563eb"
          strokeWidth={3}
          dot={{ r: 4 }}
        />
      </LineChart>
    </ResponsiveContainer>
  );
}

export default CpuChart;