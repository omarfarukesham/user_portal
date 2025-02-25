import Form from '@/components/form/Form';
import FormInput from '@/components/form/FormInput';
import Modal from '@/components/modal/Modal';
import Button from '@/components/ui/Button';

const ActionViewModal = ({ isOpen, setIsOpen, actionData }) => {
  const closeModal = () => {
    setIsOpen(false);
  };

  return (
    <Modal
      isOpen={isOpen}
      setIsOpen={setIsOpen}
      className='flex flex-col gap-5 p-5 max-w-[500px]'
    >
      <p className='text-center text-xl font-bold'> View Action</p>
      <Form
        showErrorToast={false}
        stopPropagation={true}
        defaultValues={actionData}
        className='flex-1 flex flex-col gap-10'
      >
        <FormInput
          name='name'
          label='Name'
          disabled
          validations={{ required: 'Please Write the  name' }}
        />
        <FormInput name='displayName' label='Display Name' disabled />
        <FormInput name='api' label='Api End Point' disabled />
        <FormInput name='methods' label='Methods' />
        <FormInput name='permissionName' label='Permission' />
        <FormInput name='status' label='Status' />

        <div className='flex justify-center gap-5'>
          <>
            <div className='flex justify-center gap-3 mt-5'>
              <Button
                type='button'
                onClick={closeModal}
                className='bg-primary hover:bg-secondary hover:text-white'
              >
                Close
              </Button>
            </div>
          </>
        </div>
      </Form>
    </Modal>
  );
};

export default ActionViewModal;
