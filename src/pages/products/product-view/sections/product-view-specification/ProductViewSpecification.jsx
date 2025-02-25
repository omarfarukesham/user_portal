import SpecificationIcon from '@/assets/icons/SpecificationIcon';
import NoDataFoundTable from '@/components/layout/NoDataFoundTable';
import CollapsibleSection from '@/components/ui/CollapsibleSection';
import { useDataContext } from '@/context/dataContext';
import ProductViewSpecificationTabs from './ProductViewSpecificationTabs';

const ProductViewSpecification = () => {
  const { data } = useDataContext();
  const specifications = data.product?.specifications || {};

  const languageCodes = Object.keys(specifications);

  return (
    <CollapsibleSection
      icon={SpecificationIcon}
      title='Specification'
      isCollapsible={false}
      className='m-10 my-5'
      contentClassName='grid gap-5'
    >
      {!languageCodes.length && (
        <NoDataFoundTable message='No Specification Found!' />
      )}
      {languageCodes.length > 0 && (
        <ProductViewSpecificationTabs
          specifications={specifications}
          languageCodes={languageCodes}
        />
      )}
    </CollapsibleSection>
  );
};

export default ProductViewSpecification;
