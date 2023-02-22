import axios, {Method} from 'axios';

const BASE_URL = 'https://api.exchangerate.host';

// define axios instance with base url and request timeout
export const axiosInstance = axios.create({
  baseURL: BASE_URL,
  timeout: 10000,
});

// interceptor
axiosInstance.interceptors.response.use(
  res => {
    return res;
  },
  async err => {
    console.log('interceptor error ===>>> ', err);
    return Promise.reject(err);
  },
);

// Axios function
export const Axios = async (method: Method, url: string, params?: any) => {
  const res = axiosInstance({
    method,
    url,
    params,
    responseType: 'json',
  });

  return res;
};
