import ArticleIcon from '@/assets/icons/ArticleIcon';

import CollapsibleSection from '@/components/ui/CollapsibleSection';
import ProductViewInformation from './ProductViewInformation';
import ProductViewMarkets from './ProductViewMarkets';
import ProductViewTitles from './ProductViewTitles';

const ProductViewBasicInformation = () => {
  return (
    <div className='p-10 py-5'>
      <ProductViewMarkets />
      <CollapsibleSection
        icon={ArticleIcon}
        title='Basic Information'
        isCollapsible={false}
        contentClassName='grid gap-5'
      >
        <ProductViewTitles />
        <ProductViewInformation />
      </CollapsibleSection>
    </div>
  );
};

export default ProductViewBasicInformation;
