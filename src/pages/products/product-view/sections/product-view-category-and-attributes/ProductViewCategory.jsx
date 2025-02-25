import CategoryIcon from '@/assets/icons/CategoryIcon';
import CollapsibleSection from '@/components/ui/CollapsibleSection';

const ProductViewCategory = ({ product }) => {
  return (
    <CollapsibleSection
      icon={CategoryIcon}
      title='Category'
      isCollapsible={false}
      className='m-10 my-5'
    >
      <div>
        {product?.categoryHierarchy?.nameHierarchy?.replaceAll('|', ' > ')}
      </div>
    </CollapsibleSection>
  );
};

export default ProductViewCategory;
