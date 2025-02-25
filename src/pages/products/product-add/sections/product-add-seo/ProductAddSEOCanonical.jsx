import FormDropdown from '@/components/form/form-dropdown/FormDropdown';
import FormInput from '@/components/form/FormInput';
import { useWatch } from 'react-hook-form';

const ProductAddSEOCanonical = () => {
  const selectedOption = useWatch({
    name: 'canonical',
  });

  const canonicalOptions = [
    { label: 'Default', value: 'default' },
    { label: 'Custom (URL)', value: 'custom' },
  ];

  return (
    <div className='grid gap-5'>
      <FormDropdown
        label='Canonical URL'
        name='seoInfo.canonical'
        options={canonicalOptions}
      />

      {selectedOption === 'custom' && (
        <FormInput
          label='URL'
          name='seoInfo.canonicalUrl'
          className='appear'
          shouldUnregisterOnUnmount={true}
        />
      )}
    </div>
  );
};

export default ProductAddSEOCanonical;
