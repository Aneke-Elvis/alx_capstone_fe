import PortfolioStatCard from "@/components/portfolio/PortfolioStatCard";
import PortfolioChart from "@/components/portfolio/PortfolioChart";
import PortfolioTable from "@/components/portfolio/PortfolioTable";

export default function Portfolio() {
  return (
    <div className="p-6 space-y-6">
      <h1 className="text-2xl font-bold">Portfolio</h1>

      {/* Summary cards */}
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        <PortfolioStatCard title="Total Equity" value="$47,000" />
        <PortfolioStatCard title="Open P/L" value="$2,340" change="+5.2%" />
        <PortfolioStatCard title="Today’s P/L" value="$320" change="+1.1%" />
        <PortfolioStatCard title="Exposure" value="$38,500" />
      </div>

      {/* Chart + table */}
      <div className="grid gap-6 md:grid-cols-2">
        <PortfolioChart />
        <PortfolioTable />
      </div>
    </div>
  );
}
