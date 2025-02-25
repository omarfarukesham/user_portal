import PageContainer from '@/components/layout/PageContainer';
import PageHeader from '@/components/layout/PageHeader';
import Button from '@/components/ui/Button';
import { useState } from 'react';
import UsersBody from './UsersBody';
import UserAddForm from './user-add/UserAddForm';

const Users = () => {
  const [isUserModal, setIsUserModal] = useState(false);

  return (
    <PageContainer className='flex flex-col gap-3'>
      <PageHeader title='Users'>
        <Button onClick={() => setIsUserModal(true)}>Add User</Button>
        {isUserModal && (
          <UserAddForm isOpen={isUserModal} setIsOpen={setIsUserModal} />
        )}
      </PageHeader>

      <UsersBody />
    </PageContainer>
  );
};

export default Users;
