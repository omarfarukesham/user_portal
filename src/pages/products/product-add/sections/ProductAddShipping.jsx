import FormDropdownMultiple from '@/components/form/FormDropdownMultiple';
import FormInputMultiple from '@/components/form/FormInputMultiple';
import FormYesNoToggle from '@/components/form/FormYesNoToggle';
import { useDataContext } from '@/context/dataContext';
import { carriers, shippingMethods } from '@/services/fake/formData';

const ProductAddShipping = () => {
  const { data } = useDataContext();

  return (
    <>
      <div className='grid lg:grid-cols-2 gap-7'>
        <FormInputMultiple
          data={data.selectedMarkets}
          dataKey='marketCode'
          label='Shipping Cost'
          name='shippingCost'
        />
        <FormInputMultiple
          data={data.selectedMarkets}
          dataKey='marketCode'
          label='Delivery Time'
          name='deliveryTime'
          leftItemName='from'
          rightItemName='to'
        />

        <FormDropdownMultiple
          data={data.selectedMarkets}
          dataKey='marketCode'
          label='Carrier'
          name='carrier'
          options={carriers}
          isMulti
        />
        <FormDropdownMultiple
          data={data.selectedMarkets}
          dataKey='marketCode'
          label='Shipping Method'
          name='shippingMethod'
          options={shippingMethods}
        />

        <FormYesNoToggle
          label='This product is shipped from the European Union'
          name='isShippedFromEU'
        />
      </div>
    </>
  );
};

export default ProductAddShipping;
