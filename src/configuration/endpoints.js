export const ENDPOINTS = {
  authenticate: '/authenticate',
  userInfo: '/user-info',
  sendOtp: '/send',
  verifyOtp: '/verify',
  resetPassword: '/users/reset-password',
  checkUser: '/users/check-user',
  registration: '/users/register',

  // User Service endpoints
  roles: '/admin/users',
  addUser: '/admin/users',
  updatePassword: '/admin/users/update-password',
  user: (id) => `/admin/users/${id}`,
  editUser: (id) => `/admin/users/${id}`,
  // userDetails: (id) => `users/${id}/details`,

  //actions service endpoints
  actions: '/actions',
  action: (id) => `/actions/${id}`,
  editAction: (id) => `/actions/${id}`,

  //permissions end points
  permissions: '/permissions',
  permission: (id) => `/permissions/${id}`,
  editPermission: (id) => `/permissions/${id}`,

  //roles end points
  userRoles: '/roles',
  userRole: (id) => `/roles/${id}`,
  editUserRole: (id) => `/roles/${id}`,

  //portals end points
  portals: '/portals',
  portal: (id) => `/portals/${id}`,
  editPortal: (id) => `/portals/${id}`,

  // role permission
  rolePermissions: `/role-permissions`,
  rolePermission: (id) => `/role-permissions/${id}`,
  rolePermissionByRoleId: (roleId) => `/role-permissions/by-role-id/${roleId}`,
};
