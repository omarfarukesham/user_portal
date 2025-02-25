import Form from '@/components/form/Form';
import PageError from '@/components/layout/PageError';
import Button from '@/components/ui/Button';
import { useDataContext } from '@/context/dataContext';
import { useUpdateProduct } from '@/services/product/productService';
import { toast } from 'react-toastify';
import ProductEditAttributes from '../product-edit-attributes/ProductEditAttributes';
import ProductEditCategory from './ProductEditCategory';

const ProductEditCategoryAndAttributes = () => {
  const { data } = useDataContext();
  const product = data?.product || {};
  const defaultValues = {
    id: product.id,
    categoryId: product?.categoryHierarchyArray?.pop()?.categoryId,
    categoryName: product?.categoryHierarchyArray?.pop()?.name,
    attributes: product?.attributes,
  };

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
  return (
    <Form
      onSubmit={handleEdit}
      defaultValues={defaultValues}
      className='grid gap-5'
    >
      <ProductEditCategory
        categoryId={defaultValues.categoryId}
        categoryName={defaultValues.categoryName}
      />
      <ProductEditAttributes />

      <div className='flex justify-center'>
        <Button variant='secondary' loading={isLoading} type='submit'>
          Update
        </Button>
      </div>
      <PageError message={error?.message} />
    </Form>
  );
};

export default ProductEditCategoryAndAttributes;
