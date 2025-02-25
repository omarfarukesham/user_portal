import DataTable from '@/components/table/data-table/DataTable';
import productViewVariantTableColumns from './productViewVariantTableColumns';

const ProductViewVariantTable = ({ productVariants }) => {
  const columns = productViewVariantTableColumns;

  return <DataTable data={productVariants} columns={columns} />;
};

export default ProductViewVariantTable;
