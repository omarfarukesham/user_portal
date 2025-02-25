import Table from '@/components/table/Table';
import TableBody from '@/components/table/TableBody';
import TableData from '@/components/table/TableData';
import TableHead from '@/components/table/TableHead';
import TableRow from '@/components/table/TableRow';

const ProductViewAttributesList = ({ attributes }) => {
  return (
    <Table className='border border-separate border-gray-3'>
      <TableBody>
        {attributes?.map((attribute, index) => (
          <TableRow key={attribute.label + index}>
            <TableHead className='w-40'>{attribute.label}</TableHead>
            <TableData>{attribute.options?.join(', ')}</TableData>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
};

export default ProductViewAttributesList;
