import axios from "axios";
const env = process.env.REACT_APP_ENV || "local";
const instance = axios.create({
  baseURL:
    env === "production"
      ? "https://apiv2.jamiatreporting.com/"
      : "http://localhost:5000/",
  headers: {
    "Content-Type": "application/json", // Set default headers
    // Add other default headers if needed
  },
});

export default instance;