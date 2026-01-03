const API_BASE = "http://127.0.0.1:8000/api";

export async function getAssets() {
  const res = await fetch(`${API_BASE}/trading/assets/`);
  if (!res.ok) throw new Error("Failed to fetch assets");
  return res.json();
}

export async function createTrade(data) {
  const res = await fetch(`${API_BASE}/trading/trades/`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      // Authorization: `Token ${token}`  ← later
    },
    body: JSON.stringify(data),
  });

  if (!res.ok) throw new Error("Failed to create trade");
  return res.json();
}
