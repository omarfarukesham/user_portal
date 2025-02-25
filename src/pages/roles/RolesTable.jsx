import NoDataFound from '@/components/layout/NoDataFound';
import DataTable from '@/components/table/data-table/DataTable';
import RolesActionBtn from './RolesActionBtn';

const RolesTable = ({ data }) => {
  // console.log(data);
  const columns = [
    {
      label: 'SL No.',
      key: 'serial',
    },
    {
      label: 'Name',
      key: 'name',
    },
    {
      label: 'Display Name',
      key: 'displayName',
    },

    // {
    //   label: 'Permission Id',
    //   key: 'permissionIds',
    // },
    {
      label: 'Status',
      key: 'status',
    },
    {
      label: <div className='text-center'>Action</div>,
      content: (_, data) => <RolesActionBtn data={data} />,
    },
  ];

  return (
    <div className='h-full flex flex-col overflow-auto'>
      <DataTable columns={columns} data={data} />
      {data.length === 0 && <NoDataFound />}
    </div>
  );
};

export default RolesTable;
