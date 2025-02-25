import EditIcon from '@/assets/icons/EditIcon';
import EyeIcon from '@/assets/icons/EyeIcon';
import Button from '@/components/ui/Button';
import { useGetRole } from '@/services/roles/useRole';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import RoleEditModal from './role-edit/RoleEditModal';

const RolesActionBtn = ({ data }) => {
  const [editModal, setEditModal] = useState(false);
  // const [viewModal, setViewModal] = useState(false);
  const { data: defaultData } = useGetRole(data.id);

  const navigate = useNavigate();

  return (
    <div className='flex justify-center gap-1'>
      <Button
        variant='table-action'
        size='small'
        onClick={() => navigate(`/admin/roles/${data.id}`)}
      >
        <EyeIcon className='fill-gray-8' />
      </Button>
      <Button
        variant='table-action'
        size='small'
        onClick={() => setEditModal(true)}
      >
        <EditIcon className='fill-gray-8' />
      </Button>

      {editModal && (
        <RoleEditModal
          isOpen={editModal}
          setIsOpen={setEditModal}
          defaultData={defaultData}
        />
      )}
      {/* {viewModal && (
        <RoleViewModal
          isOpen={viewModal}
          setIsOpen={setViewModal}
          defaultData={defaultData}
        />
      )} */}
    </div>
  );
};

export default RolesActionBtn;
