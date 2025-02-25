import SaveIcon from '@/assets/icons/SaveIcon';
import Dropdown from '@/components/form/Dropdown';
import Modal from '@/components/modal/Modal';
import Button from '@/components/ui/Button';
import LoadingSpinner from '@/components/ui/LoadingSpinner';
import { useUpdateRolePermission } from '@/services/role-permission/useRolePermission';
import { useState } from 'react';
import { useParams } from 'react-router-dom';
import { toast } from 'react-toastify';
import RoleViewManageActionsTable from './RoleViewManageActionsTable';
const RolePermissionManageAction = ({ isOpen, setIsOpen, rolePermission }) => {
  const [activePortal, setActivePortal] = useState(null);
  const [activePermission, setActivePermission] = useState(null);

  // actions
  const [selectedActions, setSelectedActions] = useState(
    rolePermission?.actions ?? [],
  );

  const { id: roleId } = useParams();

  const { mutate: updateRolePermission, isLoading } = useUpdateRolePermission();

  const handleSaveActions = () => {
    const apiData = {
      roleId,
      id: rolePermission.id,
      actionIds: selectedActions?.map((action) => action.id) ?? [],
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

  const permissionOptions =
    rolePermission?.permissions
      ?.filter((permission) => permission.portalId === activePortal?.id)
      .map((permission) => ({
        label: permission.displayName,
        id: permission.id,
      })) ?? [];

  if (!rolePermission?.portals) return <p>Add some portal first!</p>;

  return (
    <Modal
      isOpen={isOpen}
      setIsOpen={setIsOpen}
      className='p-10 flex flex-col gap-5  max-h-[80vh]'
    >
      <h2 className='text-lg border-b border-gray-4 pb-2'>Manage Actions</h2>

      <section className='flex items-center gap-5'>
        <Dropdown
          options={portalOptions}
          title='Select A Portal'
          variant='outlined'
          onChange={(option) => setActivePortal(option)}
        />

        {activePortal && (
          <Dropdown
            options={permissionOptions}
            title='Select A Permission'
            variant='outlined'
            onChange={(option) => setActivePermission(option)}
          />
        )}
      </section>

      <div className='flex overflow-hidden'>
        <RoleViewManageActionsTable
          selectedPermission={activePermission}
          selectedActions={selectedActions}
          setSelectedActions={setSelectedActions}
        />
      </div>

      <Button
        className='w-fit ml-auto mt-auto'
        onClick={handleSaveActions}
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

export default RolePermissionManageAction;
