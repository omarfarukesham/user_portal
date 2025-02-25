import EditIcon from '@/assets/icons/EditIcon';
import EyeIcon from '@/assets/icons/EyeIcon';
import Button from '@/components/ui/Button';
import { useNavigate } from 'react-router-dom';
// import RoleEditModal from './role-edit/RoleEditModal';

const PermissionsActionBtn = ({ data }) => {
  const navigate = useNavigate();
  return (
    <div className='flex justify-center gap-1'>
      <Button
        variant='table-action'
        size='small'
        onClick={() => navigate(`/admin/permissions/${data?.id}`)}
      >
        <EyeIcon className='fill-gray-8' />
      </Button>

      <Button
        variant='table-action'
        size='small'
        onClick={() => navigate(`/admin/permissions/${data.id}/edit`)}
      >
        <EditIcon className='fill-gray-8' />
      </Button>
    </div>
  );
};

export default PermissionsActionBtn;
