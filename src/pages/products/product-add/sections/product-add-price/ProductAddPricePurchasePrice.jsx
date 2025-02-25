import FormInputWithFlag from '@/components/form/FormInputWithFlag';
import FromDropdownRest from '@/components/form/form-dropdown-rest/FormDropdownRest';
import { useGetCurrencies } from '@/services/currency/currencyService';
import { useWatch } from 'react-hook-form';

const ProductAddPricePurchasePrice = () => {
  const purchasePrice = useWatch({ name: 'purchasePrice' });

  return (
    <div className='grid gap-5'>
      <FromDropdownRest
        name='purchasePrice.currencyCode'
        label='Purchase Currency'
        restServiceHook={useGetCurrencies}
        valueKey='code'
        validations={{ required: 'Please select purchase price currency' }}
      />

      {purchasePrice?.currencyCode && (
        <FormInputWithFlag
          name='purchasePrice.priceValue'
          label='Purchase Price'
          placeholder='Price'
          currencyCode={purchasePrice.currencyCode}
          type='number'
          validations={{ required: 'Please provide the purchase price' }}
        />
      )}
    </div>
  );
};

export default ProductAddPricePurchasePrice;
