import Table from '@/components/table/Table';
import TableBody from '@/components/table/TableBody';
import TableData from '@/components/table/TableData';
import TableHead from '@/components/table/TableHead';
import TableRow from '@/components/table/TableRow';

const ProductViewSpecificationTable = ({ specifications }) => {
  return (
    <Table className='border border-separate border-gray-3'>
      <TableBody>
        {specifications?.map((spec, index) => (
          <TableRow key={spec.title + index}>
            <TableHead>{spec?.title}</TableHead>
            <TableData className='grid gap-1'>
              {spec.values?.map((value, index) => (
                <div key={value.name + index} className='flex gap-1'>
                  <div>{value.name}:</div>
                  <div className='font-light'>{value.description}</div>
                </div>
              ))}
            </TableData>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
};

export default ProductViewSpecificationTable;
