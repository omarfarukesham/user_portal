import PageContainer from '@/components/layout/PageContainer';
import PageHeader from '@/components/layout/PageHeader';
import ProductViewBody from './ProductViewBody';

const ProductView = () => {
  return (
    <PageContainer className='flex flex-col gap-3 overflow-hidden'>
      <PageHeader title='View Product' />
      <ProductViewBody />
    </PageContainer>
  );
};

export default ProductView;
