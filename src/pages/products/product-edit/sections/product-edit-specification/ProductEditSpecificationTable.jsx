import Table from '@/components/table/Table';
import TableBody from '@/components/table/TableBody';
import TableData from '@/components/table/TableData';
import TableRow from '@/components/table/TableRow';

const ProductEditSpecificationTable = ({ specifications }) => {
  return (
    <Table className='border border-separate border-gray-3'>
      <TableBody>
        {specifications?.map((specification, index) => (
          <TableRow key={specification.title + index}>
            <TableData>
              Name: <br />
              Title: <br />
              Description: <br />
            </TableData>
            <TableData>
              {specification?.name} <br />
              {specification?.title} <br />
              {specification?.description} <br />
            </TableData>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
};

export default ProductEditSpecificationTable;
