/* eslint-disable react-refresh/only-export-components */
import RouteAuthorization from '@/components/layout/RouteAuthorization';
import permissions from '@/configuration/permissions';
import UserEdit from '@/pages/users/user-edit/UserEdit';
import UserView from '@/pages/users/user-view/UserView';
import { lazy } from 'react';

const Users = lazy(() => import('@/pages/users/Users'));

// These are the children routes of the main layout
const userRoutes = [
  {
    path: 'users',
    element: (
      <RouteAuthorization element={Users} permission={permissions.VIEW_USER} />
    ),
  },
  {
    path: 'users/:id',
    element: (
      <RouteAuthorization
        element={UserView}
        permission={permissions.VIEW_USER}
      />
    ),
  },
  {
    path: 'users/:id/edit',
    element: (
      <RouteAuthorization
        element={UserEdit}
        permission={permissions.EDIT_USER}
      />
    ),
  },
];

export default userRoutes;
