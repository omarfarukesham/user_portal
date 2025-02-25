import Modal from '@/components/modal/Modal';
import DataTable from '@/components/table/data-table/DataTable';
import LoadingSpinner from '@/components/ui/LoadingSpinner';
import { useGetRelevantProduct } from '@/services/product/relevantProductService';

const ProductViewRelatedProductsModal = ({
  isOpen,
  setIsOpen,
  title,
  relevantProductId,
}) => {
  const { data, isFetching } = useGetRelevantProduct(relevantProductId);

  const columns = [
    {
      label: 'Serial',
      key: 'serial',
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
    <Modal
      isOpen={isOpen}
      setIsOpen={setIsOpen}
      className='flex flex-col h-[700px]'
    >
      <div className='text-center p-5 text-lg border-b border-gray-4'>
        {title}
      </div>
      {isFetching && <LoadingSpinner />}
      {!isFetching && (
        <div className='flex-1 overflow-auto'>
          <DataTable data={data.relevantProducts} columns={columns} />
        </div>
      )}
    </Modal>
  );
};

export default ProductViewRelatedProductsModal;
