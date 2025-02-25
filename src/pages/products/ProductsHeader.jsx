import PlusIcon from '@/assets/icons/PlusIcon';
import PageHeader from '@/components/layout/PageHeader';
import Button from '@/components/ui/Button';
import { useNavigate } from 'react-router-dom';

const ProductsHeader = () => {
  const navigate = useNavigate();

  return (
    <PageHeader title='Products' backButton={false}>
      <Button onClick={() => navigate('/admin/products/add')}>
        <PlusIcon className='w-5 h-5 ml-[-5px]' />
        Add New
      </Button>
    </PageHeader>
  );
};

export default ProductsHeader;
