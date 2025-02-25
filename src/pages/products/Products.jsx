import PageContainer from '@/components/layout/PageContainer';
import ProductsBody from './ProductsBody';
import ProductsHeader from './ProductsHeader';

const Products = () => {
  return (
    <PageContainer className='flex flex-col gap-3'>
      <ProductsHeader />
      <ProductsBody />
    </PageContainer>
  );
};

export default Products;
