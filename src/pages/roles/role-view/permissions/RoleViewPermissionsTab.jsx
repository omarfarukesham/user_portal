import EditIcon from '@/assets/icons/EditIcon';
import Button from '@/components/ui/Button';
import { useGetRolePermission } from '@/services/role-permission/useRolePermission';
import { lazy, useState } from 'react';
import RolePermissionManagePermission from './RolePermissionManagePermission';
import RolePermissionManagePortal from './RolePermissionManagePortal';
import RolePermissionView from './role-permission-view/RolePermissionView';
const RolePermissionManageAction = lazy(() =>
  import('./RolePermissionManageAction'),
);

const RoleViewPermissionsTab = ({ role }) => {
  const [isPortalModalOpen, setIsPortalModalOpen] = useState(false);
  const [isPermissionModalOpen, setIsPermissionModalOpen] = useState(false);
  const [isActionModalOpen, setIsActionModalOpen] = useState(false);

  const { data: rolePermission } = useGetRolePermission(role?.id);

  return (
    <div>
      <div className='flex items-center md:justify-end gap-3 mb-5 flex-wrap'>
        <Button onClick={() => setIsPortalModalOpen(true)} className='shrink-0'>
          <EditIcon /> Manage Portal
        </Button>
        <Button
          onClick={() => setIsPermissionModalOpen(true)}
          className='shrink-0'
        >
          <EditIcon /> Manage Permission
        </Button>
        <Button onClick={() => setIsActionModalOpen(true)} className='shrink-0'>
          <EditIcon /> Manage Action
        </Button>
      </div>

      <RolePermissionView rolePermission={rolePermission} />

      {isPortalModalOpen && (
        <RolePermissionManagePortal
          isOpen={isPortalModalOpen}
          setIsOpen={setIsPortalModalOpen}
          rolePermission={rolePermission}
        />
      )}

      {isPermissionModalOpen && (
        <RolePermissionManagePermission
          isOpen={isPermissionModalOpen}
          setIsOpen={setIsPermissionModalOpen}
          rolePermission={rolePermission}
        />
      )}

      {isActionModalOpen && (
        <RolePermissionManageAction
          isOpen={isActionModalOpen}
          setIsOpen={setIsActionModalOpen}
          rolePermission={rolePermission}
          isItCreateInsteadOfUpdate={!rolePermission?.portals?.length}
        />
      )}
    </div>
  );
};

export default RoleViewPermissionsTab;
