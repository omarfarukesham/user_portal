import VariantIcon from '@/assets/icons/VariantIcon';
import NoDataFoundTable from '@/components/layout/NoDataFoundTable';
import CollapsibleSection from '@/components/ui/CollapsibleSection';
import { useDataContext } from '@/context/dataContext';
import ProductEditVariantAdd from './ProductEditVariantAdd';
import ProductEditVariantTable from './ProductEditVariantTable';
import ProductEditVariantUpdate from './ProductEditVariantUpdate';

const ProductEditVariant = () => {
  const { data } = useDataContext();
  const productId = data.product.id;
  const productVariants = data.product.variants;

  return (
    <CollapsibleSection
      title='Variant'
      icon={VariantIcon}
      isCollapsible={false}
      className='m-10 my-5'
      contentClassName='grid gap-3'
    >
      {!!productVariants.length && (
        <>
          <ProductEditVariantTable
            productId={productId}
            productVariants={productVariants}
          />
          <ProductEditVariantUpdate
            productId={productId}
            productVariants={productVariants}
          />
        </>
      )}
      {!productVariants.length && (
        <>
          <NoDataFoundTable message='No variant product is added' />
          <ProductEditVariantAdd productId={productId} />
        </>
      )}
    </CollapsibleSection>
  );
};

export default ProductEditVariant;
