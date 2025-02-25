import SaveIcon from '@/assets/icons/SaveIcon';
import Form from '@/components/form/Form';
import PageError from '@/components/layout/PageError';
import Button from '@/components/ui/Button';
import CollapsibleSection from '@/components/ui/CollapsibleSection';
import { useAddProduct } from '@/services/product/productService';
//import uploadProductSchema from '@/services/schema/uploadProductSchema';
import { useMemo } from 'react';
import { toast } from 'react-toastify';
import productAddFormatData from './productAddFormatData';
import { productAddSteps } from './productAddSteps';
import ProductAddMarkets from './sections/ProductAddMarkets';
import ProductAddSeller from './sections/ProductAddSeller';

const ProductAddMain = () => {
  //const [productSchema, setProductSchema] = useState(uploadProductSchema);
  const { isLoading, error, mutate } = useAddProduct();
  const onSubmit = (formData) => {
    const data = productAddFormatData(formData);
    // eslint-disable-next-line no-console
    console.log(data);

    mutate(data, {
      onSuccess: () => {
        toast.success('Successfully added');
      },
      onError: (error) => {
        toast.error(error.message);
      },
    });
  };

  const defaultValues = useMemo(
    () => ({
      publishStatuses: { BD: 'ONLINE' },
      isFeatured: false,
      isRefundable: false,
      isReturnable: false,
      isExchangeable: false,
      isShippedFromEU: false,
      stockCount: 0,
    }),
    [],
  );

  return (
    <div
      className='bg-white shadow w-[85%] overflow-y-scroll'
      id='upload-product-form'
    >
      <Form
        onSubmit={onSubmit}
        /* schema={productSchema} */
        defaultValues={defaultValues}
        className='p-9 grid gap-7'
      >
        <ProductAddMarkets />
        <ProductAddSeller />

        {productAddSteps.map((step) => {
          return (
            <CollapsibleSection
              icon={step.icon}
              title={step.label}
              isRequired={step.isRequired}
              id={step.path}
              key={step.id}
            >
              <step.element
              /* productSchema={productSchema}
                setProductSchema={setProductSchema} */
              />
            </CollapsibleSection>
          );
        })}
        <Button
          variant='outlined'
          type='submit'
          loading={isLoading}
          className='fixed z-10 bottom-16 right-16 rounded-full md:w-16 md:h-16 bg-white shadow-[0px_0px_8px_0px_rgba(0,0,0,0.15)] hover:bg-primary group border-none'
        >
          <SaveIcon className='fill-primary group-hover:fill-white' />
        </Button>
        {error && <PageError message={error.message} />}
      </Form>
    </div>
  );
};

export default ProductAddMain;
