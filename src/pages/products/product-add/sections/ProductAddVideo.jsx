import FormFileUpload from '@/components/form/FormFileUpload';
import FormFileUploadByDrag from '@/components/form/FormFileUploadByDrag';
import FormInput from '@/components/form/FormInput';
import FormTextarea from '@/components/form/FormTextarea';
import ImagePreview from '@/components/upload/ImagePreview';
import { useState } from 'react';
import { useFormContext } from 'react-hook-form';

const ProductAddVideo = () => {
  const [videoSource, setVideoSource] = useState('');
  const [thumbnail, setThumbnail] = useState(undefined);

  const { setValue } = useFormContext();

  const handleVideoUpload = (selectedFiles) => {
    if (selectedFiles) {
      const reader = new FileReader();

      reader.onload = () => {
        setVideoSource(reader.result);
      };
      reader.readAsDataURL(selectedFiles);
    }
  };

  const handleThumbnailUpload = (image) => {
    setThumbnail(image);
  };

  const handleThumbnailRemove = () => {
    setValue('thumbnail', undefined);
    setThumbnail(undefined);
  };

  return (
    <>
      <div className='grid lg:grid-cols-2 gap-7 my-7'>
        <div className='flex flex-col gap-10'>
          <FormInput name='videoUrl' label='Add Url or Upload Video' />
          <FormFileUpload
            name='video'
            accept='video/*'
            onChange={handleVideoUpload}
          />
          <FormInput name='videoTitle' label='Title' />
          <FormTextarea name='videoMetaDescription' label='Meta Description' />
        </div>
        <div className='flex flex-col gap-10'>
          <div className='h-52 w-96 relative shrink-0 grow-0 border-2 border-dashed border-gray-4 bg-gray-2 rounded-lg flex items-center justify-center'>
            {videoSource ? (
              <video controls className='rounded-lg'>
                <source src={videoSource} type='video/mp4' />
                Your browser does not support the video tag.
              </video>
            ) : (
              <span className='text-lg text-gray-5'>Video Preview</span>
            )}
          </div>
          <div>
            <p className='text-base-2 font-bold mb-5'>Thumbnail</p>
            <div className='relative'>
              <FormFileUploadByDrag
                name='thumbnail'
                type='image'
                onChange={handleThumbnailUpload}
              />
              {thumbnail && (
                <div className='absolute top-0 left-0'>
                  <ImagePreview
                    file={thumbnail}
                    onRemove={handleThumbnailRemove}
                  />
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductAddVideo;
