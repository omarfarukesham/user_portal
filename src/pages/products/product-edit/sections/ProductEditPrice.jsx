import DollarIcon from '@/assets/icons/DollarIcon';
import Form from '@/components/form/Form';
import FormInput from '@/components/form/FormInput';
import PageError from '@/components/layout/PageError';
import Table from '@/components/table/Table';
import TableBody from '@/components/table/TableBody';
import TableData from '@/components/table/TableData';
import TableHead from '@/components/table/TableHead';
import TableRow from '@/components/table/TableRow';
import Button from '@/components/ui/Button';
import CollapsibleSection from '@/components/ui/CollapsibleSection';
import FlagLabel from '@/components/ui/FlagLabel';
import { useDataContext } from '@/context/dataContext';
import { useUpdateProduct } from '@/services/product/productService';
import { toast } from 'react-toastify';

const ProductEditPrice = () => {
  const { data } = useDataContext();
  const prices = data?.product?.prices || [];
  const currencyCodesOfPrices = Object.keys(prices);

  const marketCodes = Object.keys(data?.product?.publishStatuses || {});
  const currencyCodesOfMarkets = data?.markets
    .filter((market) => marketCodes.includes(market.marketCode))
    .map((market) => market.currencyCode);

  const currencyCodes = Array.from(
    new Set(currencyCodesOfPrices.concat(currencyCodesOfMarkets)), //Removing Duplication
  );

  // Ensuring usd as default currency
  if (!currencyCodes.includes('BDT')) currencyCodes.unshift('BDT');

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

  const defaultValues = {
    id: data?.product?.id,
    prices: data?.product?.prices,
  };

  return (
    <CollapsibleSection
      icon={DollarIcon}
      title='Price'
      isCollapsible={false}
      className='m-10 my-5'
    >
      <Form
        onSubmit={handleEdit}
        defaultValues={defaultValues}
        className='grid gap-5'
      >
        <Table className='border border-separate border-gray-3'>
          <TableBody>
            {currencyCodes.map((currencyCode) => (
              <TableRow key={currencyCode}>
                <TableHead className='w-24'>
                  <FlagLabel currencyCode={currencyCode} label={currencyCode} />
                </TableHead>
                <TableData>
                  <FormInput
                    name={`prices.${currencyCode}.priceValue`}
                    validations={{ required: 'Please insert the price value' }}
                  />
                </TableData>
              </TableRow>
            ))}

            {!currencyCodes.length && (
              <TableRow>
                <TableData className='text-center'>No Data Found</TableData>
              </TableRow>
            )}
          </TableBody>
        </Table>

        <div className='flex justify-center'>
          <Button variant='secondary' loading={isLoading} type='submit'>
            Update
          </Button>
        </div>
        <PageError message={error?.message} />
      </Form>
    </CollapsibleSection>
  );
};

export default ProductEditPrice;
