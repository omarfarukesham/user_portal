import Table from '@/components/table/Table';
import TableBody from '@/components/table/TableBody';
import TableData from '@/components/table/TableData';
import TableHead from '@/components/table/TableHead';
import TableRow from '@/components/table/TableRow';
import FlagLabel from '@/components/ui/FlagLabel';
import { useDataContext } from '@/context/dataContext';

const ProductViewTitles = () => {
  const { data } = useDataContext();
  const titles = data?.product?.titles;

  const languageCodes = titles ? Object.keys(titles) : [];

  return (
    <Table className='border border-separate border-gray-3'>
      <TableBody>
        {languageCodes?.map((languageCode) => (
          <TableRow key={languageCode}>
            <TableHead className='w-24'>
              <FlagLabel languageCode={languageCode} label={languageCode} />
            </TableHead>
            <TableData>{titles[languageCode]}</TableData>
          </TableRow>
        ))}

        {!languageCodes.length && (
          <TableRow>
            <TableData className='text-center'>No Data Found</TableData>
          </TableRow>
        )}
      </TableBody>
    </Table>
  );
};

export default ProductViewTitles;
