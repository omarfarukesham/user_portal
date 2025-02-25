import InfoIcon from '@/assets/icons/InfoIcon';
import Form from '@/components/form/Form';
import FormInput from '@/components/form/FormInput';
import FormSwitch from '@/components/form/FormSwitch';
import FormTextarea from '@/components/form/FormTextarea';
import FormDropdown from '@/components/form/form-dropdown/FormDropdown';
import PageError from '@/components/layout/PageError';
import Button from '@/components/ui/Button';
import CollapsibleSection from '@/components/ui/CollapsibleSection';
import { useDataContext } from '@/context/dataContext';
import { metaRobotRulesOptions } from '@/services/fake/formData';
import { useUpdateProduct } from '@/services/product/productService';
import { toast } from 'react-toastify';

const ProductEditSEO = () => {
  const { data } = useDataContext();
  const { isLoading, error, mutate } = useUpdateProduct();

  const handleEdit = (formData) => {
    mutate(formData, {
      onSuccess: () => {
        toast.success('Successfully updated');
      },
      onError: (error) => {
        toast.error(error.message);
      },
    });
  };

  const defaultValues = {
    id: data?.product?.id,
    seoInfo: data?.product?.seoInfo,
  };

  return (
    <CollapsibleSection
      icon={InfoIcon}
      title='SEO'
      isCollapsible={false}
      className='m-10 my-5'
    >
      <Form
        defaultValues={defaultValues}
        onSubmit={handleEdit}
        className='grid gap-5'
      >
        <FormInput name='seoInfo.urlKey' label='URL key' />
        <FormInput name='seoInfo.metaTitle' label='Meta Title' />
        <FormInput name='seoInfo.metaKeywords' label='Meta Keywords' />
        <FormTextarea name='seoInfo.metaDescription' label='Meta Description' />

        <FormDropdown
          name='seoInfo.metaRobotRule'
          label='Meta Robot Rule'
          options={metaRobotRulesOptions}
        />

        <div className='grid grid-cols-2 gap-5'>
          <FormSwitch
            name='seoInfo.isIncludeInHtmlMap'
            label='Include in HTML Map'
          />
          <FormSwitch
            name='seoInfo.isUseInCrossLinking'
            label='Use in Cross Linking'
          />
        </div>

        <FormInput
          name='crossDomainMarketCode'
          label='Cross Domain Market Code'
        />
        <FormInput name='crossDomainUrl' label='Cross Domain URL' />
        <FormInput name='canonicalUrl' label='Canonical URL' />
        <FormInput name='openGraphImageUrl' label='Open Graph Image URL' />

        <div className='flex justify-center'>
          <Button variant='secondary' loading={isLoading} type='submit'>
            Update
          </Button>
        </div>

        <PageError message={error?.message} />
      </Form>
    </CollapsibleSection>
  );
};

export default ProductEditSEO;
