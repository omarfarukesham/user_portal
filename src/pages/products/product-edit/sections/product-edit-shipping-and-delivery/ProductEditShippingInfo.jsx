import Table from '@/components/table/Table';
import TableBody from '@/components/table/TableBody';
import TableData from '@/components/table/TableData';
import TableHead from '@/components/table/TableHead';
import TableRow from '@/components/table/TableRow';
import { useDataContext } from '@/context/dataContext';

const ProductEditShippingInfo = () => {
  const { data } = useDataContext();
  const product = data.product;

  return (
    <Table className='border border-separate border-gray-3'>
      <TableBody>
        <TableRow>
          <TableHead>Is this product shipped from the European Union</TableHead>
          <TableData>{product?.isShippedFromEU ? 'Yes' : 'No'}</TableData>
        </TableRow>
      </TableBody>
    </Table>
  );
};

export default ProductEditShippingInfo;
