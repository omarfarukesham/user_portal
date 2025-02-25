import EditIcon from '@/assets/icons/EditIcon';
import EyeIcon from '@/assets/icons/EyeIcon';
import Button from '@/components/ui/Button';
import { useGetAction } from '@/services/actions/useAction';
import { useState } from 'react';
import ActionEditFormModal from './action-edit/ActionEditFormModal';
import ActionViewModal from './action-view/ActionViewModal';
// import ActionEditFormModal from './action-edit/ActionEditFormModal';
// import ActionViewModal from './action-view/ActionViewModal';

const ActionsTableBtn = ({ data }) => {
  const [isEditModal, setIsEditModal] = useState(false);
  const [viewModal, setViewModal] = useState(false);
  const { data: actionData } = useGetAction(data.id);
  return (
    <div className='flex justify-center gap-1'>
      <Button
        variant='table-action'
        size='small'
        onClick={() => setViewModal(true)}
      >
        <EyeIcon className='fill-gray-8' />
      </Button>
      <Button
        variant='table-action'
        size='small'
        onClick={() => setIsEditModal(true)}
      >
        <EditIcon className='fill-gray-8' />
      </Button>
      {isEditModal && (
        <ActionEditFormModal
          isOpen={isEditModal}
          setIsOpen={setIsEditModal}
          actionData={actionData}
        />
      )}
      {viewModal && (
        <ActionViewModal
          isOpen={viewModal}
          setIsOpen={setViewModal}
          actionData={actionData}
        />
      )}
    </div>
  );
};

export default ActionsTableBtn;
