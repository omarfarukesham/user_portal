import PageError from '@/components/layout/PageError';
import LoadingSpinner from '@/components/ui/LoadingSpinner';
import DataProvider from '@/context/dataContext';
import { useGetMarkets } from '@/services/market/marketService';
import { useGetProduct } from '@/services/product/productService';
import { useParams } from 'react-router-dom';
import ProductEditBodyLayout from './ProductEditBodyLayout';

const ProductEditBody = () => {
  const { id } = useParams();
  const { data: product, error, isFetching } = useGetProduct(id);
  const { data: markets, isFetching: marketIsFetching } = useGetMarkets();
  const loading = isFetching || marketIsFetching;

  const dataContextValue = {
    product: product,
    markets: markets?.items,
    getSelectedLanguageCodes: getSelectedLanguageCodes,
  };

  function getSelectedLanguageCodes() {
    const marketCodes = Object.keys(
      dataContextValue.product?.publishStatuses || {},
    );
    const languageCodesOfMarkets = dataContextValue.markets
      .filter((market) => marketCodes.includes(market.marketCode))
      .map((market) => market.languageCode);

    return Array.from(new Set([...languageCodesOfMarkets]));
  }

  return (
    <>
      {loading && <LoadingSpinner text='Loading Product' className='flex' />}
      {!loading && product && !error && (
        <DataProvider initialData={dataContextValue}>
          <ProductEditBodyLayout />
        </DataProvider>
      )}
      {!loading && error && <PageError message={error.message} />}
    </>
  );
};

export default ProductEditBody;
