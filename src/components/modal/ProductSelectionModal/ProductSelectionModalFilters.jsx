import Form from '@/components/form/Form';
import FormInput from '@/components/form/FormInput';
import FormDropdownRest from '@/components/form/form-dropdown-rest/FormDropdownRest';
import FormSelectionNestedRest from '@/components/form/form-select-nested-rest/FormSelectionNestedRest';
import Button from '@/components/ui/Button';
import { useGetBrands } from '@/services/product/brandService';
import { useGetCategories } from '@/services/product/categoryService';
import removeUndefinedKeys from '@/utilities/removeUndefinedKeys';

const ProductSelectionModalFilters = ({
  filters,
  applyFilters,
  clearFilters,
  setIsFilterOpen,
}) => {
  const filtersData = { ...filters };

  const handleApplyFilters = (data) => {
    applyFilters(removeUndefinedKeys(data));
    setIsFilterOpen(false);
  };

  const handleClearFilters = () => {
    clearFilters();
    setIsFilterOpen(false);
  };

  return (
    <Form
      onSubmit={handleApplyFilters}
      defaultValues={filtersData}
      className='flex-1 flex flex-col overflow-auto gap-10 px-10 py-5'
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
          <FormDropdownRest
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
        </div>
      </div>
      <div className='flex justify-center gap-5'>
        <Button type='submit' size='slim' className='text-white border-white'>
          Apply Filters
        </Button>
        <Button
          onClick={handleClearFilters}
          variant='secondary'
          size='slim'
          className='text-white border-white'
        >
          Clear Filters
        </Button>
      </div>
    </Form>
  );
};

export default ProductSelectionModalFilters;
