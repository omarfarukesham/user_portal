import PageContainer from '@/components/layout/PageContainer';
import PageHeader from '@/components/layout/PageHeader';
import { useGetPortal } from '@/services/portals/usePortals';
import { useParams } from 'react-router-dom';
import PortalViewTable from './PortalViewTable';

const PortalView = () => {
  const { id } = useParams();
  const { data } = useGetPortal(id);

  return (
    <PageContainer className='flex flex-col gap-3'>
      <PageHeader title='Portal' backButton={true}></PageHeader>
      <PortalViewTable data={data} />
    </PageContainer>
  );
};

export default PortalView;
