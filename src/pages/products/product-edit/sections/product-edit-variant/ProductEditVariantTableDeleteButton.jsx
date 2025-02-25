import DeleteIcon from '@/assets/icons/DeleteIcon';
import ConfirmationModal from '@/components/modal/ConfirmationModal/ConfirmationModal';
import Button from '@/components/ui/Button';
import LoadingSpinner from '@/components/ui/LoadingSpinner';
import { useDataContext } from '@/context/dataContext';
import { useRemoveProductVariant } from '@/services/product/productVariantService';
import { useState } from 'react';
import { toast } from 'react-toastify';

const ProductEditVariantTableDeleteButton = ({ productId }) => {
  const { data } = useDataContext();
  const [isOpen, setIsOpen] = useState(false);

  const { isLoading, mutate } = useRemoveProductVariant();

  const handleRemoveProductVariant = () => {
    mutate(
      {
        productId: data.product.id,
        productIds: [productId],
      },
      {
        onSuccess: () => {
          toast.success('Successfully removed');
        },
        onError: (error) => {
          toast.error(error.message);
        },
      },
    );
  };

  return (
    <div>
      {isLoading && <LoadingSpinner className='w-3' />}

      {!isLoading && (
        <Button
          variant='table-action'
          className='hover:bg-danger hover:text-white'
          onClick={() => setIsOpen(true)}
        >
          <DeleteIcon />
        </Button>
      )}

      {isOpen && (
        <ConfirmationModal
          title='Are you sure, you want to remove this product?'
          isOpen={isOpen}
          setIsOpen={setIsOpen}
          productId={productId}
          onAccept={handleRemoveProductVariant}
        />
      )}
    </div>
  );
};

export default ProductEditVariantTableDeleteButton;
