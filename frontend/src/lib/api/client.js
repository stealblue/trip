import axios from "axios";

const client = axios.create({
  baseURL: "http://0.0.0.0:4000",
  withCredentials: true,
});

export default client;
