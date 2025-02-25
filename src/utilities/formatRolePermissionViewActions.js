const formatRolePermissionViewActions = (data) => {
  if (!data) return;

  // Creating lookup dictionaries
  const portalsLookup = {};
  data.portals.forEach((portal) => {
    portalsLookup[portal.id] = portal;
  });

  const permissionsLookup = {};
  data.permissions.forEach((permission) => {
    permissionsLookup[permission.id] = permission;
  });

  // Building the table array
  const actionsListWithPermissionNPortal = data.actions.map((action) => {
    const permission = permissionsLookup[action.permissionId] || {};
    const portal = portalsLookup[permission.portalId] || {};
    return {
      'Action Name': action.displayName,
      'Action ID': action.id,
      // 'Portal ID': portal.id || '',
      'Portal Name': portal.displayName || '',
      // 'Permission ID': permission.id || '',
      'Permission Name': permission.displayName || '',
      'Action API': action.api,
      'Action Methods': action.methods,
    };
  });

  return actionsListWithPermissionNPortal;
};

export default formatRolePermissionViewActions;
