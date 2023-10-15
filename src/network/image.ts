import axios from "axios";

const image = axios.create({
  baseURL: "http://192.168.55.166:8000/",
});

export const predict = async (file: { file: File }) => {
  const response = await image.post("/predict", file);
  return response.data;
};

export default {
  predict,
};
