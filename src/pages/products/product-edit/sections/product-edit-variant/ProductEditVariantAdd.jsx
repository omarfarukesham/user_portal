import ProductSelectionModal from '@/components/modal/ProductSelectionModal/ProductSelectionModal';
import Button from '@/components/ui/Button';
import LoadingSpinner from '@/components/ui/LoadingSpinner';
import { useAddProductVariant } from '@/services/product/productVariantService';
import { useState } from 'react';
import { toast } from 'react-toastify';

const ProductEditVariantAdd = ({ productId }) => {
  const [isOpen, setIsOpen] = useState(false);
  const { mutate: addProductVariant, isLoading } = useAddProductVariant();
  const handleProductVariantAdd = (productIds) => {
    addProductVariant(
      { productId, productIds },
      {
        onSuccess: () => {
          toast.success('Successfully added');
        },
        onError: (error) => {
          toast.error(error.message);
        },
      },
    );
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
          Add Variant
        </Button>
      )}

      {isOpen && (
        <ProductSelectionModal
          isOpen={isOpen}
          setIsOpen={setIsOpen}
          onSave={handleProductVariantAdd}
          selectedProductIds={[]}
        />
      )}
    </div>
  );
};

export default ProductEditVariantAdd;
