class AppPortals {
  constructor(data) {
    this.serial = data.serial;
    this.status = data.status;
    this.createdAt = new Date(data.createdAt);
    this.createdBy = data.createdBy;
    this.updatedAt = new Date(data.updatedAt);
    this.updatedBy = data.updatedBy;
    this.id = data.id;
    this.name = data.name;
    this.icon = data.icon;
    this.displayName = data.displayName;
    this.path = data.path;
    this.position = data.position;
    this.visibilities = data.visibilities;
  }
}
export default AppPortals;
