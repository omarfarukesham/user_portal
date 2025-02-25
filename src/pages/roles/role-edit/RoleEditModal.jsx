import Form from '@/components/form/Form';
import FormInput from '@/components/form/FormInput';
import FormDropdown from '@/components/form/form-dropdown/FormDropdown';
import Modal from '@/components/modal/Modal';
import Button from '@/components/ui/Button';
import { useEditRole } from '@/services/roles/useRole';
import { toast } from 'react-toastify';

const RoleEditModal = ({ isOpen, setIsOpen, defaultData }) => {
  const { mutate } = useEditRole();
  // console.log(defaultData);

  const editUser = (data) => {
    // console.log(data);
    mutate(
      {
        ...data,
      },
      {
        onSuccess: () => {
          toast.success('Successfully updated');
          setIsOpen(false);
        },
        onError: (error) => {
          toast.error(error.message);
        },
      },
    );
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
      <p className='text-center my-2 text-xl font-bold'>Edit User Role</p>
      <Form
        showErrorToast={false}
        onSubmit={editUser}
        stopPropagation={true}
        defaultValues={defaultData}
        className='flex-1 flex flex-col gap-10'
      >
        <FormInput
          name='name'
          label='Name'
          validations={{ required: 'Please Write the  name' }}
        />
        <FormInput name='displayName' label='Display Name' />

        <FormDropdown name='status' label='Status' options={statusOptions} />

        <div className='flex justify-center gap-5'>
          <>
            <div className='flex justify-center gap-3 mt-5'></div>
            <div className='flex justify-center gap-3 mt-5'>
              <Button
                type='submit'
                className='bg-secondary hover:bg-primary hover:text-white'
              >
                Confirm
              </Button>
            </div>
          </>
        </div>
      </Form>
    </Modal>
  );
};

export default RoleEditModal;
