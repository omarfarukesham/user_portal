import CategoryIcon from '@/assets/icons/CategoryIcon';
import FromDropdownRest from '@/components/form/form-dropdown-rest/FormDropdownRest';
import CollapsibleSection from '@/components/ui/CollapsibleSection';
import ProductViewAttributes from '@/pages/products/product-view/sections/product-view-category-and-attributes/ProductViewAttributes';
import { useGetAttributeSets } from '@/services/product/attributeSetService';
import { useEffect, useState } from 'react';
import { useFormContext } from 'react-hook-form';
import ProductEditAttributesLoader from './ProductEditAttributesLoader';

const ProductEditAttributes = () => {
  const { getValues, setValue } = useFormContext();
  const attributes = getValues('attributes');
  const [attributeSetId, setAttributeSetId] = useState(null);

  useEffect(() => {
    setValue('attributes', null);
  }, [attributeSetId, setValue]);

  return (
    <CollapsibleSection
      icon={CategoryIcon}
      title='Attributes'
      isCollapsible={false}
      className='m-10 my-5'
      contentClassName='grid gap-5'
    >
      <FromDropdownRest
        name='attributeSetId'
        label='Attribute Set'
        restServiceHook={useGetAttributeSets}
        onChange={(opts) => setAttributeSetId(opts[0]?.value)}
      />

      {attributeSetId && (
        <ProductEditAttributesLoader attributeSetId={attributeSetId} />
      )}

      {attributes && !attributeSetId && (
        <ProductViewAttributes attributes={attributes} />
      )}
    </CollapsibleSection>
  );
};

export default ProductEditAttributes;
