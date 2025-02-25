import DollarIcon from '@/assets/icons/DollarIcon';
import Table from '@/components/table/Table';
import TableBody from '@/components/table/TableBody';
import TableData from '@/components/table/TableData';
import TableHead from '@/components/table/TableHead';
import TableRow from '@/components/table/TableRow';
import CollapsibleSection from '@/components/ui/CollapsibleSection';
import FlagLabel from '@/components/ui/FlagLabel';
import { useDataContext } from '@/context/dataContext';

const ProductViewPrice = () => {
  const { data } = useDataContext();
  const prices = data?.product?.prices || [];
  const currencyCodes = Object.keys(prices);

  return (
    <CollapsibleSection
      icon={DollarIcon}
      title='Price'
      isCollapsible={false}
      className='m-10 my-5'
    >
      <Table className='border border-separate border-gray-3'>
        <TableBody>
          {currencyCodes?.map((currencyCode) => (
            <TableRow key={currencyCode}>
              <TableHead className='w-24'>
                <FlagLabel currencyCode={currencyCode} label={currencyCode} />
              </TableHead>
              <TableData>{prices[currencyCode]?.priceText}</TableData>
            </TableRow>
          ))}

          {!currencyCodes.length && (
            <TableRow>
              <TableData className='text-center'>No Data Found</TableData>
            </TableRow>
          )}
        </TableBody>
      </Table>
    </CollapsibleSection>
  );
};

export default ProductViewPrice;
