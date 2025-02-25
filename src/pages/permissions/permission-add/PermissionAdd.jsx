import PageContainer from '@/components/layout/PageContainer';
import PageHeader from '@/components/layout/PageHeader';
import PermissionAddForm from './PermissionAddForm';

const PermissionAdd = () => {
  return (
    <PageContainer className='flex flex-col gap-3'>
      <PageHeader title='Add A Permission' backButton={true}></PageHeader>
      <PermissionAddForm />
    </PageContainer>
  );
};

export default PermissionAdd;
