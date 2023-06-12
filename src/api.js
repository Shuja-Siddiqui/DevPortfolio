import axios from "axios";
const BASE_URL = "http://localhost:5000";

export const getImageRequest = (i_id) => {
  return `${BASE_URL}/file/${i_id}`;
};

export const sendEmailRequest = async (data) => {
  const response = await axios.post(`${BASE_URL}/contact`, data);
  return response;
};
