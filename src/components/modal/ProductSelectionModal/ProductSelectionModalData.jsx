import PageError from '@/components/layout/PageError';
import Button from '@/components/ui/Button';
import LoadingSpinner from '@/components/ui/LoadingSpinner';
import Pagination from '@/components/ui/Pagination';
import { useGetProducts } from '@/services/product/productService';
import { useEffect } from 'react';
import ProductSelectionModalTable from './ProductSelectionModalTable';

const ProductSelectionModalData = ({
  filters,
  handleFilterChange,
  selectedIds,
  setSelectedIds,
  setIsOpen,
  onSave,
}) => {
  const { data, error, isFetching, refetch } = useGetProducts(filters);
  useEffect(() => {
    refetch(filters);
  }, [filters, refetch]);

  const handleSave = () => {
    onSave(selectedIds);
    setIsOpen(false);
  };

  return (
    <>
      {isFetching && <LoadingSpinner />}
      {!isFetching && data.items && !error && (
        <ProductSelectionModalTable
          data={data.items}
          selectedIds={selectedIds}
          setSelectedIds={setSelectedIds}
        />
      )}
      {!isFetching && error && <PageError message={error.message} />}

      <div className='px-5 py-4 flex gap-3 flex-wrap-reverse justify-between'>
        <Button variant='secondary' size='slim' onClick={handleSave}>
          Save
        </Button>

        <Pagination
          page={filters.page}
          perPage={filters.perPage}
          paginate={data?.paginate}
          onChange={handleFilterChange}
        />
      </div>
    </>
  );
};

export default ProductSelectionModalData;
