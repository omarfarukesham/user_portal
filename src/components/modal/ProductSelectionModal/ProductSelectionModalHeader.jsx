import Button from '@/components/ui/Button';

const ProductSelectionModalHeader = ({ isFilterOpen, setIsFilterOpen }) => {
  return (
    <div className='py-5 flex gap-3 items-center justify-center border-b border-gray-4'>
      <div className='text-lg'>Select Products</div>
      <Button
        variant='outlined'
        size='small'
        onClick={() => setIsFilterOpen((prev) => !prev)}
      >
        {isFilterOpen ? 'Hide' : 'Show'} Filters
      </Button>
    </div>
  );
};

export default ProductSelectionModalHeader;
