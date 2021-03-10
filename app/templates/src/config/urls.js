import Config from './index';
const { BASE_URL } = Config;


export const adminApi = {
    getNodes: () => `${BASE_URL}/nodes/`,
};