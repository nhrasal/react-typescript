import axios from 'axios';
import { ENV } from './ENV.config';

// creating instance by adding base url
const instance = axios.create({
  baseURL: ENV.ApiEndPoint
});

// interceptor for  request handle every call
instance.interceptors.request.use(
  (config: any) => {
    config.headers.accept = 'application/json';
    return config;
  },
  (error) => error
);

// interceptor for  response handle
instance.interceptors.response.use(
  (res: any) => res.data,
  (error) => error
);

export const apiIns = instance;
