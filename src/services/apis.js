import axios from "axios";
import { addTokenToRequest } from "./helper";

const userApiClient = axios.create({
  baseURL: import.meta.env.VITE_USER_SERVICE_API,
});

addTokenToRequest(userApiClient);

export { userApiClient };
