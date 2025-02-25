import Form from '@/components/form/Form';
import PageError from '@/components/layout/PageError';
import Button from '@/components/ui/Button';
import { useDataContext } from '@/context/dataContext';
import { useUpdateProduct } from '@/services/product/productService';
import removeEmptyKeys from '@/utilities/removeEmptyKeys';
import { toast } from 'react-toastify';
import ProductEditBasicInformationBody from './ProductEditBasicInformationBody';
import ProductEditMarkets from './ProductEditMarkets';
import ProductEditTitles from './ProductEditTitles';
import getProductBasicInformation from './getProductBasicInformation';

const ProductEditBasicInformation = () => {
  const { data } = useDataContext();
  const product = data?.product;

  const { isLoading, error, mutate } = useUpdateProduct();
  const handleEdit = (formData) => {
    const modifiedFormData = {
      ...formData,
      publishStatuses: removeEmptyKeys(formData.publishStatuses, ['INACTIVE']),
    };

    mutate(modifiedFormData, {
      onSuccess: () => {
        toast.success('Successfully updated');
      },
      onError: (error) => {
        toast.error(error.message);
      },
    });
  };

  const defaultValues = getProductBasicInformation(product);

  return (
    <Form
      className='p-10 py-5'
      defaultValues={defaultValues}
      onSubmit={handleEdit}
    >
      <ProductEditMarkets />
      <ProductEditTitles />
      <ProductEditBasicInformationBody />

      <div className='flex justify-center'>
        <Button variant='secondary' loading={isLoading} type='submit'>
          Update
        </Button>
      </div>
      <PageError message={error?.message} />
    </Form>
  );
};

export default ProductEditBasicInformation;
