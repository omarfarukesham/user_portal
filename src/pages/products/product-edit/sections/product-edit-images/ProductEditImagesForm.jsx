import ImageIcon from '@/assets/icons/ImageIcon';
import FormFileUploadByDrag from '@/components/form/FormFileUploadByDrag';
import CollapsibleSection from '@/components/ui/CollapsibleSection';
import ImagePreview from '@/components/upload/ImagePreview';
import { useEffect, useState } from 'react';
import { useFormContext } from 'react-hook-form';

const ProductEditImagesForm = ({ images }) => {
  const { setValue } = useFormContext();
  const [mainImage, setMainImage] = useState(() => {
    return images.find((image) => image.isPrimary);
  });
  const [extraImages, setExtraImages] = useState(() => {
    return images.filter((image) => !image.isPrimary);
  });

  //Updating the form on update of mainImage and extraImages
  useEffect(() => {
    const images = [...extraImages];
    mainImage && images.unshift(mainImage);

    setValue('images', images);
  }, [mainImage, extraImages, setValue]);

  //Add Image
  const handleImageAdd = (newFiles) => {
    setMainImage(newFiles[0]);
    setExtraImages([...newFiles.slice(1)]);
  };

  //Set Primary Image
  const handleImageClick = (index) => {
    const oldMainImage = { ...mainImage, isPrimary: false };
    const newMainImage = { ...extraImages[index], isPrimary: true };

    const newExtraImages = [...extraImages];
    newExtraImages[index] = oldMainImage;

    setMainImage(newMainImage);
    setExtraImages(newExtraImages);
  };

  //Remove Image
  const handleImageRemove = (index, isPrimary) => {
    if (isPrimary) {
      if (extraImages.length) {
        setMainImage({ ...extraImages[0], isPrimary: true });
        setExtraImages([...extraImages.slice(1)]);
      } else {
        setMainImage(null);
      }
    } else {
      setExtraImages(extraImages.filter((e, key) => key !== index));
    }
  };

  //Format Image Object
  const formatImageObject = (newFiles) => {
    const formattedFiles = newFiles.map((newFile) => ({
      title: newFile.name,
      isPrimary: false,
      file: newFile,
    }));

    const allFiles = [...extraImages, ...formattedFiles];
    if (!mainImage) {
      return [{ ...allFiles[0], isPrimary: true }, ...allFiles.slice(1)];
    } else {
      allFiles.unshift(mainImage);
    }

    return allFiles;
  };

  return (
    <CollapsibleSection
      icon={ImageIcon}
      title='Images'
      isCollapsible={false}
      className='m-10 my-5'
    >
      <div className='flex items-center justify-center gap-12 flex-wrap p-10'>
        <FormFileUploadByDrag
          name='images'
          type='image'
          multiple
          setFormattedValue={formatImageObject}
          onChange={handleImageAdd}
        />
        {mainImage && (
          <ImagePreview
            url={mainImage.url}
            file={mainImage.file}
            image={mainImage}
            className='flex-1'
            onRemove={() => handleImageRemove(null, true)}
          />
        )}

        <p className='w-full text-gray text-sm'>
          Image size should be: 1200 x 1200
        </p>
      </div>

      <div>
        <p className='text-lg text-gray-6 my-5'>
          Extra Images ({extraImages.length || 0} / 10)
        </p>
        <div className='flex items-center gap-5 flex-wrap'>
          {extraImages.map((image, index) => {
            return (
              <ImagePreview
                key={image.title + index}
                url={image.url}
                file={image.file}
                image={image}
                variant='small'
                index={index}
                onSet={handleImageClick}
                onRemove={handleImageRemove}
              />
            );
          })}
        </div>
      </div>
    </CollapsibleSection>
  );
};

export default ProductEditImagesForm;
