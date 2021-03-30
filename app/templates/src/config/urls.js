import Config from './index';
const { BASE_URL } = Config;


export const adminApi = {
    getNodes: (id) => `${BASE_URL}/nodes/${id}`,
    //TODO replace with original nodes data end-point 
    getDummyNodesB: () => 'https://nodes.free.beeceptor.com/my/api/path/nodes',
    getDummyNodes: () => 'https://8b9df8a2-423e-4563-bbf6-529232e3dee5.mock.pstmn.io/localhost/5050/nodes'
};
