import Form from '@/components/form/Form';
import FormInput from '@/components/form/FormInput';
import Modal from '@/components/modal/Modal';
import Button from '@/components/ui/Button';
import resetPasswordSchema from '@/services/schema/resetPasswordSchema';
import { useUpdateUserPassword } from '@/services/user/useUser';
import { toast } from 'react-toastify';

// eslint-disable-next-line no-unused-vars
const ChangePasswordModal = ({ isOpen, setIsOpen, data }) => {
  const { isLoading, mutate } = useUpdateUserPassword();

  const updatePassword = (formData) => {
    mutate(
      {
        userId: data.id,
        ...formData,
      },
      {
        onSuccess: () => {
          toast.success('Successfully Password updated');
          setIsOpen(false);
        },
        onError: (error) => {
          toast.error(error.message);
        },
      },
    );
  };

  return (
    <Modal
      isOpen={isOpen}
      setIsOpen={setIsOpen}
      className='flex flex-col gap-5 p-8 max-w-[400px]'
    >
      <p className='text-center  my-2'>Change Password</p>
      <Form
        showErrorToast={false}
        schema={resetPasswordSchema}
        onSubmit={updatePassword}
        stopPropagation={true}
        className='flex-1 flex flex-col gap-5'
      >
        <FormInput name='password' label='Password' type='password' />
        <FormInput
          name='confirmPassword'
          label='Confirm Password'
          type='password'
        />

        <div className='flex justify-center mt-5'>
          <Button type='submit' loading={isLoading}>
            Change
          </Button>
        </div>
      </Form>
    </Modal>
  );
};
export default ChangePasswordModal;
