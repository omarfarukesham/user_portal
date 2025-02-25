import Table from '@/components/table/Table';
import TableBody from '@/components/table/TableBody';
import TableData from '@/components/table/TableData';
import TableHead from '@/components/table/TableHead';
import TableHeader from '@/components/table/TableHeader';
import TableRow from '@/components/table/TableRow';

const tableColumns = [{ label: 'Name' }, { label: 'Value' }];

const RoleViewBasicTab = ({ role }) => {
  return (
    <Table>
      <TableHeader>
        {tableColumns.map((column) => (
          <TableHead key={column.label}>{column.label}</TableHead>
        ))}
      </TableHeader>

      <TableBody>
        {Object.entries(role).map(([key, value]) => (
          <TableRow key={key}>
            <TableData>{key}</TableData>
            <TableData>{value}</TableData>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
};

export default RoleViewBasicTab;
