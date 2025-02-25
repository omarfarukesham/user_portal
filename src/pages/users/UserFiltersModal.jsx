import Form from '@/components/form/Form';
import FormInput from '@/components/form/FormInput';
import Modal from '@/components/modal/Modal';
import Button from '@/components/ui/Button';
import removeUndefinedKeys from '@/utilities/removeUndefinedKeys';

const UserFiltersModal = ({
  isOpen,
  setIsOpen,
  filters,
  applyFilters,
  clearFilters,
}) => {
  const filtersData = {
    ...filters,
  };

  const handleApplyFilters = (data) => {
    // console.log(data);
    applyFilters(removeUndefinedKeys(data));
    setIsOpen(false);
  };

  const handleClearFilters = () => {
    clearFilters();
    setIsOpen(false);
  };

  return (
    <Modal
      isOpen={isOpen}
      setIsOpen={setIsOpen}
      className='flex flex-col gap-10 p-10'
    >
      <Form
        onSubmit={handleApplyFilters}
        defaultValues={filtersData}
        className='flex-1 flex flex-col gap-10'
      >
        <div className='flex-1'>
          <div className='grid md:grid-cols-2 gap-x-10 gap-y-6'>
            <FormInput
              name='username'
              label='Username'
              placeholder='Username'
            />
            <FormInput name='email' label='Email' placeholder='Email' />
            <FormInput name='phone' label='Phone' placeholder='Phone' />
            {/* <FormDropdown
              name='userType'
              label='User Type'
              options={USER_TYPES}
            /> */}
          </div>
        </div>
        <div className='flex justify-center gap-5'>
          <Button type='submit' className='text-white border-white'>
            Apply Filters
          </Button>
          <Button
            onClick={handleClearFilters}
            variant='secondary'
            className='text-white border-white'
          >
            Clear Filters
          </Button>
        </div>
      </Form>
    </Modal>
  );
};

export default UserFiltersModal;
