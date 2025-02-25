import SpecificationIcon from '@/assets/icons/SpecificationIcon';
import Form from '@/components/form/Form';
import PageError from '@/components/layout/PageError';
import Button from '@/components/ui/Button';
import CollapsibleSection from '@/components/ui/CollapsibleSection';
import { useDataContext } from '@/context/dataContext';
import { useUpdateProduct } from '@/services/product/productService';
import { toast } from 'react-toastify';
import ProductEditSpecificationTabs from './ProductEditSpecificationTabs';

const ProductEditSpecification = () => {
  const { data } = useDataContext();

  const { isLoading, error, mutate } = useUpdateProduct();
  const handleEdit = (formData) => {
    mutate(formData, {
      onSuccess: () => {
        toast.success('Successfully updated');
      },
      onError: (error) => {
        toast.error(error.message);
      },
    });
  };

  const product = { ...data?.product };
  const defaultValues = {
    id: product?.id,
    specifications: product?.specifications,
  };
  return (
    <CollapsibleSection
      icon={SpecificationIcon}
      title='Specification'
      isCollapsible={false}
      className='m-10 my-5'
      contentClassName='grid gap-5'
    >
      <Form
        defaultValues={defaultValues}
        onSubmit={handleEdit}
        className='flex flex-col'
      >
        <ProductEditSpecificationTabs
          specifications={defaultValues.specifications}
        />

        <div className='flex justify-center mt-24'>
          <Button variant='secondary' loading={isLoading} type='submit'>
            Update
          </Button>
        </div>
        <PageError message={error?.message} />
      </Form>
    </CollapsibleSection>
  );
};

export default ProductEditSpecification;
