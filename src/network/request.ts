import axios, { type AxiosRequestConfig } from "axios";

function request(config: AxiosRequestConfig) {
  console.log(config);
}


export default request;