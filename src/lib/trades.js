import api from "./api";

export const fetchTrades = async () => {
  const response = await api.get("/trading/trades/");
  return response.data;
};

export const createTrade = async (data) => {
  const response = await api.post("/trading/trades/", data);
  return response.data;
};
