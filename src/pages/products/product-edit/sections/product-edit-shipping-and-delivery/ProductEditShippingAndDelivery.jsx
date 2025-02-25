import ShippingIcon from '@/assets/icons/ShippingIcon';

import CollapsibleSection from '@/components/ui/CollapsibleSection';
import ProductEditShippingInfo from './ProductEditShippingInfo';
import ProductEditShippingMethods from './ProductEditShippingMethods';

const ProductEditShippingAndDelivery = () => {
  return (
    <CollapsibleSection
      icon={ShippingIcon}
      title='Shipping & Delivery'
      isCollapsible={false}
      className='m-10 my-5'
      contentClassName='grid gap-5'
    >
      <ProductEditShippingInfo />
      <ProductEditShippingMethods />
    </CollapsibleSection>
  );
};

export default ProductEditShippingAndDelivery;
