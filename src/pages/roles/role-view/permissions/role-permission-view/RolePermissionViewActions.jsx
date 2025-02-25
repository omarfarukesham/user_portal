import EditIcon from '@/assets/icons/EditIcon';
import Dropdown from '@/components/form/Dropdown';
import Button from '@/components/ui/Button';
import formatRolePermissionViewActions from '@/utilities/formatRolePermissionViewActions';
import { DataTable } from '@alphaui/core';
import { useMemo, useState } from 'react';
import RolePermissionAddExtraActions from './RolePermissionAddExtraActions';

const RolePermissionViewActions = ({ rolePermission }) => {
  const { portals = [], permissions = [], actions = [] } = rolePermission ?? {};

  const [activePortal, setActivePortal] = useState(null);
  const [activePermission, setActivePermission] = useState(null);

  // intentionally keeping no 'key' property for 'All' items, to treat it as 'no active portal'
  const portalOptions = [{ label: 'All' }].concat(
    portals?.map((portal) => ({
      label: portal.displayName,
      id: portal.id,
    })),
  );

  // if there is an active portal, then the permissions of that portal
  // otherwise all permissions
  const permissionsToShow = !activePortal?.id
    ? permissions
    : permissions.filter(
        (permission) => permission.portalId === activePortal?.id,
      );

  const permissionOptions = [{ label: 'All' }].concat(
    permissionsToShow.map((permission) => ({
      label: permission.displayName,
      id: permission.id,
    })),
  );

  const activeActions = useMemo(
    () =>
      actions.filter((action) => {
        // if there is an active permission, then the actions of that permission
        // otherwise if there is an active portal, then actions of all the permissions of that portal
        // otherwise all permission's actions
        const activePortalsPermissions = permissions.filter(
          (permission) => permission.portalId === activePortal?.id,
        );
        const activePermissions = activePermission?.id
          ? [activePermission]
          : activePortal?.id
          ? activePortalsPermissions
          : permissions;

        const isActionInActivePermissions = !!activePermissions.find(
          (permission) => permission.id === action.permissionId,
        );
        return isActionInActivePermissions;
      }),
    [actions, activePermission, activePortal?.id, permissions],
  );

  const formattedActions = useMemo(
    () =>
      formatRolePermissionViewActions({
        portals,
        permissions,
        actions: activeActions,
      }),
    [portals, permissions, activeActions],
  );

  const columns = formattedActions?.length
    ? Object.entries(formattedActions[0]).map(([key]) => ({
        label: key,
        key: key,
      }))
    : [];

  const [isExtraActionModalOpen, setIsExtraActionModalOpen] = useState(false);

  return (
    <section>
      <div className='flex items-center justify-between mb-5'>
        <div className='flex items-center gap-5'>
          <Dropdown
            options={portalOptions}
            title='Select A Portal'
            variant='outlined'
            onChange={(option) => setActivePortal(option)}
          />

          <Dropdown
            options={permissionOptions}
            title='Select A Permission'
            variant='outlined'
            onChange={(option) => setActivePermission(option)}
          />
        </div>

        <Button
          onClick={() => setIsExtraActionModalOpen(true)}
          className='shrink-0'
        >
          <EditIcon /> Add Extra Actions
        </Button>
      </div>
      <div className='h-96 overflow-y-auto'>
        <DataTable columns={columns} data={formattedActions} />
      </div>

      {isExtraActionModalOpen && (
        <RolePermissionAddExtraActions
          isOpen={isExtraActionModalOpen}
          setIsOpen={setIsExtraActionModalOpen}
          rolePermission={rolePermission}
        />
      )}
    </section>
  );
};

export default RolePermissionViewActions;
