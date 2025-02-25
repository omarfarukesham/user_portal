import ProductSelectionModal from '@/components/modal/ProductSelectionModal/ProductSelectionModal';
import Button from '@/components/ui/Button';
import LoadingSpinner from '@/components/ui/LoadingSpinner';
import { useUpdateProductVariant } from '@/services/product/productVariantService';
import { useState } from 'react';
import { toast } from 'react-toastify';

const ProductEditVariantUpdate = ({ productId, productVariants = [] }) => {
  const [isOpen, setIsOpen] = useState(false);
  const productIds = productVariants.map((e) => e.productId);

  const { mutate, isLoading } = useUpdateProductVariant();
  const handleProductVariantUpdate = (productIds) => {
    mutate(
      { productId, productIds },
      {
        onSuccess: () => {
          toast.success('Successfully updated');
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
          Update Variant
        </Button>
      )}

      {isOpen && (
        <ProductSelectionModal
          isOpen={isOpen}
          setIsOpen={setIsOpen}
          onSave={handleProductVariantUpdate}
          selectedProductIds={productIds}
        />
      )}
    </div>
  );
};

export default ProductEditVariantUpdate;
