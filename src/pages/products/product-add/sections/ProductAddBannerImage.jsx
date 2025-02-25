import FormUploadContentService from '@/components/form/FormUploadContentService';
import { useDirectUploadContent } from '@/services/content/contentService';

const ProductAddBannerImage = () => {
  return (
    <div>
      <FormUploadContentService
        name='bannerImage.url'
        placeholder='Product Banner Image'
        className='w-full h-40'
        restServiceHook={useDirectUploadContent}
        restData={{ fileType: 'PRODUCT_BANNER_IMAGE' }}
      />
    </div>
  );
};

export default ProductAddBannerImage;
