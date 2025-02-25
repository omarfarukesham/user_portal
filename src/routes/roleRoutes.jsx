/* eslint-disable react-refresh/only-export-components */
import RouteAuthorization from '@/components/layout/RouteAuthorization';
import permissions from '@/configuration/permissions';
import { lazy } from 'react';

const Roles = lazy(() => import('@/pages/roles/Roles'));
const RoleView = lazy(() => import('@/pages/roles/role-view/RoleView'));

// These are the children routes of the main layout
const roleRoutes = [
  {
    path: 'roles',
    element: (
      <RouteAuthorization element={Roles} permission={permissions.VIEW_ROLE} />
    ),
  },
  {
    path: 'roles/:id',
    element: (
      <RouteAuthorization
        element={RoleView}
        permission={permissions.VIEW_ROLE}
      />
    ),
  },
  // {
  //   path: 'users/:id',
  //   element: (
  //     <RouteAuthorization
  //       element={UserView}
  //       permission={permissions.VIEW_USER}
  //     />
  //   ),
  // },
  // {
  //   path: 'users/:id/edit',
  //   element: (
  //     <RouteAuthorization
  //       element={UserEdit}
  //       permission={permissions.EDIT_USER}
  //     />
  //   ),
  // },
];

export default roleRoutes;
