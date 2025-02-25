import PlusIcon from '@/assets/icons/PlusIcon';
import PageContainer from '@/components/layout/PageContainer';
import PageHeader from '@/components/layout/PageHeader';
import Button from '@/components/ui/Button';
import { useNavigate } from 'react-router-dom';
import PermissionsBody from './PermissionsBody';

const Permissions = () => {
  const navigation = useNavigate();

  return (
    <PageContainer className='flex flex-col gap-3'>
      {/* permission top header  */}
      <PageHeader title='Permissions' backButton={false}>
        <Button onClick={() => navigation('/admin/permissions/add')}>
          <PlusIcon /> Add Permission
        </Button>
      </PageHeader>

      {/* permission body component  */}
      <PermissionsBody />
    </PageContainer>
  );
};

export default Permissions;
