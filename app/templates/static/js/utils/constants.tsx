export const RouteNames = {
    Dashboard: {
        path: '/',
    },
    AdminSettings: {
        path: '/admin-settings',
    },
    Clusters: {
        path: '/clusters',
    },
    Nodes : {
        path: '/node'
    }
};
export const dropDownsData: { key: string; value: string[] }[] = [
    {
        key: 'StopMode',
        value: ['Smart'],
    },
    {
        key: 'Language',
        value: ['English', 'French'],
    }
];
export const DATE_FORMAT = 'DD-MMM-YY';