import PlusIcon from '@/assets/icons/PlusIcon';
import Button from '@/components/ui/Button';
import LoadingSpinner from '@/components/ui/LoadingSpinner';
import { useState } from 'react';
import RatingComponent from './RatingComponent';
import ProductEditReviewRatingsCreateModal from './product-edit-review-ratings-create/ProductEditReviewRatingsCreateModal';

const ProductEditReviewRatingsHeader = ({ data, isLoading }) => {
  const [isReviewCreate, setIsReviewCreate] = useState(false);
  const item = { rating: data?.averageRating };

  return (
    <>
      <div className='flex justify-between pb-4 border-b border-gray-4'>
        <div className='flex gap-2 items-center'>
          <p className='text-xl font-bold text-center'>All Reviews</p>
          <div className='flex items-center'>
            {isLoading ? (
              // Show a loading indicator or any relevant message while data is loading
              <LoadingSpinner message='Data is Loading' />
            ) : data?.averageRating ? (
              <>
                {data?.averageRating && <RatingComponent item={item} />}
                <div className='flex-1'>
                  {data?.averageRating && (
                    <p className='font-bold text-lg ml-2 items-center'>
                      {data?.averageRating}/{5}
                      <span className='ml-2'>({data?.totalRatingCount})</span>
                    </p>
                  )}
                </div>
              </>
            ) : (
              <p>No review</p>
            )}
          </div>
        </div>
        <div className=''>
          <Button
            onClick={() => setIsReviewCreate(true)}
            variant='texted-outlined'
            size='slim'
            disabled={isLoading} // Disable the button while data is loading
          >
            <PlusIcon /> Add Review
          </Button>
        </div>
      </div>

      {isReviewCreate && (
        <ProductEditReviewRatingsCreateModal
          isOpen={isReviewCreate}
          setIsOpen={setIsReviewCreate}
        />
      )}
    </>
  );
};

export default ProductEditReviewRatingsHeader;
