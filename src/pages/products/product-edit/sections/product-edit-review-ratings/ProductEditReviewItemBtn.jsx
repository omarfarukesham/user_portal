import DeleteIcon from '@/assets/icons/DeleteIcon';
import EditIconPen from '@/assets/icons/EditIconPen';
import ConfirmationModal from '@/components/modal/ConfirmationModal/ConfirmationModal';
import Button from '@/components/ui/Button';
import { useProductReviewDelete } from '@/services/product/productReviewService';
import { useState } from 'react';
import { toast } from 'react-toastify';
import ProductEditReviewRatingsUpdate from './product-edit-review-ratings-create/ProductEditReviewRatingsUpdate';

const ProductEditReviewItemBtn = ({ item }) => {
  const [isEditModal, setIsEditModal] = useState(false);
  const [isConfirmationModal, setIsConfirmationModal] = useState(false);

  const { isLoading, mutate } = useProductReviewDelete();

  const handleDeleteReviewRatings = () => {
    setIsConfirmationModal(true);
  };

  const handleConfirmDelete = () => {
    // Perform the delete action
    mutate(item.id, {
      onSuccess: () => {
        toast.success('Successfully data deleted');
        setIsConfirmationModal(false);
      },
      onError: (error) => {
        toast.error(error.message);
      },
    });
  };

  const handleCancelDelete = () => {
    setIsConfirmationModal(false);
  };

  return (
    <>
      <div className='flex gap-2 justify-center'>
        <Button
          variant='table-action'
          onClick={handleDeleteReviewRatings}
          disabled={isLoading}
        >
          {isLoading ? 'Deleting...' : <DeleteIcon className='' />}
        </Button>
        <Button
          variant='table-action'
          onClick={() => setIsEditModal(true)}
          disabled={isLoading}
        >
          {isLoading ? 'Loading...' : <EditIconPen className='' />}
        </Button>
      </div>

      {isEditModal && (
        <ProductEditReviewRatingsUpdate
          isOpen={isEditModal}
          setIsOpen={setIsEditModal}
          item={item}
        />
      )}

      <ConfirmationModal
        isOpen={isConfirmationModal}
        setIsOpen={setIsConfirmationModal}
        onAccept={handleConfirmDelete}
        onReject={handleCancelDelete}
        title='Confirm Delete'
        message='Are you sure you want to delete this review?'
      />
    </>
  );
};

export default ProductEditReviewItemBtn;
