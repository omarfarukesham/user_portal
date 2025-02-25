import PageContainer from '@/components/layout/PageContainer';
import PageError from '@/components/layout/PageError';
import PageHeader from '@/components/layout/PageHeader';
import LoadingSpinner from '@/components/ui/LoadingSpinner';
import { useGetPortal } from '@/services/portals/usePortals';
import { useParams } from 'react-router-dom';
import PortalEditForm from './PortalEditForm';

const PortalEdit = () => {
  const { id } = useParams();
  const { data, isLoading, error } = useGetPortal(id);

  return (
    <PageContainer className='flex flex-col gap-3'>
      <PageHeader
        title={`Edit Portal ${data?.displayName ?? ''}`}
        backButton={true}
      ></PageHeader>
      {isLoading && <LoadingSpinner text='Loading portal...' />}
      {!isLoading && data && <PortalEditForm defaultData={data} />}
      {!isLoading && error && <PageError message={error.message} />}
    </PageContainer>
  );
};

export default PortalEdit;
