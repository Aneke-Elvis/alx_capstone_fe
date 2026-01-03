import TradesTable from "@/components/trades/TradesTable";

export default function Trades() {
  return (
    <div className="p-6 space-y-6">
      <h1 className="text-2xl font-bold">Trades</h1>

      <TradesTable />
    </div>
  );
}
