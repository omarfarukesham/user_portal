import CategoryIcon from '@/assets/icons/CategoryIcon';
import FormSelectionNestedRest from '@/components/form/form-select-nested-rest/FormSelectionNestedRest';
import CollapsibleSection from '@/components/ui/CollapsibleSection';
import { useGetCategories } from '@/services/product/categoryService';

const ProductEditCategory = ({ categoryId, categoryName }) => {
  return (
    <CollapsibleSection
      icon={CategoryIcon}
      title='Category'
      isCollapsible={false}
      className='m-10 my-5'
    >
      <FormSelectionNestedRest
        label='Choose A Category'
        name='categoryId'
        selectedOption={{
          label: categoryName,
          value: categoryId,
        }}
        restServiceHook={useGetCategories}
        valueKey='categoryId'
        validations={{ required: 'Please select product category' }}
      />
    </CollapsibleSection>
  );
};

export default ProductEditCategory;
