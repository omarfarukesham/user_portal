import NoDataFound from '@/components/layout/NoDataFound';
import DataTable from '@/components/table/data-table/DataTable';
import ActionsTableBtn from './ActionsTableBtn';
// import RolesActionBtn from './RolesActionBtn';

const ActionsTable = ({ data }) => {
  const renderMethods = (methods) => {
    return methods.map((method, index) => (
      <button
        key={index}
        className='inline-block bg-success/50 hover:bg-secondary text-white text-xs  py-1 px-4 rounded-full mr-2'
      >
        {method}
      </button>
    ));
  };
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
      label: 'Methods',
      key: 'methods',
      content: (_, data) => renderMethods(data.methods),
    },
    {
      label: 'End Points',
      key: 'api',
    },
    {
      label: 'Status',
      key: 'status',
    },
    {
      label: <div className='text-center'>Action</div>,
      content: (_, data) => <ActionsTableBtn data={data} />,
    },
  ];

  return (
    <div className='h-full flex flex-col overflow-auto'>
      <DataTable columns={columns} data={data} />
      {data.length === 0 && <NoDataFound />}
    </div>
  );
};

export default ActionsTable;
