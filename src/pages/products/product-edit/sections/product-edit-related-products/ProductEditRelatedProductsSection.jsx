import LoadingSpinner from '@/components/ui/LoadingSpinner';
import { useDataContext } from '@/context/dataContext';
import { useGetRelevantProducts } from '@/services/product/relevantProductService';
import ProductEditRelatedProductsUpdate from './ProductEditRelatedProductsUpdate';

const ProductEditRelatedProductsSection = ({ title, description, type }) => {
  const {
    data: { product },
  } = useDataContext();
  const filters = { productId: product?.id, type };

  const { data, isFetching } = useGetRelevantProducts(filters);
  const relevantProduct = data?.items[0] || {
    productId: product?.id,
    relevantProductIds: [],
    type,
  };

  return (
    <div className='grid gap-3 border-b border-gray-4 py-10'>
      <div className='flex'>
        <h6 className='mb-3 flex-1'>{title}</h6>

        {isFetching && <LoadingSpinner />}

        {!isFetching && (
          <div className='flex gap-3 items-center'>
            <div>Products: {relevantProduct?.relevantProductIds.length}</div>
            <ProductEditRelatedProductsUpdate
              relevantProduct={relevantProduct}
            />
          </div>
        )}
      </div>
      <p>{description}</p>
    </div>
  );
};

export default ProductEditRelatedProductsSection;
