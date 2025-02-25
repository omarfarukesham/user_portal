class AppUserRoles {
  constructor(data) {
    this.serial = data.serial;
    this.id = data.id;
    this.name = data.name;
    this.displayName = data.displayName;
    this.permissionIds = data.permissionIds;
    this.status = data.status;
    this.createdBy = data.createdBy;
    this.createdAt = data.createdAt;
  }
}

export default AppUserRoles;
