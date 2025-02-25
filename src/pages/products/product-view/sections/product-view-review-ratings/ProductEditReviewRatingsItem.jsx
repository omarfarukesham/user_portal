// import ProductEditReviewItemBtn from './ProductEditReviewItemBtn';
// import RatingComponent from './RatingComponent';

import RatingComponent from './RatingComponent';

const ProductEditReviewRatingsItem = ({ item }) => {
  return (
    <>
      <div className='border border-gray-2 p-4 bg-white rounded-lg shadow'>
        <div className='flex justify-between items-center'>
          <div className='flex gap-3 justify-start items-center'>
            <img
              src={item?.customerInfo.profileImage.url}
              className='w-10 h-10 rounded-full'
            />
            <p className='text-md font-bold'>
              {item?.customerInfo?.personName}
            </p>
          </div>
          {/* <ProductEditReviewItemBtn item={item} /> */}
        </div>

        <p className='text-md my-3'>{item?.review}</p>

        <div className='flex justify-between gap-2 items-center'>
          <div className='flex gap-1'>
            <RatingComponent item={item} />
          </div>
          <div>
            {item.images.map((pImg, index) => (
              <img
                key={index}
                src={pImg.url}
                className='w-10 h-12 border border-gray-1 '
                alt='prodImg'
              />
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductEditReviewRatingsItem;
