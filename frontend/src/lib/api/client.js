import axios from "axios";


const ipAddress = window.location.hostname;
console.log("ipaddd", ipAddress)

const client = axios.create({
  baseURL: `http://${ipAddress}:4000`,
  withCredentials: true,
});

export default client;
