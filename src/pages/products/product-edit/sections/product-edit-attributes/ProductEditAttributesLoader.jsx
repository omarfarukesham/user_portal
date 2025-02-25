import PageError from '@/components/layout/PageError';
import LoadingSpinner from '@/components/ui/LoadingSpinner';
import { useGetAttributeSetDetails } from '@/services/product/attributeSetService';
import ProductEditAttributesTabs from './ProductEditAttributesTabs';

const ProductEditAttributesLoader = ({ attributeSetId }) => {
  const { data, error, isFetching } = useGetAttributeSetDetails(attributeSetId);

  if (isFetching) return <LoadingSpinner text='Fetching Data' />;

  if (!isFetching && error) return <PageError message={error.message} />;

  return <ProductEditAttributesTabs attributes={data.attributes} />;
};

export default ProductEditAttributesLoader;
