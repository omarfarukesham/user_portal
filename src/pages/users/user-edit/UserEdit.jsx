import PageContainer from '@/components/layout/PageContainer';
import PageHeader from '@/components/layout/PageHeader';
import UserEditForm from './UserEditForm';

const UserEdit = () => {
  return (
    <PageContainer className='flex flex-col gap-3'>
      <PageHeader title='User Edit' />
      <UserEditForm />
    </PageContainer>
  );
};

export default UserEdit;
