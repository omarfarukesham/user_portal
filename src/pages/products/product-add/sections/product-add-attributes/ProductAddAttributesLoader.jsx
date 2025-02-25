import PageError from '@/components/layout/PageError';
import LoadingSpinner from '@/components/ui/LoadingSpinner';
import { useGetAttributeSetDetails } from '@/services/product/attributeSetService';
import ProductAddAttributesTabs from './ProductAddAttributesTabs';

const ProductAddAttributesLoader = ({ attributeSetId }) => {
  const { data, error, isFetching } = useGetAttributeSetDetails(attributeSetId);

  if (isFetching) return <LoadingSpinner text='Fetching Data' />;

  if (!isFetching && error) return <PageError message={error.message} />;

  return <ProductAddAttributesTabs attributes={data.attributes} />;
};

export default ProductAddAttributesLoader;
