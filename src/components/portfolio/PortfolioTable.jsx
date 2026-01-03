import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

const mockPositions = [
  {
    asset: "BTC/USD",
    type: "Crypto",
    price: 43000,
    quantity: 0.5,
    pnl: 1200,
  },
  {
    asset: "NASDAQ",
    type: "Index",
    price: 16500,
    quantity: 1,
    pnl: -300,
  },
];

export default function PortfolioTable() {
  return (
    <div className="rounded-xl border bg-card">
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Asset</TableHead>
            <TableHead>Type</TableHead>
            <TableHead>Price</TableHead>
            <TableHead>Quantity</TableHead>
            <TableHead>P / L</TableHead>
          </TableRow>
        </TableHeader>

        <TableBody>
          {mockPositions.map((pos, index) => (
            <TableRow key={index}>
              <TableCell className="font-medium">{pos.asset}</TableCell>
              <TableCell>{pos.type}</TableCell>
              <TableCell>${pos.price.toLocaleString()}</TableCell>
              <TableCell>{pos.quantity}</TableCell>
              <TableCell
                className={pos.pnl >= 0 ? "text-green-600" : "text-red-600"}
              >
                {pos.pnl >= 0 ? "+" : ""}
                ${pos.pnl}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
}
