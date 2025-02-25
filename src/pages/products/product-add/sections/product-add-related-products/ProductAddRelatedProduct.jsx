import ProductAddCrossSellProducts from './ProductAddCrossSellProducts';
import ProductAddRecommendedProducts from './ProductAddRecommendedProducts';
import ProductAddRelatedProducts from './ProductAddRelatedProducts';

const ProductAddRelatedProduct = () => {
  return (
    <div className='grid gap-7'>
      <ProductAddRelatedProducts />
      <ProductAddRecommendedProducts />
      <ProductAddCrossSellProducts />
    </div>
  );
};

export default ProductAddRelatedProduct;
