import SaveIcon from '@/assets/icons/SaveIcon';
import Modal from '@/components/modal/Modal';
import Button from '@/components/ui/Button';
import DataTableWithCheckbox from '@/components/ui/DataTableWithCheckbox';
import LoadingSpinner from '@/components/ui/LoadingSpinner';
import { useGetPortals } from '@/services/portals/usePortals';
import {
  useCreateRolePermission,
  useUpdateRolePermission,
} from '@/services/role-permission/useRolePermission';
import { useState } from 'react';
import { useParams } from 'react-router-dom';
import { toast } from 'react-toastify';

const RolePermissionManagePortal = ({ isOpen, setIsOpen, rolePermission }) => {
  const { data: { items: portals } = {} } = useGetPortals({ status: 'ACTIVE' });

  const [selectedPortals, setSelectedPortals] = useState(
    rolePermission?.portals ?? [],
  );
  const { id: roleId } = useParams();

  const { mutate: createRolePermission, isLoading: isCreateLoading } =
    useCreateRolePermission();
  const { mutate: updateRolePermission, isLoading: isUpdateLoading } =
    useUpdateRolePermission();
  const isLoading = isCreateLoading || isUpdateLoading;

  const handleSavePortals = () => {
    const apiData = {
      roleId,
      portalIds: selectedPortals.map((portal) => portal.id),
    };

    const isItCreateInsteadOfUpdate = !rolePermission;

    if (isItCreateInsteadOfUpdate) {
      createRolePermission(apiData, {
        onSuccess: () => {
          toast.success('Successfully created');
        },
      });
    } else {
      apiData.id = rolePermission.id;
      updateRolePermission(apiData, {
        onSuccess: () => {
          toast.success('Successfully updated');
        },
      });
    }
  };

  const portalColumns = [
    { label: 'Portal Name', key: 'displayName' },
    { label: 'ID', key: 'id' },
    { label: 'Path', key: 'path' },
  ];

  return (
    <Modal
      isOpen={isOpen}
      setIsOpen={setIsOpen}
      className='p-10 flex flex-col gap-5 max-h-[80vh]'
    >
      <h2 className='text-lg border-b border-gray-4 pb-2'>Manage Portals</h2>

      <div className='overflow-auto flex'>
        <DataTableWithCheckbox
          columns={portalColumns}
          data={portals}
          selectedItems={selectedPortals}
          setSelectedItems={setSelectedPortals}
          toggleOnItemClick
        />
      </div>

      <Button
        className='ml-auto'
        onClick={handleSavePortals}
        disabled={isLoading}
      >
        {isLoading ? (
          <LoadingSpinner />
        ) : (
          <>
            <SaveIcon className='w-5 h-5' /> Save ({selectedPortals.length}{' '}
            portals)
          </>
        )}
      </Button>
    </Modal>
  );
};

export default RolePermissionManagePortal;
