import FormInput from '@/components/form/FormInput';
import Table from '@/components/table/Table';
import TableBody from '@/components/table/TableBody';
import TableData from '@/components/table/TableData';
import TableHead from '@/components/table/TableHead';
import TableRow from '@/components/table/TableRow';
import CollapsibleSection from '@/components/ui/CollapsibleSection';
import FlagLabel from '@/components/ui/FlagLabel';
import { useDataContext } from '@/context/dataContext';
import removeEmptyKeys from '@/utilities/removeEmptyKeys';
import { useWatch } from 'react-hook-form';

const ProductEditTitles = () => {
  const { data } = useDataContext();
  const languageCodesOfTitles = Object.keys(data?.product?.titles || []);

  const publishStatuses = useWatch({ name: 'publishStatuses' });

  const marketCodes = Object.keys(
    removeEmptyKeys(publishStatuses, ['INACTIVE']),
  );
  const languageCodesOfMarkets = data?.markets
    .filter((market) => marketCodes.includes(market.marketCode))
    .map((market) => market.languageCode);

  const languageCodes = Array.from(
    new Set(languageCodesOfTitles.concat(languageCodesOfMarkets)), // Removing Duplicates
  );

  // Ensuring english as default title
  if (!languageCodes.includes('EN')) languageCodes.unshift('EN');

  return (
    <CollapsibleSection
      title='Product Titles'
      isCollapsible={false}
      contentClassName='grid gap-5'
    >
      <Table className='border border-separate border-gray-3'>
        <TableBody>
          {languageCodes.map((languageCode) => (
            <TableRow key={languageCode}>
              <TableHead className='w-24'>
                <FlagLabel languageCode={languageCode} label={languageCode} />
              </TableHead>
              <TableData>
                <FormInput name={`titles.${languageCode}`} />
              </TableData>
            </TableRow>
          ))}

          {!languageCodes.length && (
            <TableRow>
              <TableData className='text-center'>No Data Found</TableData>
            </TableRow>
          )}
        </TableBody>
      </Table>
    </CollapsibleSection>
  );
};

export default ProductEditTitles;
