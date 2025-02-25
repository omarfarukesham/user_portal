import FormConditionalRendering from '@/components/form/FormConditionalRendering';
import FormDropdownRest from '@/components/form/form-dropdown-rest/FormDropdownRest';
import { useGetAttributeSets } from '@/services/product/attributeSetService';
import ProductAddAttributesLoader from './ProductAddAttributesLoader';

const ProductAddAttributes = () => {
  return (
    <div>
      <FormDropdownRest
        label='Select Attribute Set'
        name='attributeSetId'
        restServiceHook={useGetAttributeSets}
        validations={{ required: 'Please select product attribute set' }}
      />

      <FormConditionalRendering fieldName='attributeSetId'>
        {(fieldValue) => (
          <ProductAddAttributesLoader attributeSetId={fieldValue} />
        )}
      </FormConditionalRendering>
    </div>
  );
};

export default ProductAddAttributes;
