import request from '../config/request';
import { userApi } from '../config/urls';

export const getUsers = (userId: string): Promise<any> => {
    return request({
        url: userApi.getUser(userId),
        method: 'GET',
    })
        .then((response: unknown) => response)
        .catch((error: { response: unknown }) => {
            return Promise.reject(error.response);
        });
};
