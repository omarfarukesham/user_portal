import NoDataFound from '@/components/layout/NoDataFound';
import DataTable from '@/components/table/data-table/DataTable';
import brandsTableColumns from './productsTableColumns';

const ProductsTable = ({ data }) => {
  const columns = brandsTableColumns;

  return (
    <div className='h-full flex flex-col overflow-auto'>
      <DataTable columns={columns} data={data} />
      {data.length === 0 && <NoDataFound />}
    </div>
  );
};

export default ProductsTable;
