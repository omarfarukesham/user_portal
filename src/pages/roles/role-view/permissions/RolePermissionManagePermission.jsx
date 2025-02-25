import SaveIcon from '@/assets/icons/SaveIcon';
import Dropdown from '@/components/form/Dropdown';
import Modal from '@/components/modal/Modal';
import Button from '@/components/ui/Button';
import DataTableWithCheckbox from '@/components/ui/DataTableWithCheckbox';
import LoadingSpinner from '@/components/ui/LoadingSpinner';
import { useGetPermissions } from '@/services/permissions/usePermissions';
import { useUpdateRolePermission } from '@/services/role-permission/useRolePermission';
import { useState } from 'react';
import { useParams } from 'react-router-dom';
import { toast } from 'react-toastify';

const RolePermissionManagePermission = ({
  isOpen,
  setIsOpen,
  rolePermission,
}) => {
  const [activePortal, setActivePortal] = useState(null);

  // actions
  const [selectedPermissions, setSelectedPermissions] = useState(
    rolePermission?.permissions ?? [],
  );

  const { data: { items: permissions } = {} } = useGetPermissions(
    {
      portalId: activePortal?.id,
    },
    { enabled: !!activePortal?.id },
  );

  const { mutate: updateRolePermission, isLoading } = useUpdateRolePermission();

  const { id: roleId } = useParams();

  const handleSavePermissions = () => {
    const apiData = {
      roleId,
      id: rolePermission.id,
      permissionIds: selectedPermissions.map((permission) => permission.id),
    };

    updateRolePermission(apiData, {
      onSuccess: () => {
        toast.success('Successfully updated');
      },
    });
  };

  const portalOptions =
    rolePermission?.portals?.map((portal) => ({
      label: portal.displayName,
      id: portal.id,
    })) ?? [];

  const permissionTableColumns = [
    { label: 'ID', key: 'id' },
    { label: 'Name', key: 'displayName' },
  ];

  if (!rolePermission?.portals?.length) return <p>Add some portal first!</p>;

  return (
    <Modal
      isOpen={isOpen}
      setIsOpen={setIsOpen}
      className='p-10 flex flex-col gap-5 max-h-[80vh]'
    >
      <h2 className='text-lg border-b border-gray-4 pb-2'>
        Manage Permissions
      </h2>

      <section className='flex items-center gap-5'>
        <Dropdown
          options={portalOptions}
          title='Select A Portal'
          variant='outlined'
          onChange={(option) => setActivePortal(option)}
        />
      </section>

      {permissions ? (
        <div className='overflow-auto flex'>
          <DataTableWithCheckbox
            columns={permissionTableColumns}
            data={permissions}
            selectedItems={selectedPermissions}
            setSelectedItems={setSelectedPermissions}
            toggleOnItemClick
            // onSelect={onActionSelect}
            // onRemove={onActionRemove}
          />
        </div>
      ) : (
        <p>Select a portal to see its permissions</p>
      )}

      <Button
        className='w-fit ml-auto mt-auto'
        onClick={handleSavePermissions}
        disabled={isLoading}
      >
        {isLoading ? (
          <LoadingSpinner />
        ) : (
          <>
            <SaveIcon className='h-5 w-5' /> Save
          </>
        )}
      </Button>
    </Modal>
  );
};

export default RolePermissionManagePermission;
