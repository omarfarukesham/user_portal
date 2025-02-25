import PageInnerContainer from '@/components/layout/PageInnerContainer';
import Table from '@/components/table/Table';
import TableBody from '@/components/table/TableBody';
import TableData from '@/components/table/TableData';
import TableHead from '@/components/table/TableHead';
import TableRow from '@/components/table/TableRow';

const PermissionViewTable = ({ data }) => {
  return (
    <PageInnerContainer className='p-8'>
      <Table className='border border-separate border-gray-2'>
        <TableBody>
          <TableRow>
            <TableHead>Name</TableHead>
            <TableData>{data?.name}</TableData>
          </TableRow>

          <TableRow>
            <TableHead>Display Name</TableHead>
            <TableData>{data?.displayName}</TableData>
          </TableRow>
          <TableRow>
            <TableHead>Icon </TableHead>
            <TableData>
              <img src={data?.icon} alt='icon' className='w-8 h-8' />
            </TableData>
          </TableRow>
          <TableRow>
            <TableHead>Path</TableHead>
            <TableData>{data?.path}</TableData>
          </TableRow>
          <TableRow>
            <TableHead>Portal</TableHead>
            <TableData>{data?.portalName}</TableData>
          </TableRow>
          <TableRow>
            <TableHead>Position</TableHead>
            <TableData>{data?.position}</TableData>
          </TableRow>
          <TableRow>
            <TableHead>Visibilities</TableHead>
            <TableData>{data?.visibilities.map((v) => `${v}, `)}</TableData>
          </TableRow>
        </TableBody>
      </Table>
    </PageInnerContainer>
  );
};

export default PermissionViewTable;
