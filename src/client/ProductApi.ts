import { api } from "./Axios";

export const ProductApi = {
  getProducts: (page?: number, perPage?: number) => {
    return api
      .get("products", { params: { page: page ?? 0, per_page: perPage ?? 10 } })
      .then((response: any) => response.data);
  },
};
