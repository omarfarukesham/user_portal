/* eslint-disable react-refresh/only-export-components */
import RouteAuthorization from '@/components/layout/RouteAuthorization';
import permissions from '@/configuration/permissions';
import PermissionEdit from '@/pages/permissions/permission-edit/PermissionEdit';
import PermissionView from '@/pages/permissions/permission-view/PermissionView';
import { lazy } from 'react';

const Permissions = lazy(() => import('@/pages/permissions/Permissions'));
const PermissionAdd = lazy(() =>
  import('@/pages/permissions/permission-add/PermissionAdd'),
);

// These are the children routes of the main layout
const permissionRoutes = [
  {
    path: 'permissions',
    element: (
      <RouteAuthorization
        element={Permissions}
        permission={permissions.VIEW_PERMISSION}
      />
    ),
  },
  {
    path: 'permissions/add',
    element: (
      <RouteAuthorization
        element={PermissionAdd}
        permission={permissions.VIEW_PERMISSION}
      />
    ),
  },
  {
    path: 'permissions/:id',
    element: (
      <RouteAuthorization
        element={PermissionView}
        permission={permissions.VIEW_PERMISSION}
      />
    ),
  },
  {
    path: 'permissions/:id/edit',
    element: (
      <RouteAuthorization
        element={PermissionEdit}
        permission={permissions.VIEW_PERMISSION}
      />
    ),
  },
];

export default permissionRoutes;
