import React from "react";
import Clusters from "../views/clusters";
import NodeSettings from "../views/node-settings";

export const nodesInfo: { key: number; name: string; Component: JSX.Element }[] = [
    {
        key: 1,
        name:'Statistics',
        Component: <NodeSettings />,
    },
    {
        key: 2,
        name: 'Analytics',
        Component: <Clusters />,
    },
];