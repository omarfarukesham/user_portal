import FormDatePicker from '@/components/form/FormDatePicker';
import FormInput from '@/components/form/FormInput';
import FormSwitch from '@/components/form/FormSwitch';
import FormDropdownRest from '@/components/form/form-dropdown-rest/FormDropdownRest';
import FormDropdown from '@/components/form/form-dropdown/FormDropdown';
import {
  lengthUnits,
  stockStatuses,
  visibilities,
  weightUnits,
} from '@/services/fake/formData';
import { useGetBrands } from '@/services/product/brandService';
import { useGetTaxRules } from '@/services/tax/taxRuleService';
import ProductAddTitles from './ProductAddTitles';

const ProductAddBasicInformation = () => {
  return (
    <>
      <div className='grid grid-cols-2 gap-7'>
        <FormSwitch label='Featured Product' name='isFeatured' />
        <FormSwitch label='Returnable Product' name='isReturnable' />
        <FormSwitch label='Refundable Product' name='isRefundable' />
        <FormSwitch label='Exchangeable Product' name='isExchangeable' />
      </div>
      <div className='grid lg:grid-cols-2 gap-7 my-7'>
        <ProductAddTitles />
        <FormDropdownRest
          name='brandId'
          label='Product Brand'
          placeholder='Select Brand'
          restServiceHook={useGetBrands}
          validations={{ required: 'Please select product brand' }}
        />

        <FormInput label='SKU' name='sku' placeholder='SKU' />
        <FormInput label='MPN' name='mpn' placeholder='MPN' />
        <FormInput label='EAN' name='ean' placeholder='EAN' />
        <FormInput label='GTIN' name='gtin' placeholder='GTIN' />
        <FormInput label='HS Code' name='hsCode' placeholder='HS Code' />
        <FormDropdownRest
          name='taxRuleIds'
          label='Tax Rules'
          placeholder='Select Tax Rules'
          restServiceHook={useGetTaxRules}
          isMulti
        />

        <FormDropdown
          name='stockStatus'
          options={stockStatuses}
          label='Stock Status'
        />

        <FormDatePicker
          name='inStockDate'
          label='In Stock Date'
          placeholder='In Stock Date'
        />
        <FormInput
          name='stockCount'
          label='Stock Count'
          placeholder='Stock Count'
        />

        <FormInput
          name='standardQuantity'
          label='Standard Count'
          placeholder='Standard Count'
        />
        <FormInput
          name='warningQuantity'
          label='Warning Count'
          placeholder='Warning Count'
        />

        <FormDropdown
          name='visibilities'
          label='Visibilities'
          options={visibilities}
          isMulti={true}
        />

        <FormDropdown
          name='packageDimension.unit'
          label='Length Units'
          placeholder='Select Length Unit'
          options={lengthUnits}
        />
        <FormInput
          name='packageDimension.height'
          label='Height'
          placeholder='Height'
        />
        <FormInput
          name='packageDimension.width'
          label='Width'
          placeholder='Width'
        />
        <FormInput
          name='packageDimension.length'
          label='Length'
          placeholder='Length'
        />

        <FormDropdown
          name='packageWeight.unit'
          label='Weight Units'
          placeholder='Select Weight Unit'
          options={weightUnits}
        />
        <FormInput
          name='packageWeight.value'
          label='Weight Value'
          placeholder='Weight Value'
        />
      </div>
    </>
  );
};

export default ProductAddBasicInformation;
