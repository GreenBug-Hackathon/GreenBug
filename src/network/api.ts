import axios from "axios";

const api = axios.create({
  baseURL: "https://smartgreenhouse.vercel.app/api/auth",
});

export const login = async (email: string, password: string) => {
  const response = await api.post("/login", { email, password });
  return response.data;
};

export default {
  login,
};
