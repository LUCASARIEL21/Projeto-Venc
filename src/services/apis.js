import axios from "axios";

export const userApiClient = axios.create({
  baseURL: import.meta.env.VITE_USER_SERVICE_API,
});
