import PageContainer from '@/components/layout/PageContainer';
import PageHeader from '@/components/layout/PageHeader';
import { useGetPermission } from '@/services/permissions/usePermissions';
import { useParams } from 'react-router-dom';
import PermissionViewTable from './PermissionViewTable';

const PermissionView = () => {
  const { id } = useParams();
  const { data } = useGetPermission(id);

  return (
    <PageContainer className='flex flex-col gap-3'>
      <PageHeader title='Permission' backButton={true}></PageHeader>
      <PermissionViewTable data={data} />
    </PageContainer>
  );
};
export default PermissionView;
