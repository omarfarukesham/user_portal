import PageContainer from '@/components/layout/PageContainer';
import PageError from '@/components/layout/PageError';
import PageHeader from '@/components/layout/PageHeader';
import LoadingSpinner from '@/components/ui/LoadingSpinner';
import DataProvider from '@/context/dataContext';
import { useGetMarkets } from '@/services/market/marketService';
import ProductAddMain from './ProductAddMain';
import ProductAddSidebar from './ProductAddSidebar';

const ProductAdd = () => {
  const { data: markets, error, isFetching } = useGetMarkets();
  const loading = isFetching;
  const dataContextValue = {
    markets: markets?.items || [],
  };

  //useScrollToSectionOnLoad();
  return (
    <PageContainer className='flex flex-col gap-3'>
      <PageHeader title='Add Product' />
      {loading && <LoadingSpinner text='Loading Markets' className='flex' />}
      {!loading && markets && !error && (
        <div className='flex-1 w-full flex gap-5 overflow-hidden'>
          <DataProvider initialData={dataContextValue}>
            <ProductAddSidebar />
            <ProductAddMain />
          </DataProvider>
        </div>
      )}
      {!loading && error && <PageError message={error.message} />}
    </PageContainer>
  );
};

export default ProductAdd;
