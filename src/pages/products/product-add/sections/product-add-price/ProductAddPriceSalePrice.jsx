import FormInputWithFlag from '@/components/form/FormInputWithFlag';
import { useDataContext } from '@/context/dataContext';

const ProductAddPriceSalePrice = () => {
  const { data } = useDataContext();
  const selectedCurrencyCodes = data?.selectedCurrencyCodes || [];

  return (
    <div>
      {selectedCurrencyCodes.map((currencyCode, index) => (
        <FormInputWithFlag
          label={index === 0 ? 'Sale Price' : ''}
          key={currencyCode}
          name={`prices.${currencyCode}.priceValue`}
          placeholder='Price'
          currencyCode={currencyCode}
          shouldUnregisterOnUnmount={true}
          validations={{ required: 'Please provide the selling price' }}
        />
      ))}
    </div>
  );
};

export default ProductAddPriceSalePrice;
