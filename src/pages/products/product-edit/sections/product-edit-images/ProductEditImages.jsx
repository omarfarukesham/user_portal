import Form from '@/components/form/Form';
import PageError from '@/components/layout/PageError';
import Button from '@/components/ui/Button';
import { useDataContext } from '@/context/dataContext';
import { useUpdateProduct } from '@/services/product/productService';
import { toast } from 'react-toastify';
import ProductEditBannerImage from './ProductEditBannerImage';
import ProductEditImagesForm from './ProductEditImagesForm';

const ProductEditImages = () => {
  const { data } = useDataContext();
  const { isLoading, error, mutate } = useUpdateProduct();

  const handleEdit = (formData) => {
    const data = { ...formData };
    if (!formData.bannerImage.url) data.bannerImage = null;

    mutate(data, {
      onSuccess: () => {
        toast.success('Successfully updated');
      },
      onError: (error) => {
        toast.error(error.message);
      },
    });
  };

  const defaultValues = {
    id: data?.product?.id,
    images: data?.product?.images || [],
    bannerImage: data?.product?.bannerImage,
  };

  return (
    <Form
      defaultValues={defaultValues}
      onSubmit={handleEdit}
      className='grid gap-5'
    >
      <ProductEditImagesForm images={defaultValues.images} />
      <ProductEditBannerImage />
      <div className='flex justify-center'>
        <Button variant='secondary' loading={isLoading} type='submit'>
          Update
        </Button>
      </div>
      <PageError message={error?.message} />
    </Form>
  );
};

export default ProductEditImages;
