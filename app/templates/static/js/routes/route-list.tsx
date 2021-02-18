import { lazy } from 'react';
import { RouteNames } from '../utils/constants';
const Sample = lazy(() => import('../views/sample-view'));
const Dashboard = lazy(() => import('../views/dashboard'));
const AdminSettings = lazy(() => import('../views/admin-settings'));
const Clusters = lazy(() => import('../views/clusters'));
const Nodes = lazy(() => import('../views/nodes'));
const routeList = {
    Sample: {
        path: RouteNames.Sample.path,
        component: Sample,
    },
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
    AddCluster: {
        path: RouteNames.AddCluster.path,
        component: AdminSettings,
    },
    Nodes : {
        path : RouteNames.Nodes.path,
        component: Nodes
    }
};
export default routeList;
