/// <reference types="react" />
declare const routeList: {
    Dashboard: {
        path: string;
        component: import("react").LazyExoticComponent<() => JSX.Element>;
    };
    AdminSettings: {
        path: string;
        component: import("react").LazyExoticComponent<() => JSX.Element>;
    };
    Clusters: {
        path: string;
        component: import("react").LazyExoticComponent<() => JSX.Element>;
    };
    Nodes: {
        path: string;
        component: import("react").LazyExoticComponent<() => JSX.Element>;
    };
};
export default routeList;
