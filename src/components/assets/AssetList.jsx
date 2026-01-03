import { useEffect, useState } from "react";
import { fetchAssets } from "@/lib/api";

export default function AssetList() {
  const [assets, setAssets] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchAssets()
      .then(setAssets)
      .finally(() => setLoading(false));
  }, []);

  if (loading) return <p>Loading assets...</p>;

  return (
    <ul className="space-y-2">
      {assets.map(asset => (
        <li key={asset.id} className="border p-3 rounded">
          <strong>{asset.symbol}</strong> — {asset.name}
          <div className="text-sm text-muted-foreground">
            {asset.asset_type}
          </div>
        </li>
      ))}
    </ul>
  );
}
