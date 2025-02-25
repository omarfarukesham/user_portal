import DeleteIcon from '@/assets/icons/DeleteIcon';
import DataTable from '@/components/table/data-table/DataTable';
import Button from '@/components/ui/Button';
import { useEffect, useState } from 'react';
import { useFormContext } from 'react-hook-form';
import ProductAddSelectProductsModal from './ProductAddSelectProductsModal';

const ProductAddRecommendedProducts = () => {
  const [showProdModal, setShowProdModal] = useState(false);
  const [selectedProds, setSelectedProds] = useState([]);

  const { setValue, register } = useFormContext();

  useEffect(() => {
    register('recommendedProducts');
  }, [register]);

  useEffect(() => {
    setValue(
      'recommendedProducts',
      selectedProds.map((prod) => prod.sku),
    );
  }, [selectedProds, setValue]);

  const columns = [
    { label: 'SKU', key: 'sku' },
    { label: 'Product Name', key: 'name' },
    {
      label: 'Action',
      key: 'action',
      content: (_, row) => (
        <Button
          variant='table-action'
          onClick={() =>
            setSelectedProds(
              selectedProds.filter((prod) => prod.sku !== row.sku),
            )
          }
        >
          <DeleteIcon />
        </Button>
      ),
    },
  ];

  return (
    <div>
      <div className='grid gap-3 border-b border-gray-4 py-10'>
        <div className='flex gap-3'>
          <h6 className='flex-1'>Recommended Product</h6>

          <Button
            variant='outlined'
            onClick={() => setShowProdModal(true)}
            className='hover:bg-primary hover:text-white'
          >
            + Add Product
          </Button>
        </div>
        <p>
          A recommended / up-sell item is offered to the customer as a pricier
          or higher - quality alternative to the product the customer is looking
          at.
        </p>
      </div>

      {selectedProds?.length ? (
        <DataTable columns={columns} data={selectedProds} />
      ) : (
        ''
      )}

      <ProductAddSelectProductsModal
        isOpen={showProdModal}
        setIsOpen={setShowProdModal}
        selectedProds={selectedProds}
        setSelectedProds={setSelectedProds}
      />
    </div>
  );
};

export default ProductAddRecommendedProducts;
