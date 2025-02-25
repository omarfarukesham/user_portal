import Form from '@/components/form/Form';
import FormInput from '@/components/form/FormInput';
import FormDropdownRest from '@/components/form/form-dropdown-rest/FormDropdownRest';
import FormDropdown from '@/components/form/form-dropdown/FormDropdown';
import Modal from '@/components/modal/Modal';
import Button from '@/components/ui/Button';
import LoadingSpinner from '@/components/ui/LoadingSpinner';
import { useEditAction } from '@/services/actions/useAction';
import { useGetPermissions } from '@/services/permissions/usePermissions';
import { toast } from 'react-toastify';

const ActionEditFormModal = ({ isOpen, setIsOpen, actionData }) => {
  const { isLoading, mutate } = useEditAction();

  const editAction = (formData) => {
    // console.log(formData);
    mutate(
      {
        ...formData,
      },
      {
        onSuccess: () => {
          toast.success('Successfully Actions has created');
          setIsOpen(false);
        },
        onError: (error) => {
          toast.error(error.message);
        },
      },
    );
  };

  const closeModal = () => {
    setIsOpen(false);
  };

  const optionsDropdown = [
    { label: 'Active', value: 'ACTIVE' },
    { label: 'InActive', value: 'INACTIVE' },
  ];

  const methodOptions = [
    { label: 'GET', value: 'GET' },
    { label: 'POST', value: 'POST' },
    { label: 'PUT', value: 'PUT' },
    { label: 'PATCH', value: 'PATCH' },
    { label: 'DELETE', value: 'DELETE' },
  ];

  return (
    <Modal
      isOpen={isOpen}
      setIsOpen={setIsOpen}
      className='flex flex-col gap-5 p-5 max-w-[500px] max-h-[80vh] overflow-hidden'
    >
      <p className='text-center text-xl font-bold'> Edit Action</p>
      <Form
        showErrorToast={false}
        onSubmit={editAction}
        stopPropagation={true}
        defaultValues={actionData}
        className='flex-1 flex flex-col gap-10 overflow-auto'
      >
        <FormInput
          name='name'
          label='Name'
          validations={{ required: 'Please Write the  name' }}
        />

        <FormInput name='displayName' label='Display Name' />
        <FormInput name='api' label='Api End Point' />

        <FormDropdown
          name='methods'
          label='Methods'
          isMulti={true}
          valueKey='methods'
          options={methodOptions}
          placeholder='Methods like - GET, POST'
        />
        <FormDropdownRest
          name='permissionId'
          label='Permission'
          restServiceHook={useGetPermissions}
        />
        <FormDropdown name='status' label='Status' options={optionsDropdown} />

        <div className='flex justify-center gap-5'>
          <>
            <div className='flex justify-center gap-3 mt-5'>
              <Button type='submit' disabled={isLoading}>
                {isLoading ? <LoadingSpinner /> : 'Confirm'}
              </Button>
            </div>
            <div className='flex justify-center gap-3 mt-5'>
              <Button
                onClick={closeModal}
                className='bg-secondary hover:bg-primary hover:text-white'
              >
                Cancel
              </Button>
            </div>
          </>
        </div>
      </Form>
    </Modal>
  );
};

export default ActionEditFormModal;
