import axios from "axios";

const general = axios.create({
  baseURL: "https://smartgreenhouse.vercel.app/api/statistics",
});

export const getData = async () => {
  const response = await general.get("/general");
  return response.data;
};

export default {
  getData,
};
