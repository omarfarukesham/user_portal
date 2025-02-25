import CategoryIcon from '@/assets/icons/CategoryIcon';
import CollapsibleSection from '@/components/ui/CollapsibleSection';
import { useDataContext } from '@/context/dataContext';
import ProductViewAttributes from './ProductViewAttributes';
import ProductViewCategory from './ProductViewCategory';

const ProductViewCategoryAndAttributes = () => {
  const { data } = useDataContext();
  const product = data?.product || {};
  const attributes = data?.product?.attributes || {};

  return (
    <div>
      <ProductViewCategory product={product} />

      <CollapsibleSection
        icon={CategoryIcon}
        title='Attributes'
        isCollapsible={false}
        className='m-10 my-5'
      >
        <ProductViewAttributes attributes={attributes} />
      </CollapsibleSection>
    </div>
  );
};

export default ProductViewCategoryAndAttributes;
