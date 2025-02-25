import PageContainer from '@/components/layout/PageContainer';
import PageError from '@/components/layout/PageError';
import PageHeader from '@/components/layout/PageHeader';
import LoadingSpinner from '@/components/ui/LoadingSpinner';
import { useGetRole } from '@/services/roles/useRole';
import { useParams } from 'react-router-dom';
import RoleViewBody from './RoleViewBody';

const RoleView = () => {
  const { id } = useParams();

  const { data: role, error, isLoading } = useGetRole(id);

  if (isLoading) return <LoadingSpinner text='Loading Role...' />;

  if (error) return <PageError message={error.message} />;

  return (
    <PageContainer className='flex flex-col gap-3'>
      <PageHeader
        title={`Role ${role.displayName.toUpperCase()}`}
        backButton={false}
      />
      <RoleViewBody role={role} />
    </PageContainer>
  );
};

export default RoleView;
