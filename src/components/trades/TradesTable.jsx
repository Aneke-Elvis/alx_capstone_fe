import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";

const trades = [
  {
    id: 1,
    symbol: "US30",
    type: "Buy",
    lots: 1.2,
    entry: 37820,
    exit: 37940,
    profit: 240,
    status: "Closed",
  },
  {
    id: 2,
    symbol: "NASDAQ",
    type: "Sell",
    lots: 0.8,
    entry: 15240,
    exit: null,
    profit: 180,
    status: "Open",
  },
];

export default function TradesTable() {
  return (
    <div className="rounded-xl border bg-card overflow-x-auto">
      <Table className="min-w-[700px]">
        <TableHeader>
          <TableRow>
            <TableHead>Symbol</TableHead>
            <TableHead>Type</TableHead>
            <TableHead>Lots</TableHead>
            <TableHead>Entry</TableHead>
            <TableHead>Exit</TableHead>
            <TableHead>P/L</TableHead>
            <TableHead>Status</TableHead>
          </TableRow>
        </TableHeader>

        <TableBody>
          {trades.map((trade) => (
            <TableRow key={trade.id}>
              <TableCell>{trade.symbol}</TableCell>
              <TableCell>{trade.type}</TableCell>
              <TableCell>{trade.lots}</TableCell>
              <TableCell>{trade.entry}</TableCell>
              <TableCell>{trade.exit ?? "—"}</TableCell>
              <TableCell
                className={
                  trade.profit >= 0
                    ? "text-green-600"
                    : "text-red-600"
                }
              >
                ${trade.profit}
              </TableCell>
              <TableCell>
                <Badge
                  variant={trade.status === "Open" ? "secondary" : "default"}
                >
                  {trade.status}
                </Badge>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
}
