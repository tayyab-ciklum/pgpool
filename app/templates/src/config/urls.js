import Config from './index';
const { BASE_URL } = Config;


export const adminApi = {
    getNodes: () => `${BASE_URL}/nodes/`,
    //TODO replace with original nodes data
    getDummyNodes: () => 'https://nodes.free.beeceptor.com/my/api/path'
};
