import ImageIcon from '@/assets/icons/ImageIcon';
import FormUploadContentService from '@/components/form/FormUploadContentService';
import CollapsibleSection from '@/components/ui/CollapsibleSection';
import { useDirectUploadContent } from '@/services/content/contentService';

const ProductEditBannerImage = () => {
  return (
    <CollapsibleSection
      icon={ImageIcon}
      title='Banner Image'
      isCollapsible={false}
      className='m-10 my-5'
    >
      <FormUploadContentService
        name='bannerImage.url'
        placeholder='Product Banner Image'
        className='w-full h-40'
        restServiceHook={useDirectUploadContent}
        restData={{ fileType: 'PRODUCT_BANNER_IMAGE' }}
      />
    </CollapsibleSection>
  );
};

export default ProductEditBannerImage;
