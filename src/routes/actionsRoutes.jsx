import RouteAuthorization from '@/components/layout/RouteAuthorization';
import permissions from '@/configuration/permissions';
import { lazy } from 'react';

const actions = lazy(() => import('@/pages/actions/Actions'));
const actionAdd = lazy(() => import('@/pages/actions/action-add/ActionAdd'));

const actionsRoutes = [
  {
    path: 'actions',
    element: (
      <RouteAuthorization
        element={actions}
        permission={permissions.VIEW_ACTION}
      />
    ),
  },
  {
    path: 'actions/add',
    element: (
      <RouteAuthorization
        element={actionAdd}
        permission={permissions.VIEW_ACTION}
      />
    ),
  },
];

export default actionsRoutes;
