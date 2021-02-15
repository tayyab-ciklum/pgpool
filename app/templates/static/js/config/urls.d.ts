export declare const userApi: {
    getUser: (userId: string) => string;
};
export declare const adminApi: {
    getDefaultConfig: () => string;
    getConfig: (clusterId: unknown) => string;
    setconfig: () => string;
    getClusters: () => string;
    updateConfig: (clusterId: unknown) => string;
};
