import axios from "axios";

const instance = axios.create({
  baseURL: import.meta.env.VITE_APP_API,
  timeout: 6 * 1000
});

instance.interceptors.request.use((config) => {
  return config;
});

instance.interceptors.response.use((response) => {
  return response.data;
}, (error) => {
  return Promise.reject(error);
});

export default instance;
