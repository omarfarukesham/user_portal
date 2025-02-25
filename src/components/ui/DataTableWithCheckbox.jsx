import useTableColumnsWithCheckbox from '@/hooks/useTableColumnsWithCheckbox';
import { DataTable } from '@alphaui/core';

const DataTableWithCheckbox = ({
  columns,
  selectedItems,
  setSelectedItems,
  onSelect,
  onRemove,
  toggleOnItemClick = false,
  onRowClick,
  ...rest
}) => {
  const { columnsWithCheckbox, handleSelection } = useTableColumnsWithCheckbox({
    columns,
    data: rest.data,
    selectedItems,
    setSelectedItems,
    onSelect,
    onRemove,
  });

  if (!columns?.length) return 'No column selected for table';
  if (!rest.data) return 'No `data` prop provided in table';
  if (!selectedItems) return 'No `selectedItems` prop provided in table';
  if (!setSelectedItems) return 'No `setSelectedItems` prop provided in table';

  return (
    <DataTable
      columns={columnsWithCheckbox}
      onRowClick={(row) => {
        if (toggleOnItemClick) {
          handleSelection(row);
        }
        onRowClick?.(row);
      }}
      {...rest}
    />
  );
};

export default DataTableWithCheckbox;
