import ProductEditReviewRatingsItem from './ProductEditReviewRatingsItem';

const ProductEditReviewRatingsList = ({ data = [] }) => {
  // console.log(data);
  return (
    <div className='grid gap-3 py-5'>
      {data.map((item) => (
        <ProductEditReviewRatingsItem key={item.id} item={item} />
      ))}
    </div>
  );
};

export default ProductEditReviewRatingsList;
