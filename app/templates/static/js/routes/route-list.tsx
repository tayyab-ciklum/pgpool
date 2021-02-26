import { lazy } from 'react';
import { RouteNames } from '../utils/constants';
const Dashboard = lazy(() => import('../views/dashboard'));
const AdminSettings = lazy(() => import('../views/admin-settings'));
const Clusters = lazy(() => import('../views/clusters'));
const Node = lazy(() => import('../views/nodes'));
const routeList = {
    Dashboard: {
        path: RouteNames.Dashboard.path,
        component: Dashboard,
    },
    AdminSettings: {
        path: RouteNames.AdminSettings.path,
        component: AdminSettings,
    },
    Clusters: {
        path: RouteNames.Clusters.path,
        component: Clusters,
    },
    Nodes: {
        path: RouteNames.Nodes.path,
        component: Node,
    }
};
export default routeList;
