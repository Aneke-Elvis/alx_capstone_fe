import StatCard from "@/components/dashboard/StatCard";

export default function Dashboard() {
  return (
    <div className="p-6 space-y-6">
      {/* Page Header */}
      <div>
        <h1 className="text-2xl font-semibold">Dashboard</h1>
        <p className="text-sm text-muted-foreground">
          Overview of your trading account
        </p>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        <StatCard
          title="Balance"
          value="$12,500"
          subtitle="Account balance"
        />

        <StatCard
          title="Equity"
          value="$12,870"
          subtitle="Including open trades"
        />

        <StatCard
          title="Profit / Loss"
          value="+$370"
          subtitle="Today"
        />

        <StatCard
          title="Open Trades"
          value="3"
          subtitle="Currently active"
        />
      </div>

      {/* Placeholder Sections */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="rounded-lg border bg-card p-4">
          <h2 className="font-medium mb-2">Performance</h2>
          <p className="text-sm text-muted-foreground">
            Chart coming soon
          </p>
        </div>

        <div className="rounded-lg border bg-card p-4">
          <h2 className="font-medium mb-2">Recent Trades</h2>
          <p className="text-sm text-muted-foreground">
            Trade list coming soon
          </p>
        </div>
      </div>
    </div>
  );
}
