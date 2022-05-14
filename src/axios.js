import axios from "axios";

const instance = axios.create({
  baseURL: "http://localhost:5001/app-5d7c3/us-central1/api", // API URL
});

export default instance;
