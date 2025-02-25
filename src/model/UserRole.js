const permissions = [
  'view_dashboard',
  'view_user',
  'edit_user',
  'view_role',
  'edit_role',
  'view_permission',
  'edit_permission',
  'view_action',
  'edit_action',
  'view_portal',
  'edit_portal',
];

class UserRole {
  constructor(data) {
    this.name = data.name;
    this.appMenu = data.appMenu;
    this.permissions = permissions;
  }
}

export default UserRole;
