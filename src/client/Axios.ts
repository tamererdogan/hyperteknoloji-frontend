import axios from "axios";
import { toast } from "react-toastify";

const baseURL = import.meta.env.VITE_API_URL;
export const api = axios.create({ baseURL: baseURL });

api.interceptors.response.use(
  (response) => response,
  async (error: any) => {
    toast.error(error.response.data.message);
    return Promise.reject(error);
  }
);
