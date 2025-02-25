import PageError from '@/components/layout/PageError';
import LoadingSpinner from '@/components/ui/LoadingSpinner';
import DataProvider from '@/context/dataContext';
import { useGetMarkets } from '@/services/market/marketService';
import { useGetProduct } from '@/services/product/productService';
import { useParams } from 'react-router-dom';
import ProductViewBodyLayout from './ProductViewBodyLayout';

const ProductViewBody = () => {
  const { id } = useParams();
  const { data: product, error, isFetching } = useGetProduct(id);
  const { data: markets, isFetching: marketsIsFetching } = useGetMarkets();
  const loading = isFetching || marketsIsFetching;

  const dataContextValue = {
    product: product,
    markets: markets?.items,
  };

  return (
    <>
      {loading && <LoadingSpinner text='Loading Product' className='flex' />}
      {!loading && product && !error && (
        <DataProvider initialData={dataContextValue}>
          <ProductViewBodyLayout />
        </DataProvider>
      )}
      {!loading && error && <PageError message={error.message} />}
    </>
  );
};

export default ProductViewBody;
