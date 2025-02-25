import ArticleIcon from '@/assets/icons/ArticleIcon';
import CollapsibleSection from '@/components/ui/CollapsibleSection';
import ProductEditInformation from './ProductEditInformation';

const ProductEditBasicInformationBody = () => {
  return (
    <CollapsibleSection
      icon={ArticleIcon}
      title='Basic Information'
      isCollapsible={false}
      contentClassName='grid gap-5'
    >
      <ProductEditInformation />
    </CollapsibleSection>
  );
};

export default ProductEditBasicInformationBody;
