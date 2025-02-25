import ShippingIcon from '@/assets/icons/ShippingIcon';

import CollapsibleSection from '@/components/ui/CollapsibleSection';
import ProductViewShippingInfo from './ProductViewShippingInfo';
import ProductViewShippingMethods from './ProductViewShippingMethods';

const ProductViewShippingAndDelivery = () => {
  return (
    <CollapsibleSection
      icon={ShippingIcon}
      title='Shipping & Delivery'
      isCollapsible={false}
      className='m-10 my-5'
      contentClassName='grid gap-5'
    >
      <ProductViewShippingInfo />
      <ProductViewShippingMethods />
    </CollapsibleSection>
  );
};

export default ProductViewShippingAndDelivery;
