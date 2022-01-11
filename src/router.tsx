import { PartialRouteObject } from 'react-router';

import BaseLayout from 'src/layouts/BaseLayout';
import Dashboard from './components/Dashboard';

// Applications

const routes: PartialRouteObject[] = [
  {
    path: '*',
    element: <BaseLayout />,
    children: [
      {
        path: '/',
        element: <Dashboard />
      }
    ]
  }
];

export default routes;
