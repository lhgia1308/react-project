import axios from "axios";
export const API_URL = "https://api.tescrm.com/api/v1";

export const api = axios.create({
  baseURL: API_URL,
  headers: {
    "Content-Type": "application/json",
  },
});
