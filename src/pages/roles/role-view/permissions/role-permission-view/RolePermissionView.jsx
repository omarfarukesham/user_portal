import CollapsibleSection from '@/components/ui/CollapsibleSection';
import RolePermissionViewActions from './RolePermissionViewActions';
import RolePermissionViewPermissions from './RolePermissionViewPermissions';
import RolePermissionViewPortals from './RolePermissionViewPortals';

const RolePermissionView = ({ rolePermission }) => {
  const { portals = [], permissions = [] } = rolePermission ?? {};

  return (
    <section className='grid gap-10'>
      <CollapsibleSection title='Portals'>
        <RolePermissionViewPortals portals={portals} />
      </CollapsibleSection>

      <CollapsibleSection title='Permissions'>
        <RolePermissionViewPermissions
          portals={portals}
          permissions={permissions}
        />
      </CollapsibleSection>

      <CollapsibleSection title='Actions'>
        <RolePermissionViewActions rolePermission={rolePermission} />
      </CollapsibleSection>
    </section>
  );
};

export default RolePermissionView;
