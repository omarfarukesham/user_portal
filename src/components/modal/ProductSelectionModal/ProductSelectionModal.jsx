import Modal from '@/components/modal/Modal';
import { useState } from 'react';
import ProductSelectionModalData from './ProductSelectionModalData';
import ProductSelectionModalFilters from './ProductSelectionModalFilters';
import ProductSelectionModalHeader from './ProductSelectionModalHeader';

const ProductSelectionModal = ({
  isOpen,
  setIsOpen,
  selectedProductIds = [],
  onSave = () => null,
}) => {
  const [selectedIds, setSelectedIds] = useState(selectedProductIds);
  const [isFilterOpen, setIsFilterOpen] = useState(false);

  const defaultFilters = {
    page: 1,
    perPage: 20,
  };
  const [filters, setFilters] = useState(defaultFilters);

  // Changing the filter base on user interaction
  const handleFilterChange = (newFilters) => {
    setFilters({
      ...filters,
      ...newFilters,
    });
  };

  // Apply the filters
  const applyFilters = (newFilters) => {
    setFilters(newFilters);
  };

  // Clearing the filters
  const clearFilters = () => {
    setFilters(defaultFilters);
  };

  return (
    <Modal
      isOpen={isOpen}
      setIsOpen={setIsOpen}
      className='h-[700px] max-h-[90%] flex flex-col overflow-hidden'
    >
      <ProductSelectionModalHeader
        isFilterOpen={isFilterOpen}
        setIsFilterOpen={setIsFilterOpen}
      />

      {!!isFilterOpen && (
        <ProductSelectionModalFilters
          filters={filters}
          applyFilters={applyFilters}
          clearFilters={clearFilters}
          setIsFilterOpen={setIsFilterOpen}
        />
      )}

      {!isFilterOpen && (
        <ProductSelectionModalData
          filters={filters}
          handleFilterChange={handleFilterChange}
          selectedIds={selectedIds}
          setSelectedIds={setSelectedIds}
          onSave={onSave}
          setIsOpen={setIsOpen}
        />
      )}
    </Modal>
  );
};

export default ProductSelectionModal;
