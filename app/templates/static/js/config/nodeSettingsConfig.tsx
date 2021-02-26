import React from "react";
import AdminSettings from "../views/admin-settings";

export const nodeSettingsConfig: { key: number; name: string; Component: JSX.Element }[] = [
    {
        key: 1,
        name:'Settings 1',
        Component: <AdminSettings />,
    },
    {
        key: 2,
        name: 'Settings 2',
        Component: <AdminSettings />,
    },
    {
        key: 3,
        name:'Settings 3',
        Component: <AdminSettings />,
    },
    {
        key: 4,
        name:'Settings 4',
        Component: <AdminSettings />,
    },
];