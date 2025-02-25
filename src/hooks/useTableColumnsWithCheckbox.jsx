import mergeAndRemoveDuplicateObjects from '@/utilities/mergeNremoveDuplicateObj';
import { Checkbox } from '@alphaui/core';
import { useEffect, useState } from 'react';

const useTableColumnsWithCheckbox = ({
  columns,
  data,
  selectedItems,
  setSelectedItems,
  onSelect,
  onRemove,
}) => {
  const [columnsWithCheckbox, setColumnsWithCheckbox] = useState(columns);

  const handleSelection = (row) => {
    const isSelected = !!selectedItems.find((item) => item.id === row.id);
    if (isSelected) {
      setSelectedItems(selectedItems.filter((item) => row.id !== item.id));
      onRemove?.(row);
    } else {
      setSelectedItems([...selectedItems, row]);
      onSelect?.(row);
    }
  };

  useEffect(() => {
    const handleAllSelect = () => {
      if (isAllSelected) {
        const newSelectedItems = selectedItems.filter(
          (item) => !data?.find((i) => i.id === item.id),
        );
        setSelectedItems(newSelectedItems);
      } else {
        const newSelectedItems = mergeAndRemoveDuplicateObjects(
          selectedItems,
          data,
        );
        setSelectedItems(newSelectedItems);
      }
    };

    const isAllSelected = data?.every((item) =>
      selectedItems.find((i) => i.id === item.id),
    );

    setColumnsWithCheckbox([
      {
        label: <Checkbox checked={isAllSelected} onChange={handleAllSelect} />,
        content: (_, row) => (
          <Checkbox
            checked={!!selectedItems.find((item) => item.id === row.id)}
            onChange={() => handleSelection(row)}
          />
        ),
      },
      ...columns,
    ]);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [columns, data]);

  return { columnsWithCheckbox, handleSelection };
};

export default useTableColumnsWithCheckbox;
