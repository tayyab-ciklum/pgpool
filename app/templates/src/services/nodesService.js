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
export const addNode = async (nodeData) => {
  try {
    const response = await request({
      url:  adminApi.postDummyNode(),
      method: "POST",
      data: nodeData
    });
    return response;
  } catch (error) {
    return Promise.reject(error.response);
  }
};