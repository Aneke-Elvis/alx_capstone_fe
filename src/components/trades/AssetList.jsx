import { useEffect, useState } from "react";
import { fetchAssets } from "@/lib/assets";

export default function AssetList() {
  const [assets, setAssets] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchAssets()
      .then(setAssets)
      .catch(() => setError("Failed to load assets"))
      .finally(() => setLoading(false));
  }, []);

  if (loading) return <p>Loading assets...</p>;
  if (error) return <p className="text-red-500">{error}</p>;

  return (
    <div className="space-y-2">
      <h2 className="text-lg font-semibold">Assets</h2>

      <ul className="border rounded-md divide-y">
        {assets.map((asset) => (
          <li
            key={asset.id}
            className="flex justify-between p-3 text-sm"
          >
            <span>
              {asset.symbol} — {asset.name}
            </span>
            <span className="text-muted-foreground">
              {asset.asset_type}
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
}
