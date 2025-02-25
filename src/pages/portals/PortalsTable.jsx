import NoDataFound from '@/components/layout/NoDataFound';
import DataTable from '@/components/table/data-table/DataTable';
import PortalsTableBtn from './PortalsTableBtn';
// import ActionsTableBtn from './ActionsTableBtn';
// import RolesActionBtn from './RolesActionBtn';

const PortalsTable = ({ data }) => {
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
    {
      label: 'Path',
      key: 'path',
    },
    {
      label: 'Icon',
      key: 'icon',
      content: (icon) => {
        return <img src={icon} alt='icon' className='w-8 h-8' />;
      },
    },
    {
      label: 'Role Id',
      key: 'roleIds',
    },
    {
      label: 'Status',
      key: 'status',
    },
    {
      label: <div className='text-center'>Action</div>,
      content: (_, data) => <PortalsTableBtn data={data} />,
    },
  ];

  return (
    <div className='h-full flex flex-col overflow-auto'>
      <DataTable columns={columns} data={data} />
      {data.length === 0 && <NoDataFound />}
    </div>
  );
};

export default PortalsTable;
