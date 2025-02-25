import PageError from '@/components/layout/PageError';
import LoadingSpinner from '@/components/ui/LoadingSpinner';
import { useDataContext } from '@/context/dataContext';
import {
  useGetProductsReview,
  useProductReviewRatingsShortInfo,
} from '@/services/product/productReviewService';
import ProductEditReviewRatingsHeader from './ProductEditReviewRatingsHeader';
import ProductEditReviewRatingsList from './ProductEditReviewRatingsList';

const ProductEditReviewRatings = () => {
  const { data: dataContext } = useDataContext();
  const productId = dataContext?.product?.id;
  const filters = {
    productId: productId,
  };

  const { data, isFetching, error } = useGetProductsReview(filters);
  const { data: headerData, isLoading } =
    useProductReviewRatingsShortInfo(productId);
  return (
    <div className='flex flex-col p-4'>
      <ProductEditReviewRatingsHeader data={headerData} isLoading={isLoading} />

      <div className='flex-1'>
        {isFetching && (
          <LoadingSpinner message='Loading Product Review & Ratings' />
        )}

        {!isFetching && data?.items && !error && (
          <ProductEditReviewRatingsList data={data.items} />
        )}

        {!isFetching && error && <PageError message={error.message} />}
      </div>
    </div>
  );
};

export default ProductEditReviewRatings;
