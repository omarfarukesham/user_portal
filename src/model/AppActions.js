class AppActions {
  constructor(data) {
    this.serial = data.serial;
    this.status = data.status;
    this.createdAt = new Date(data.createdAt);
    this.createdBy = data.createdBy;
    this.updatedAt = new Date(data.updatedAt);
    this.updatedBy = data.updatedBy;
    this.id = data.id;
    this.name = data.name;
    this.displayName = data.displayName;
    this.api = data.api;
    this.methods = data.methods;
    this.permissionId = data.permissionId;
    this.permissionName = data.permissionName;
  }
}

export default AppActions;
