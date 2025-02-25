import DataTable from '@/components/table/data-table/DataTable';
import Checkbox from '@/components/ui/Checkbox';

const ProductSelectionModalTable = ({
  data: products,
  selectedIds,
  setSelectedIds,
}) => {
  const handleSelection = (id) => {
    if (selectedIds.includes(id)) {
      setSelectedIds(selectedIds.filter((e) => id !== e));
    } else {
      setSelectedIds([...selectedIds, id]);
    }
  };

  const productIds = products.map((p) => p.id);
  const isAllSelected = productIds.every((id) => selectedIds.includes(id));

  const handleAllSelect = () => {
    if (isAllSelected) {
      const newSelectedIds = selectedIds.filter(
        (id) => !productIds.includes(id),
      );
      setSelectedIds(newSelectedIds);
    } else {
      const newSelectedIds = Array.from(
        new Set([...selectedIds, ...productIds]),
      );
      setSelectedIds(newSelectedIds);
    }
  };

  const columns = [
    {
      label: <Checkbox checked={isAllSelected} onChange={handleAllSelect} />,
      key: 'id',
      content: (id) => (
        <Checkbox
          checked={selectedIds.includes(id)}
          onChange={() => handleSelection(id)}
        />
      ),
    },
    {
      label: 'SKU',
      key: 'sku',
    },
    {
      label: 'Name',
      key: 'name',
    },
  ];

  return (
    <div className='flex-1 overflow-auto'>
      <DataTable
        data={products}
        columns={columns}
        onRowClick={(product) => handleSelection(product.id)}
      />
    </div>
  );
};

export default ProductSelectionModalTable;
