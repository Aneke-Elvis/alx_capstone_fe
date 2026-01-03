export default function PortfolioStatCard({
  title,
  value,
  change,
}) {
  return (
    <div className="rounded-xl border bg-card p-4">
      <p className="text-sm text-muted-foreground">{title}</p>

      <p className="mt-2 text-2xl font-bold">{value}</p>

      {change && (
        <p
          className={`mt-1 text-sm ${
            change.startsWith("+")
              ? "text-green-500"
              : "text-red-500"
          }`}
        >
          {change}
        </p>
      )}
    </div>
  );
}
