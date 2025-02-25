import DataTableWithCheckbox from '@/components/ui/DataTableWithCheckbox';
import { useGetActions } from '@/services/actions/useAction';

const RoleViewManageActionsTable = ({
  selectedPermission,
  selectedActions,
  setSelectedActions,
  onActionSelect,
  onActionRemove,
}) => {
  const { data: { items: actions } = {} } = useGetActions(
    {
      permissionId: selectedPermission?.id,
    },
    { enabled: !!selectedPermission?.id },
  );

  const actionTableColumns = [
    { label: 'ID', key: 'id' },
    { label: 'Name', key: 'displayName' },
    { label: 'API', key: 'api' },
    { label: 'Methods', key: 'methods' },
  ];

  return (
    <div className='overflow-y-scroll'>
      {!!actions?.length && (
        <DataTableWithCheckbox
          columns={actionTableColumns}
          data={actions}
          selectedItems={selectedActions}
          setSelectedItems={setSelectedActions}
          onSelect={onActionSelect}
          onRemove={onActionRemove}
        />
      )}

      <p className='text-gray-6 my-5'>
        {!selectedPermission?.id
          ? 'Please select a portal and a permission to see actions'
          : !actions?.length && 'No Action found for the selected permission'}
      </p>
    </div>
  );
};

export default RoleViewManageActionsTable;
