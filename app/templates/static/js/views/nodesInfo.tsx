import React from "react";
import AdminSettings from "./admin-settings";
import Clusters from "./clusters";

export const nodesInfo: { key: number; name: string; Component: JSX.Element }[] = [
    {
        key: 1,
        name:'Statistics',
        Component: <AdminSettings />,
    },
    {
        key: 2,
        name: 'Analytics',
        Component: <Clusters />,
    },
];