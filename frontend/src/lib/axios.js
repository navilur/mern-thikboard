import axios from "axios";

const BASE_URL = "https://mern-thikboard.onrender.com/api/";
// import.meta.env.MODE === "development"
//   ? "http://localhost:5001/api/"
//   : "https://mern-thikboard.onrender.com/api/";

const api = axios.create({
  baseURL: BASE_URL,
});

export default api;
