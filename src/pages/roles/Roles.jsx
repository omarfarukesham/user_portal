import PlusIcon from '@/assets/icons/PlusIcon';
import PageContainer from '@/components/layout/PageContainer';
import PageHeader from '@/components/layout/PageHeader';
import Button from '@/components/ui/Button';
import { useState } from 'react';
import RolesBody from './RolesBody';
import RoleAddFormModal from './role-add/RoleAddFormModal';

const Roles = () => {
  const [isUserModal, setIsUserModal] = useState(false);

  return (
    <PageContainer className='flex flex-col gap-3'>
      <PageHeader title='Roles' backButton={false}>
        <Button onClick={() => setIsUserModal(true)}>
          <PlusIcon /> Add Role
        </Button>
        {isUserModal && (
          <RoleAddFormModal isOpen={isUserModal} setIsOpen={setIsUserModal} />
        )}
      </PageHeader>
      <RolesBody />
    </PageContainer>
  );
};

export default Roles;
