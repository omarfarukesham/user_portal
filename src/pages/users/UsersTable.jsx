import NoDataFound from '@/components/layout/NoDataFound';
import DataTable from '@/components/table/data-table/DataTable';
import usersTableColumns from './UsersTableColumns';

const UsersTable = ({ data }) => {
  const columns = usersTableColumns;

  return (
    <div className='h-full flex flex-col overflow-auto'>
      <DataTable columns={columns} data={data} />
      {data.length === 0 && <NoDataFound />}
    </div>
  );
};

export default UsersTable;
