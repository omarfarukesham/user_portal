class AppRolePermissions {
  constructor(data) {
    this.serial = data.serial;
    this.id = data.id;
    this.status = data.status;

    this.role = new Role(data.role);
    this.portals = data.portals?.map((portal) => new Portal(portal));
    this.permissions = data.permissions?.map((prmsn) => new Permission(prmsn));
    this.actions = data?.actions?.map((actionData) => new Action(actionData));

    this.createdAt = new Date(data.createdAt);
    this.createdBy = data.createdBy;
    this.updatedAt = new Date(data.updatedAt);
    this.updatedBy = data.updatedBy;
  }
}

class Role {
  constructor(data) {
    this.id = data.id;
    this.name = data.name;
    this.displayName = data.displayName;
  }
}

class Portal {
  constructor(data) {
    this.id = data.id;
    this.name = data.name;
    this.displayName = data.displayName;
    this.icon = data.icon;
    this.path = data.path;
    this.position = data.position;
    this.visibilities = data.visibilities;
  }
}

class Permission {
  constructor(data) {
    this.id = data.id;
    this.portalId = data.portalId;
    this.name = data.name;
    this.displayName = data.displayName;
    this.icon = data.icon;
    this.path = data.path;
    this.position = data.position;
    this.visibilities = data.visibilities;
  }
}

class Action {
  constructor(data) {
    this.id = data.id;
    this.permissionId = data.permissionId;
    this.name = data.name;
    this.displayName = data.displayName;
    this.api = data.api;
    this.methods = data.methods;
  }
}

export default AppRolePermissions;
