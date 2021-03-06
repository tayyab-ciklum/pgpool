import { lazy } from 'react';
import { RouteNames } from '../utils/constants';
const Dashboard = lazy(() => import('../views/dashboard'));
const AdminSettings = lazy(() => import('../views/setting-groups/admin-settings'));
const Node = lazy(() => import('../views/nodes'));
const routeList = {
    Dashboard: {
        path: RouteNames.Dashboard.path,
        component: Dashboard,
    },
    AdminSettings: {
        path: RouteNames.AdminSettings.path,
        component: AdminSettings
    },
    Clusters: {
        path: RouteNames.Clusters.path,
        component: AdminSettings
    },
    Nodes: {
        path: RouteNames.Nodes.path,
        component: Node
    }
};
export default routeList;
