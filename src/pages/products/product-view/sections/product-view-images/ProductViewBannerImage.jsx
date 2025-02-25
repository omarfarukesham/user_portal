import ImageIcon from '@/assets/icons/ImageIcon';
import CollapsibleSection from '@/components/ui/CollapsibleSection';
import ImagePreview from '@/components/upload/ImagePreview';
import { useDataContext } from '@/context/dataContext';

const ProductViewBannerImage = () => {
  const { data } = useDataContext();
  const bannerImage = data?.product?.bannerImage || {};

  return (
    <CollapsibleSection
      icon={ImageIcon}
      title='Banner Image'
      isCollapsible={false}
      className='m-10 my-5'
      contentClassName='grid gap-10'
    >
      <div className='grid gap-5'>
        <ImagePreview
          key={bannerImage?.url}
          image={bannerImage}
          url={bannerImage?.url}
          placeholder='Banner Image'
          className='w-full'
        />
      </div>
    </CollapsibleSection>
  );
};

export default ProductViewBannerImage;
