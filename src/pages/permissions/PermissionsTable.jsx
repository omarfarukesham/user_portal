import NoDataFound from '@/components/layout/NoDataFound';
import DataTable from '@/components/table/data-table/DataTable';
import PermissionsActionBtn from './PermissionsActionBtn';
// import RolesActionBtn from './RolesActionBtn';

const PermissionsTable = ({ data }) => {
  const columns = [
    {
      label: 'Serial',
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
    {
      label: 'Icon',
      key: 'icon',
      content: (icon) => {
        return <img src={icon} alt='icon' className='w-8 h-8' />;
      },
    },
    {
      label: 'Path',
      key: 'path',
    },
    {
      label: 'Status',
      key: 'status',
    },
    {
      label: 'ActionIds',
      key: 'actionIds',
    },
    {
      label: <div className='text-center'>Action</div>,
      content: (_, data) => <PermissionsActionBtn data={data} />,
    },
  ];

  return (
    <div className='h-full flex flex-col overflow-auto'>
      <DataTable columns={columns} data={data} />
      {data.length === 0 && <NoDataFound />}
    </div>
  );
};

export default PermissionsTable;
