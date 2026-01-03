export default function StatCard({ title, value, subtitle }) {
  return (
    <div className="rounded-xl border bg-card p-4 shadow-sm">
      <p className="text-sm text-muted-foreground">{title}</p>
      <h2 className="mt-2 text-2xl font-bold">{value}</h2>
      {subtitle && (
  <p className="mt-1 text-xs text-muted-foreground">{subtitle}</p>
)}

    </div>
  );
}
