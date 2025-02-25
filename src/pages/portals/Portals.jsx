import PlusIcon from '@/assets/icons/PlusIcon';
import PageContainer from '@/components/layout/PageContainer';
import PageHeader from '@/components/layout/PageHeader';
import Button from '@/components/ui/Button';
import { useNavigate } from 'react-router-dom';
import PortalsBody from './PortalsBody';

const Portals = () => {
  const navigate = useNavigate();
  return (
    <PageContainer className='flex flex-col gap-3'>
      <PageHeader title='Portals' backButton={false}>
        <Button onClick={() => navigate('/admin/portals/add')}>
          <PlusIcon /> Add Portal
        </Button>
      </PageHeader>
      <PortalsBody />
    </PageContainer>
  );
};

export default Portals;
