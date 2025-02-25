import ImageIcon from '@/assets/icons/ImageIcon';
import CollapsibleSection from '@/components/ui/CollapsibleSection';
import ImagePreview from '@/components/upload/ImagePreview';
import { useDataContext } from '@/context/dataContext';
import { useState } from 'react';

const ProductViewProductImages = () => {
  const { data } = useDataContext();
  const images = data?.product?.images || [];

  const [viewingImage, setViewingImage] = useState(() => {
    return images.find((image) => image.isPrimary);
  });

  return (
    <CollapsibleSection
      icon={ImageIcon}
      title='Images'
      isCollapsible={false}
      className='m-10 my-5'
      contentClassName='grid gap-10'
    >
      {viewingImage && (
        <div className='grid gap-5'>
          <ImagePreview
            key={viewingImage?.url}
            image={viewingImage}
            url={viewingImage?.url}
          />

          <div className='text-label-sm '>
            Title: {viewingImage?.title} <br />
            Alt Text: {viewingImage?.altText} <br />
            Meta Description: {viewingImage?.metaDescription} <br />
            Primary: {viewingImage?.isPrimary ? 'Yes' : 'No'} <br />
            Position: {viewingImage?.position} <br />
          </div>
        </div>
      )}
      <div>
        <p className='text-label text-gray-6 my-5'>Images</p>
        <div className='flex gap-5 flex-wrap'>
          {images.map((image) => (
            <ImagePreview
              key={image.url}
              image={image}
              url={image.url}
              variant='small'
              onClick={() => setViewingImage(image)}
              className='cursor-pointer'
            />
          ))}
        </div>
      </div>
    </CollapsibleSection>
  );
};

export default ProductViewProductImages;
