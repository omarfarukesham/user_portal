import FakeInput from '@/components/form/FakeInput';
import Form from '@/components/form/Form';
import FormInput from '@/components/form/FormInput';
import FormSwitch from '@/components/form/FormSwitch';
import FormDropdownRest from '@/components/form/form-dropdown-rest/FormDropdownRest';
import PageInnerContainer from '@/components/layout/PageInnerContainer';
import Button from '@/components/ui/Button';
import { useGetRoles } from '@/services/roles/useRole';
import { useEditUser, useGetUser } from '@/services/user/useUser';
import { useParams } from 'react-router-dom';
import { toast } from 'react-toastify';

const UserEditForm = () => {
  const { id } = useParams();
  const { data } = useGetUser(id);

  const { isLoading, mutate } = useEditUser();
  const handleSubmit = (formData) => {
    mutate(
      {
        userType: 'ADMIN',
        ...formData,
      },
      {
        onSuccess: () => {
          toast.success('Successfully updated');
        },
        onError: (error) => {
          toast.error(error.message);
        },
      },
    );
  };

  const defaultValues = {
    id: data?.id,
    email: data?.email,
    userFullName: data?.userFullName,
    phone: data?.phone,
    isVerified: data?.isVerified,
    callingCode: data?.callingCode,
    activated: data?.activated,
    personName: data?.personName,
    roleId: data?.roleId,
  };
  return (
    <PageInnerContainer className='flex flex-col'>
      <Form
        defaultValues={defaultValues}
        onSubmit={handleSubmit}
        stopPropagation={true}
        className='flex-1 flex flex-col gap-8 overflow-auto p-5'
      >
        <FakeInput
          label='Username'
          value={data?.username}
          className='bg-white'
        />
        <FormInput name='userFullName' label='User Full Name' />
        <FormInput name='email' label='Email' />

        <FormDropdownRest
          name='roleId'
          label='Role'
          restServiceHook={useGetRoles}
          validations={{ required: 'Please assign a role for this user' }}
        />

        <div className='grid grid-cols-2 gap-10'>
          <FormSwitch name='isVerified' label='User Verified' />
          <FormSwitch name='activated' label='Activated' className='bg-white' />
        </div>
        <FormInput name='phone' label='Phone' />
        <FormInput name='callingCode' label='Calling Code' />

        <div className='flex justify-center mt-10'>
          <Button type='submit' loading={isLoading}>
            Save
          </Button>
        </div>
      </Form>
    </PageInnerContainer>
  );
};

export default UserEditForm;
