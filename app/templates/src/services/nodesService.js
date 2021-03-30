import request from "../config/request";
import { adminApi } from "../config/urls";

export const getNodes = () => {
  return request({
    url: adminApi.getDummyNodes(),
    method: "GET",
  })
    .then((response) => response)
    .catch((error) => {
      return Promise.reject(error.response);
    });
};