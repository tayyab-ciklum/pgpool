import request from '../config/request';
import { adminApi } from '../config/urls';

export const getConfig = (clusterId: unknown): Promise<any> => {
    return request({
        url: adminApi.getConfig(clusterId),
        method: 'GET',
    })
        .then((response: unknown) => response)
        .catch((error: { response: unknown }) => {
            return Promise.reject(error.response);
        });
};
export const setConfig = (config: unknown): Promise<any> => {
    return request({
        url: adminApi.setconfig(),
        method: 'POST',
        data: config
    })
        .then((response: unknown) => response)
        .catch((error: { response: unknown }) => {
            return Promise.reject(error.response);
        });
};
export const getClusters = (): Promise<any> => {
    return request({
        url: adminApi.getClusters(),
        method: 'GET',
    })
        .then((response: unknown) => response)
        .catch((error: { response: unknown }) => {
            return Promise.reject(error.response);
        });
};
export const updateConfig = (config: unknown, id: string): Promise<any> => {
    return request({
        url: adminApi.updateConfig(id),
        method: 'PUT',
        data: config
    })
        .then((response: unknown) => response)
        .catch((error: { response: unknown }) => {
            return Promise.reject(error.response);
        });
};