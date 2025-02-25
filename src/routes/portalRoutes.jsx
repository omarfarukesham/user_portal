/* eslint-disable react-refresh/only-export-components */
import RouteAuthorization from '@/components/layout/RouteAuthorization';
import permissions from '@/configuration/permissions';
import PortalAdd from '@/pages/portals/portal-add/PortalAdd';
import PortalEdit from '@/pages/portals/portal-edit/PortalEdit';
import PortalView from '@/pages/portals/portal-view/PortalView';
import { lazy } from 'react';

const Portals = lazy(() => import('@/pages/portals/Portals'));

// These are the children routes of the main layout
const portalRoutes = [
  {
    path: 'portals',
    element: (
      <RouteAuthorization
        element={Portals}
        permission={permissions.VIEW_PORTAL}
      />
    ),
  },
  {
    path: 'portals/add',
    element: (
      <RouteAuthorization
        element={PortalAdd}
        permission={permissions.VIEW_PORTAL}
      />
    ),
  },
  {
    path: 'portals/:id',
    element: (
      <RouteAuthorization
        element={PortalView}
        permission={permissions.VIEW_PORTAL}
      />
    ),
  },
  {
    path: 'portals/:id/edit',
    element: (
      <RouteAuthorization
        element={PortalEdit}
        permission={permissions.VIEW_PORTAL}
      />
    ),
  },
];

export default portalRoutes;
