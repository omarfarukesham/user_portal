import PlusIcon from '@/assets/icons/PlusIcon';
import PageContainer from '@/components/layout/PageContainer';
import PageHeader from '@/components/layout/PageHeader';
import Button from '@/components/ui/Button';
import { useState } from 'react';
import ActionsBody from './ActionsBody';
import ActionAddFormModal from './action-add/ActionAddFormModal';
// import RolesBody from './RolesBody';
// import RoleAddFormModal from './role-add/RoleAddFormModal';

const Actions = () => {
  const [isUserModal, setIsUserModal] = useState(false);

  return (
    <PageContainer className='flex flex-col gap-3'>
      <PageHeader title='Actions' backButton={false}>
        <Button onClick={() => setIsUserModal(true)}>
          <PlusIcon /> Add Action
        </Button>
        {isUserModal && (
          <ActionAddFormModal isOpen={isUserModal} setIsOpen={setIsUserModal} />
        )}
      </PageHeader>

      <ActionsBody />
    </PageContainer>
  );
};

export default Actions;
