import VariantIcon from '@/assets/icons/VariantIcon';
import NoDataFoundTable from '@/components/layout/NoDataFoundTable';
import CollapsibleSection from '@/components/ui/CollapsibleSection';
import { useDataContext } from '@/context/dataContext';
import ProductViewVariantTable from './ProductViewVariantTable';

const ProductViewVariant = () => {
  const { data } = useDataContext();
  const productVariants = data.product.variants;

  return (
    <CollapsibleSection
      title='Variant'
      icon={VariantIcon}
      isCollapsible={false}
      className='m-10 my-5'
    >
      {!!productVariants.length && (
        <ProductViewVariantTable productVariants={productVariants} />
      )}
      {!productVariants.length && (
        <NoDataFoundTable message='No product variant is added' />
      )}
    </CollapsibleSection>
  );
};

export default ProductViewVariant;
