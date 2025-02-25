import RelatedIcon from '@/assets/icons/RelatedIcon';
import CollapsibleSection from '@/components/ui/CollapsibleSection';

const ProductViewRelatedProducts = () => {
  return (
    <CollapsibleSection
      icon={RelatedIcon}
      title='Related Products'
      isCollapsible={false}
      className='m-10 my-5'
    >
      <p>No data found!</p>
    </CollapsibleSection>
  );
};

export default ProductViewRelatedProducts;
