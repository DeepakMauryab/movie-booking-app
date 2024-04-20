import axios, {Axios} from 'axios';

const AxiosInstance: Axios = axios.create({
  baseURL: 'http://localhost:5000/api/v1/',
});

const FetchMethods = {
  get: (url: string) => AxiosInstance.get(url),
  post: (url: string, body: object) => AxiosInstance.post(url, body),
};

export const {get, post} = FetchMethods;
