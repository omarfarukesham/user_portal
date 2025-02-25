import FormDropdownRest from '@/components/form/form-dropdown-rest/FormDropdownRest';
import { useGetSellers } from '@/services/seller/sellerService';

const ProductAddSeller = () => {
  return (
    <div className='grid lg:grid-cols-2 gap-7'>
      <FormDropdownRest
        label='Seller'
        name='sellerId'
        restServiceHook={useGetSellers}
        labelKey='storeName'
      />
    </div>
  );
};

export default ProductAddSeller;
