import { lazy } from 'react';
import { RouteNames } from '../utils/constants';
const Sample = lazy(() => import('../views/sample-view'));
const Dashboard = lazy(() => import('../views/dashboard'));
const AdminSettings = lazy(() => import('../views/admin-settings'));
const Clusters = lazy(() => import('../views/clusters'));
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
    }
};
export default routeList;
