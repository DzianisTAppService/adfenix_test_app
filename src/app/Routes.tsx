import React, { FC, lazy } from 'react';
import { Navigate, Route, Routes as ReactRouterRoutes } from 'react-router-dom';

import PATHS from 'constants/routes-paths';

const MainPage = lazy(() => import('../pages/MainPage'));

const Routes: FC = () => (
  <ReactRouterRoutes>
    <Route path={PATHS.welcome} element={<MainPage />} />

    <Route path={PATHS.noRoute} element={<Navigate to={PATHS.welcome} replace />} />
  </ReactRouterRoutes>
);

export default Routes;
