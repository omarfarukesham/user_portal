import Form from '@/components/form/Form';
import FormInput from '@/components/form/FormInput';
import FormUploadContentService from '@/components/form/FormUploadContentService';
import FormDropdownRest from '@/components/form/form-dropdown-rest/FormDropdownRest';
import FormDropdown from '@/components/form/form-dropdown/FormDropdown';
import PageInnerContainer from '@/components/layout/PageInnerContainer';
import Button from '@/components/ui/Button';
import LoadingSpinner from '@/components/ui/LoadingSpinner';
import { ROLE_PERMISSION_VISIBILITY_OPTIONS } from '@/configuration/constants';
import { useDirectUploadContent } from '@/services/content/contentService';
import { useEditPermission } from '@/services/permissions/usePermissions';
import { useGetPortals } from '@/services/portals/usePortals';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';

const PermissionEditForm = ({ defaultData }) => {
  const { isLoading, mutate } = useEditPermission();

  const navigate = useNavigate();
  const addPermission = (data) => {
    mutate(
      {
        ...data,
      },
      {
        onSuccess: () => {
          toast.success('Successfully Updated');
          navigate('/admin/permissions');
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
    <PageInnerContainer className='p-4 flex flex-col'>
      <Form
        showErrorToast={false}
        onSubmit={addPermission}
        defaultValues={defaultData}
        stopPropagation={true}
        className='flex-1 flex flex-col gap-10 overflow-auto no-scrollbar p-5'
      >
        <div className='grid grid-cols-2 gap-5'>
          <FormInput
            name='name'
            label='Name'
            placeholder='PRODUCT'
            validations={{ required: 'Please Write the  name' }}
          />
          <FormInput
            name='displayName'
            label='Display Name'
            placeholder='Product'
            validations={{
              required: 'How do you want to view this in the menu?',
            }}
          />

          <FormInput
            name='position'
            label='Position'
            placeholder='0'
            validations={{
              valueAsNumber: true,
              required:
                'Please give a position (this is for showing them in a certain order in the menu)',
            }}
          />
          <FormInput
            name='path'
            label='Path'
            placeholder='/admin/portals'
            validations={{
              required:
                'When a user clicks on a portal we need to send him to a path (e.g. /admin/portals).',
            }}
          />
        </div>

        <FormDropdownRest
          name='portalId'
          label='Portal'
          restServiceHook={useGetPortals}
          validations={{
            required: 'What is the parent portal of this permission',
          }}
        />

        <div className='grid gap-3'>
          <FormUploadContentService
            name='icon'
            label='Upload an Icon'
            className='w-24 h-20'
            restServiceHook={useDirectUploadContent}
            restData={{ fileType: 'ICON' }}
            validations={{ required: 'Please upload an icon' }}
          />
          <FormInput
            name='icon'
            label='Or a previously uploaded icon URL'
            placeholder='https://alipo-mp.s3.ap-southeast-1.amazonaws.com/images/generic-icon/docker.svg'
          />
        </div>

        {/* <FormInput name='actionIds' label='Action Ids' /> */}

        <div className='grid grid-cols-2 gap-5'>
          <FormDropdown
            name='visibilities'
            isMulti
            label='Where Should It Be Visible?'
            options={ROLE_PERMISSION_VISIBILITY_OPTIONS}
            className='bg-white'
          />
          <FormDropdown
            name='status'
            label='Status'
            options={statusOptions}
            validations={{ required: 'Select a Status' }}
            className='bg-white'
          />
        </div>

        <div className='flex justify-center gap-5'>
          <Button type='submit' disabled={isLoading}>
            {isLoading ? <LoadingSpinner /> : 'Confirm'}
          </Button>
        </div>
      </Form>
    </PageInnerContainer>
  );
};

export default PermissionEditForm;
