import LoadingSpinner from '@/components/ui/LoadingSpinner';
import RatingComponent from './RatingComponent';

const ProductEditReviewRatingsHeader = ({ data, isLoading }) => {
  const item = { rating: data?.averageRating };

  return (
    <>
      <div className='flex justify-between pb-4 border-b border-gray-4'>
        <div className='flex gap-2 items-center'>
          <p className='text-xl font-bold text-center'>All Reviews</p>
          <div className='flex items-center'>
            {isLoading ? (
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
      </div>
    </>
  );
};

export default ProductEditReviewRatingsHeader;
