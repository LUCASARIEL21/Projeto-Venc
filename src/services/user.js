import { userApiClient } from "./apis";

export const authenticate = async ({ email, password }) => {
  const response = await userApiClient.post("/user/authenticate", {
    email,
    password,
  });
  return response.data;
};

export const registerUser = async ({ email, password, name }) => {
  const response = await userApiClient.post("/user/register", {
    name,
    email,
    password,
  });
  return response.status;
};
