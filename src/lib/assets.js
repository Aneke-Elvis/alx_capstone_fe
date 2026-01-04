import api from "./api";

export const fetchAssets = async () => {
  const response = await api.get("/trading/assets/");
  return response.data;
};

export const createAsset = async (data) => {
  const response = await api.post("/trading/assets/", data);
  return response.data;
};
