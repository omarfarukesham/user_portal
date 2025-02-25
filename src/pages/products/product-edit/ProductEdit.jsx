import PageContainer from '@/components/layout/PageContainer';
import PageHeader from '@/components/layout/PageHeader';
import ProductEditBody from './ProductEditBody';

const ProductEdit = () => {
  return (
    <PageContainer className='flex flex-col gap-3 overflow-hidden'>
      <PageHeader title='Edit Product' />
      <ProductEditBody />
    </PageContainer>
  );
};

export default ProductEdit;
