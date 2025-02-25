import Form from '@/components/form/Form';
import PageError from '@/components/layout/PageError';
import Button from '@/components/ui/Button';
import { useDataContext } from '@/context/dataContext';
import { useUpdateProduct } from '@/services/product/productService';
import { toast } from 'react-toastify';
import ProductEditDescriptionsLong from './ProductEditDescriptionsLong';
import ProductEditDescriptionsShort from './ProductEditDescriptionsShort';

const ProductEditDescriptions = () => {
  const { data } = useDataContext();
  const descriptions = data?.product?.descriptions || [];
  const languageCodesDescriptions = Object.keys(descriptions);

  const marketCodes = Object.keys(data?.product?.publishStatuses || {});
  const languageCodesOfMarkets = data?.markets
    .filter((market) => marketCodes.includes(market.marketCode))
    .map((market) => market.languageCode);

  const languageCodes = Array.from(
    new Set(languageCodesDescriptions.concat(languageCodesOfMarkets)), //Removing Duplication
  );

  // Ensuring english as default language
  if (!languageCodes.includes('EN')) languageCodes.unshift('EN');

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
    descriptions: product?.descriptions,
    shortDescriptions: product?.shortDescriptions,
  };

  return (
    <Form
      defaultValues={defaultValues}
      onSubmit={handleEdit}
      className='grid gap-10'
    >
      <ProductEditDescriptionsLong languageCodes={languageCodes} />
      <ProductEditDescriptionsShort languageCodes={languageCodes} />

      <div className='flex justify-center'>
        <Button variant='secondary' loading={isLoading} type='submit'>
          Update
        </Button>
      </div>
      <PageError message={error?.message} />
    </Form>
  );
};

export default ProductEditDescriptions;
