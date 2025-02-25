import ProductAddPricePurchasePrice from './ProductAddPricePurchasePrice';
import ProductAddPriceSalePrice from './ProductAddPriceSalePrice';

const ProductAddPrice = () => {
  return (
    <div className='grid grid-cols-2 gap-7'>
      <ProductAddPricePurchasePrice />
      <ProductAddPriceSalePrice />
    </div>
  );
};

export default ProductAddPrice;
