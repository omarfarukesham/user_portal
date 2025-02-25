import ProductSelectionModal from '@/components/modal/ProductSelectionModal/ProductSelectionModal';
import Button from '@/components/ui/Button';
import LoadingSpinner from '@/components/ui/LoadingSpinner';
import {
  useAddRelevantProduct,
  useEditRelevantProduct,
} from '@/services/product/relevantProductService';
import { useState } from 'react';

const ProductEditRelatedProductsUpdate = ({ relevantProduct }) => {
  const [isOpen, setIsOpen] = useState(false);
  const { mutate: addRelevantProduct, isLoading: addLoading } =
    useAddRelevantProduct();
  const { mutate: editRelevantProduct, isLoading: editLoading } =
    useEditRelevantProduct();

  const isLoading = addLoading || editLoading;

  const handleRelevantProductUpdate = (productIds) => {
    const data = {
      ...relevantProduct,
      relevantProductIds: productIds,
    };

    if (relevantProduct?.id) {
      editRelevantProduct(data);
    } else {
      addRelevantProduct(data);
    }
  };

  return (
    <div>
      {isLoading && <LoadingSpinner />}
      {!isLoading && (
        <Button
          variant='outlined'
          onClick={() => setIsOpen(true)}
          size='small'
          className='hover:bg-primary hover:text-white'
        >
          Update
        </Button>
      )}

      {isOpen && (
        <ProductSelectionModal
          isOpen={isOpen}
          setIsOpen={setIsOpen}
          onSave={handleRelevantProductUpdate}
          selectedProductIds={relevantProduct.relevantProductIds}
        />
      )}
    </div>
  );
};

export default ProductEditRelatedProductsUpdate;
