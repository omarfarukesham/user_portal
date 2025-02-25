import Form from '@/components/form/Form';
import FormInput from '@/components/form/FormInput';
import FormDropdownRest from '@/components/form/form-dropdown-rest/FormDropdownRest';
import Modal from '@/components/modal/Modal';
import Button from '@/components/ui/Button';
import { useGetPermissions } from '@/services/permissions/usePermissions';

const RoleViewModal = ({ isOpen, setIsOpen, defaultData }) => {
  const handleForm = () => {
    // console.log(data);
  };
  const closeModal = () => {
    setIsOpen(false);
  };

  return (
    <Modal
      isOpen={isOpen}
      setIsOpen={setIsOpen}
      className='flex flex-col gap-5 p-5 max-w-[500px]'
    >
      <p className='text-center my-2 text-xl font-bold'> View Role</p>
      <Form
        showErrorToast={false}
        onSubmit={handleForm}
        stopPropagation={true}
        defaultValues={defaultData}
        className='flex-1 flex flex-col gap-10'
      >
        <FormInput
          name='name'
          label='Name'
          disabled
          validations={{ required: 'Please Write the  name' }}
        />
        <FormInput name='displayName' label='Display Name' disabled />
        {/* <FormInput name='permissionIds' label='Permission Ids' /> */}
        <FormDropdownRest
          name='permissionIds'
          label='Permission Ids'
          labelKey='displayName'
          isMulti={true}
          restServiceHook={useGetPermissions}
        />
        <FormInput name='status' label='Status' disabled />
        <div className='flex justify-center gap-5'>
          <>
            <div className='flex justify-center gap-3 mt-5'>
              <Button
                type='submit'
                onClick={closeModal}
                className='bg-secondary hover:bg-primary hover:text-white'
              >
                Done
              </Button>
            </div>
          </>
        </div>
      </Form>
    </Modal>
  );
};

export default RoleViewModal;
