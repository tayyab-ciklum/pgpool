import { Switch, Route } from 'react-router-dom';
import React, { Suspense } from 'react';
import routeList from './route-list';

const Routes = ()=> {
    return (
        <Suspense fallback={''}>
            <Switch>
                <Route exact render={() => <routeList.Dashboard.component />} path={routeList.Dashboard.path} />
                <Route exact render={() => <routeList.AdminSettings.component />} path={routeList.AdminSettings.path} />
                <Route exact render={() => <routeList.Clusters.component />} path={routeList.Clusters.path} />
                <Route exact render={() => <routeList.Nodes.component />} path={routeList.Nodes.path} />
            </Switch>
        </Suspense>
    );
};
export default Routes;
