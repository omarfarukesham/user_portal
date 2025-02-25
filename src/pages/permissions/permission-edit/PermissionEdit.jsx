import PageContainer from '@/components/layout/PageContainer';
import PageError from '@/components/layout/PageError';
import PageHeader from '@/components/layout/PageHeader';
import LoadingSpinner from '@/components/ui/LoadingSpinner';
import { useGetPermission } from '@/services/permissions/usePermissions';
import { useParams } from 'react-router-dom';
import PermissionEditForm from './PermissionEditForm';

const PermissionEdit = () => {
  const { id } = useParams();
  const { data, isLoading, error } = useGetPermission(id);

  return (
    <PageContainer className='flex flex-col gap-3'>
      <PageHeader
        title={`Edit Permission ${data?.displayName ?? ''}`}
        backButton={true}
      ></PageHeader>
      {isLoading && <LoadingSpinner text='Loading permission...' />}
      {!isLoading && data && <PermissionEditForm defaultData={data} />}
      {!isLoading && error && <PageError message={error.message} />}
    </PageContainer>
  );
};

export default PermissionEdit;
