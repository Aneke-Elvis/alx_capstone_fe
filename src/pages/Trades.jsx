import TradesTable from "@/components/trades/TradesTable";
import TradeForm from "@/components/trades/TradeForm";
import AssetList from "@/components/trades/AssetList";

export default function Trades() {
  return (
    <div className="p-6 space-y-6">
      <h1 className="text-2xl font-bold">Trades</h1>
      
       <AssetList />
      <TradesTable />
       <TradeForm />
    </div>
  );
}
