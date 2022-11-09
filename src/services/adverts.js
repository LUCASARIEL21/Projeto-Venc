import FormData from "form-data";
import { vencApiClient } from "./apis";

export const getAllAdverts = async (filter) => {
  const response = await vencApiClient.get("/adverts", { params: filter });
  return response.data;
};

export const getUserAdverts = async () => {
  const response = await vencApiClient.get("/adverts-by-user");
  return response.data;
};

export const getCategories = async () => {
  const response = await vencApiClient.get("/adverts-categories");
  return response.data;
};

export const createAdvert = async (advertData, image) => {
  const form = new FormData();
  form.append("files", image);

  form.append("address", advertData.address);
  form.append("categoryId", advertData.categoryId);
  form.append("description", advertData.description);
  form.append("email", advertData.email);
  form.append("location", advertData.location);
  form.append("price", advertData.price);
  form.append("telephone", advertData.telephone);
  form.append("title", advertData.title);

  const response = await vencApiClient.post("/adverts", form, {
    headers: { "Content-Type": "multipart/form-data" },
  });
  return response.status;
};

export const deleteAdverts = async (id) => {
  const response = await vencApiClient.delete(`/adverts/${id}`);
  return response.data;
};
