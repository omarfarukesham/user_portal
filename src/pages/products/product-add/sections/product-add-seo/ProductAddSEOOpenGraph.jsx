import FormDropdown from '@/components/form/form-dropdown/FormDropdown';
import FormInput from '@/components/form/FormInput';
import { useWatch } from 'react-hook-form';

const ProductAddSEOOpenGraph = () => {
  const selectedOption = useWatch({
    name: 'openGraph',
  });

  const openGraphOptions = [
    { label: 'Default', value: 'default' },
    { label: 'Custom', value: 'custom' },
  ];

  return (
    <div className='grid gap-5'>
      <FormDropdown
        label='Open Graph'
        name='seoInfo.openGraph'
        options={openGraphOptions}
      />

      {selectedOption === 'custom' && (
        <FormInput
          label='Text'
          name='seoInfo.openGraphImageUrl'
          className='appear'
          shouldUnregisterOnUnmount={true}
        />
      )}
    </div>
  );
};

export default ProductAddSEOOpenGraph;
