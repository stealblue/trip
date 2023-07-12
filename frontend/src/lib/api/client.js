import axios from "axios";

const client = axios.create({
  baseURL: "http://192.168.10.102:4000",
  withCredentials: true,
});

export default client;
