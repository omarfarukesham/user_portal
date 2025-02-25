import Form from '@/components/form/Form';
import FormInput from '@/components/form/FormInput';
import FormDropdownRest from '@/components/form/form-dropdown-rest/FormDropdownRest';
import FormDropdown from '@/components/form/form-dropdown/FormDropdown';
import Modal from '@/components/modal/Modal';
import Button from '@/components/ui/Button';
import { useGetPortals } from '@/services/portals/usePortals';
import removeUndefinedKeys from '@/utilities/removeUndefinedKeys';

const PermissionsFiltersModal = ({
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

  const statusOptions = [
    { label: 'Active', value: 'ACTIVE' },
    { label: 'Inactive', value: 'INACTIVE' },
  ];

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
            <FormInput name='name' label='Name' placeholder='Name' />
            <FormInput
              name='displayName'
              label='Display Name'
              placeholder='Display Name'
            />
            <FormInput name='path' label='Path' placeholder='Paths' />
            <FormDropdown
              name='status'
              label='Status'
              options={statusOptions}
            />
            <FormDropdownRest
              name='portalId'
              label='Select Portal'
              restServiceHook={useGetPortals}
            />
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

export default PermissionsFiltersModal;
