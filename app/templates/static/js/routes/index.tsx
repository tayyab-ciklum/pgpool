import { Switch, Route } from 'react-router-dom';
import React, { Suspense } from 'react';
import routeList from './route-list';

const Routes = (): JSX.Element => {
    return (
        <Suspense fallback={''}>
            <Switch>
                <Route exact render={() => <routeList.Sample.component />} path={routeList.Sample.path} />
                <Route exact render={() => <routeList.Dashboard.component />} path={routeList.Dashboard.path} />
                <Route exact render={() => <routeList.AdminSettings.component />} path={routeList.AdminSettings.path} />
                <Route exact render={() => <routeList.Clusters.component />} path={routeList.Clusters.path} />
            </Switch>
        </Suspense>
    );
};
export default Routes;
