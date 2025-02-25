import Form from '@/components/form/Form';
import FormConditionalRendering from '@/components/form/FormConditionalRendering';
import FormInput from '@/components/form/FormInput';
import {
  default as FormDropdownRest,
  default as FromDropdownRest,
} from '@/components/form/form-dropdown-rest/FormDropdownRest';
import FormDropdown from '@/components/form/form-dropdown/FormDropdown';
import FormSelectionNestedRest from '@/components/form/form-select-nested-rest/FormSelectionNestedRest';
import Modal from '@/components/modal/Modal';
import Button from '@/components/ui/Button';
import { publishStatusOptions } from '@/services/fake/formData';
import { useGetMarkets } from '@/services/market/marketService';
import { useGetBrands } from '@/services/product/brandService';
import { useGetCategories } from '@/services/product/categoryService';
import removeUndefinedKeys from '@/utilities/removeUndefinedKeys';

const ProductsFiltersModal = ({
  isOpen,
  setIsOpen,
  filters,
  applyFilters,
  clearFilters,
}) => {
  const filtersData = { ...filters };

  const handleApplyFilters = (data) => {
    applyFilters(removeUndefinedKeys(data));
    setIsOpen(false);
  };

  const handleClearFilters = () => {
    clearFilters();
    setIsOpen(false);
  };

  return (
    <Modal
      isOpen={isOpen}
      setIsOpen={setIsOpen}
      className='flex flex-col gap-10 p-10'
    >
      <Form
        onSubmit={handleApplyFilters}
        defaultValues={filtersData}
        className='flex-1 flex flex-col gap-10'
      >
        <div className='flex-1'>
          <div className='grid md:grid-cols-2 gap-x-10 gap-y-6'>
            <FormSelectionNestedRest
              name='categoryId'
              label='Category'
              valueKey='categoryId'
              restServiceHook={useGetCategories}
              selectedOption={{
                label: filtersData.categoryId,
                value: filtersData.categoryId,
              }}
            />
            <FromDropdownRest
              name='brandId'
              placeholder='Brand'
              label='Brand'
              restServiceHook={useGetBrands}
            />

            <FormInput name='id' label='Product ID' placeholder='Product ID' />
            <FormInput name='sku' label='SKU' placeholder='SKU' />
            <FormInput name='ean' label='EAN' placeholder='EAN' />
            <FormInput name='gtin' label='GTIN' placeholder='GTIN' />
            <FormInput name='mpn' label='MPN' placeholder='MPN' />
            <FormInput name='hsCode' label='HS COde' placeholder='HS Code' />

            <FormDropdownRest
              name='publishedMarketCode'
              label='Select Market'
              restServiceHook={useGetMarkets}
              valueKey='marketCode'
            />

            <FormConditionalRendering fieldName='publishedMarketCode'>
              {() => (
                <FormDropdown
                  name='publishedStatus'
                  label='Published Status'
                  options={publishStatusOptions.filter(
                    (e) => e.value !== 'INACTIVE',
                  )}
                />
              )}
            </FormConditionalRendering>
          </div>
        </div>
        <div className='flex justify-center gap-5'>
          <Button type='submit' className='text-white border-white'>
            Apply Filters
          </Button>
          <Button
            onClick={handleClearFilters}
            variant='secondary'
            className='text-white border-white'
          >
            Clear Filters
          </Button>
        </div>
      </Form>
    </Modal>
  );
};

export default ProductsFiltersModal;
