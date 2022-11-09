import axios from "axios";
import { addTokenToRequest } from "./helper";

const userApiClient = axios.create({
  baseURL: import.meta.env.VITE_USER_SERVICE_API,
});

const vencApiClient = axios.create({
  baseURL: import.meta.env.VITE_VENC_API,
});

addTokenToRequest(userApiClient);
addTokenToRequest(vencApiClient);

export { userApiClient, vencApiClient };
