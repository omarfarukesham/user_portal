import { DataTable } from '@alphaui/core';

const RolePermissionViewPortals = ({ portals }) => {
  const portalColumns = [
    { label: 'Portal Name', key: 'displayName' },
    { label: 'ID', key: 'id' },
    {
      label: 'Icon',
      key: 'icon',
      content: (url) => (
        <img src={url} alt='Portal icon' className='mr-3 md:mr-10' />
      ),
    },
    { label: 'Path', key: 'path' },
    {
      label: 'Visibilities',
      key: 'visibilities',
      content: (visibilities) => {
        return visibilities.map((visibility, index) => (
          <button
            key={index}
            className='inline-block bg-success/50 hover:bg-secondary text-white text-xs  py-1 px-4 rounded-full mr-2'
          >
            {visibility}
          </button>
        ));
      },
    },
    { label: 'Position', key: 'position' },
  ];

  return (
    <section className='h-96 w-full overflow-auto'>
      <DataTable columns={portalColumns} data={portals} />
    </section>
  );
};

export default RolePermissionViewPortals;
