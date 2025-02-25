import Table from '../table/Table';
import TableBody from '../table/TableBody';
import TableData from '../table/TableData';
import TableRow from '../table/TableRow';

const NoDataFoundTable = ({ message = 'No Data Found' }) => {
  return (
    <Table className='border border-separate border-gray-3'>
      <TableBody>
        <TableRow>
          <TableData className='text-center'>{message}</TableData>
        </TableRow>
      </TableBody>
    </Table>
  );
};

export default NoDataFoundTable;
