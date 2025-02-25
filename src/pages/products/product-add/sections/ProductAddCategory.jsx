import FormSelectionNestedRest from '@/components/form/form-select-nested-rest/FormSelectionNestedRest';
import { useGetCategories } from '@/services/product/categoryService';
import ProductAddAttributes from './product-add-attributes/ProductAddAttributes';

const ProductAddCategory = () => {
  return (
    <div className='grid gap-7'>
      <FormSelectionNestedRest
        label='Choose A Category'
        name='categoryId'
        restServiceHook={useGetCategories}
        valueKey='categoryId'
        validations={{ required: 'Please select product category' }}
      />

      <ProductAddAttributes />
    </div>
  );
};

export default ProductAddCategory;
