import {
  PieChart,
  Pie,
  Cell,
  ResponsiveContainer,
  Tooltip,
} from "recharts";

const data = [
  { name: "US30", value: 45 },
  { name: "NASDAQ", value: 30 },
  { name: "Forex", value: 15 },
  { name: "Crypto", value: 10 },
];

const COLORS = ["#2563eb", "#16a34a", "#f59e0b", "#dc2626"];

export default function PortfolioChart() {
  return (
    <div className="rounded-xl border bg-card p-4">
      <h2 className="mb-4 font-semibold">Portfolio Allocation</h2>

      <div className="h-[260px]">
        <ResponsiveContainer width="100%" height="100%">
          <PieChart>
            <Pie
              data={data}
              cx="50%"
              cy="50%"
              innerRadius={60}
              outerRadius={90}
              paddingAngle={4}
              dataKey="value"
            >
              {data.map((_, index) => (
                <Cell key={index} fill={COLORS[index % COLORS.length]} />
              ))}
            </Pie>
            <Tooltip />
          </PieChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}
