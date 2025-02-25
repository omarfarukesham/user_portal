import DataTable from '@/components/table/data-table/DataTable';
import productEditVariantTableColumns from './productEditVariantTableColumns';

const ProductEditVariantTable = ({ productVariants }) => {
  const columns = productEditVariantTableColumns;

  return (
    <div>
      <DataTable data={productVariants} columns={columns} />
    </div>
  );
};

export default ProductEditVariantTable;
