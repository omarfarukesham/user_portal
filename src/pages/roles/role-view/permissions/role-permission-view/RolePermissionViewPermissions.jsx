import Dropdown from '@/components/form/Dropdown';
import { DataTable } from '@alphaui/core';
import { useState } from 'react';

const RolePermissionViewPermissions = ({ portals, permissions }) => {
  const [activePortal, setActivePortal] = useState(null);

  const columns = [
    { label: 'Permission Name', key: 'displayName' },
    { label: 'ID', key: 'id' },
    {
      label: 'Icon',
      key: 'icon',
      content: (url) =>
        url ? (
          <img src={url} alt='Portal icon' className='w-6 h-6 mr-3 md:mr-10' />
        ) : (
          '-'
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

  // intentionally keeping no 'key' property for 'All' items, to treat it as 'no active portal'
  const portalOptions = [{ label: 'All' }].concat(
    portals?.map((portal) => ({
      label: portal.displayName,
      id: portal.id,
    })),
  );

  // if there is an active portal, then the permissions of that portal
  // otherwise all permissions
  const permissionsToShow = !activePortal?.id
    ? permissions
    : permissions.filter(
        (permission) => permission.portalId === activePortal?.id,
      );

  return (
    <section>
      <Dropdown
        options={portalOptions}
        title='Select A Portal'
        variant='outlined'
        onChange={(option) => setActivePortal(option)}
        className='mb-5'
      />

      <div className='h-96 overflow-y-auto'>
        <DataTable columns={columns} data={permissionsToShow} />
      </div>
    </section>
  );
};

export default RolePermissionViewPermissions;
