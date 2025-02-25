import Modal from '@/components/modal/Modal';
import DataTable from '@/components/table/data-table/DataTable';
import Button from '@/components/ui/Button';
import Checkbox from '@/components/ui/Checkbox';
import Search from '@/components/ui/Search';
import { getProducts } from '@/services/fake/fakeProductService';
import { useEffect, useMemo, useState } from 'react';
import ProductAddProductCheckbox from './ProductAddProductCheckbox';

const ProductAddSelectProductsModal = ({
  isOpen,
  setIsOpen,
  selectedProds,
  setSelectedProds,
}) => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const productsWithCheckbox = getProducts().map((product) => {
      product.isSelected = false;
      return product;
    });
    setProducts(productsWithCheckbox);
  }, []);

  const columns = useMemo(
    () => [
      {
        label: (
          //* select all checkbox
          <Checkbox
            checked={products.length === selectedProds.length}
            onChange={(e) => {
              if (e.target.checked) {
                setSelectedProds(products);
              } else {
                setSelectedProds([]);
              }
            }}
          />
        ),
        key: 'isSelected',
        content: (_, row) => {
          return (
            <ProductAddProductCheckbox
              product={row}
              selectedProds={selectedProds}
              setSelectedProds={setSelectedProds}
            />
          );
        },
      },
      { label: 'Name', key: 'name' },
      { label: 'SKU', key: 'sku' },
    ],
    [products, selectedProds, setSelectedProds],
  );

  return (
    <Modal
      isOpen={isOpen}
      setIsOpen={setIsOpen}
      className='p-5 flex flex-col gap-5 max-h-[60vh] overflow-hidden'
    >
      <h3 className='text-xl font-bold text-gray-9'>Select Product(s)</h3>

      <hr className='border-gray-5' />

      <div className='flex'>
        <Search />
      </div>

      <div className='flex-1 overflow-scroll'>
        <DataTable columns={columns} data={products} />
      </div>

      <hr className='border-gray-5' />

      <Button className='w-fit ml-auto' onClick={() => setIsOpen(false)}>
        Ok
      </Button>
    </Modal>
  );
};

export default ProductAddSelectProductsModal;
