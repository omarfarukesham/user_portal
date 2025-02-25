import Form from '@/components/form/Form';
import FormInput from '@/components/form/FormInput';
import FormDropdown from '@/components/form/form-dropdown/FormDropdown';
import Modal from '@/components/modal/Modal';
import Button from '@/components/ui/Button';
import LoadingSpinner from '@/components/ui/LoadingSpinner';
import { useAddRole } from '@/services/roles/useRole';
import { toast } from 'react-toastify';

const RoleAddFormModal = ({ isOpen, setIsOpen }) => {
  const { isLoading, mutate } = useAddRole();

  const addRole = (data) => {
    // console.log(data);
    mutate(
      {
        ...data,
      },
      {
        onSuccess: () => {
          toast.success('Successfully has created');
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
  const statusOptions = [
    { label: 'Active', value: 'ACTIVE' },
    { label: 'Inactive', value: 'INACTIVE' },
  ];

  return (
    <Modal
      isOpen={isOpen}
      setIsOpen={setIsOpen}
      className='flex flex-col gap-5 p-5 max-w-[500px]'
    >
      <p className='text-center my-2 text-xl font-bold'> Add User Role</p>
      <Form
        showErrorToast={false}
        onSubmit={addRole}
        stopPropagation={true}
        // schema={addAdminUserSchema}
        className='flex-1 flex flex-col gap-10'
      >
        <FormInput
          name='name'
          label='Name'
          validations={{ required: 'Please Write the  name' }}
        />
        <FormInput name='displayName' label='Display Name' />
        {/* <FormDropdownRest
          name='permissionIds'
          label='Permission Ids'
          isMulti={true}
          restServiceHook={useGetPermissions}
        /> */}
        <FormDropdown name='status' label='Status' options={statusOptions} />
        <div className='flex justify-center gap-5'>
          <>
            <div className='flex justify-center gap-3 mt-5'>
              <Button type='submit' disabled={isLoading}>
                {isLoading ? <LoadingSpinner /> : 'Confirm'}
              </Button>
            </div>
            <div className='flex justify-center gap-3 mt-5'>
              <Button
                type='submit'
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

export default RoleAddFormModal;
