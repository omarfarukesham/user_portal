import Button from '@/components/ui/Button';
import LoadingSpinner from '@/components/ui/LoadingSpinner';
import { useDataContext } from '@/context/dataContext';
import { useGetRelevantProducts } from '@/services/product/relevantProductService';
import { useState } from 'react';
import ProductViewRelatedProductsModal from './ProductViewRelatedProductsModal';

const ProductViewRelatedProductsSection = ({ title, description, type }) => {
  const [isOpen, setIsOpen] = useState(false);

  const {
    data: { product },
  } = useDataContext();
  const filters = { productId: product?.id, type };

  const { data, isFetching } = useGetRelevantProducts(filters);
  const relevantProduct = data?.items[0] || { relevantProductIds: [] };

  return (
    <div className='grid gap-3 border-b border-gray-4 py-10'>
      <div className='flex'>
        <h6 className='mb-3 flex-1'>{title}</h6>

        {isFetching && <LoadingSpinner />}

        {!isFetching && (
          <div className='flex gap-3 items-center'>
            <div>Products: {relevantProduct?.relevantProductIds.length}</div>

            {!!relevantProduct?.relevantProductIds.length && (
              <Button
                variant='outlined'
                onClick={() => setIsOpen(true)}
                size='small'
                className='hover:bg-primary hover:text-white'
              >
                View
              </Button>
            )}
          </div>
        )}
      </div>
      <p>{description}</p>

      {isOpen && (
        <ProductViewRelatedProductsModal
          title={title}
          isOpen={isOpen}
          setIsOpen={setIsOpen}
          relevantProductId={relevantProduct.id}
        />
      )}
    </div>
  );
};

export default ProductViewRelatedProductsSection;
