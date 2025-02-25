import PageContainer from '@/components/layout/PageContainer';
import PageHeader from '@/components/layout/PageHeader';
import PortalAddForm from './PortalAddForm';
// import PermissionAddForm from './PermissionAddForm';

const PortalAdd = () => {
  return (
    <PageContainer className='flex flex-col gap-3'>
      <PageHeader title='Portals' backButton={true}></PageHeader>
      <PortalAddForm />
    </PageContainer>
  );
};

export default PortalAdd;
