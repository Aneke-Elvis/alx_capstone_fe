import { useEffect, useState } from "react";
import { getAssets, createTrade } from "@/lib/api";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export default function TradeForm() {
  const [assets, setAssets] = useState([]);
  const [form, setForm] = useState({
    asset: "",
    trade_type: "BUY",
    price: "",
    quantity: "",
  });

  useEffect(() => {
    getAssets().then(setAssets).catch(console.error);
  }, []);

  function handleChange(e) {
    setForm({ ...form, [e.target.name]: e.target.value });
  }

  async function handleSubmit(e) {
    e.preventDefault();
    try {
      await createTrade(form);
      alert("Trade created!");
    } catch (err) {
      alert("Failed to create trade");
    }
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4 max-w-md">
      {/* Asset */}
      <select
        name="asset"
        value={form.asset}
        onChange={handleChange}
        className="w-full border rounded px-3 py-2"
        required
      >
        <option value="">Select asset</option>
        {assets.map((a) => (
          <option key={a.id} value={a.id}>
            {a.symbol} — {a.name}
          </option>
        ))}
      </select>

      {/* Type */}
      <select
        name="trade_type"
        value={form.trade_type}
        onChange={handleChange}
        className="w-full border rounded px-3 py-2"
      >
        <option value="BUY">Buy</option>
        <option value="SELL">Sell</option>
      </select>

      <Input
        name="price"
        placeholder="Price"
        value={form.price}
        onChange={handleChange}
        required
      />

      <Input
        name="quantity"
        placeholder="Quantity"
        value={form.quantity}
        onChange={handleChange}
        required
      />

      <Button type="submit">Create Trade</Button>
    </form>
  );
}
