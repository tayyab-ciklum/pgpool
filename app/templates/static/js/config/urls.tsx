import Config from '../config';
const { BASE_URL } = Config;

export const userApi = {
    getUser: (userId: string): string => `${BASE_URL}/User/Detail?Id=${userId}`
};

export const adminApi = {
    getDefaultConfig:(): string => '/api/v1/cluster',
    getConfig: (clusterId: unknown) : string => `/api/v1/cluster/${clusterId}`,
    setconfig: (): string => '/api/v1/cluster',
    getClusters: () : string => '/api/v1/cluster',
    updateConfig: (clusterId: unknown) : string => `/api/v1/cluster/${clusterId}`,
};