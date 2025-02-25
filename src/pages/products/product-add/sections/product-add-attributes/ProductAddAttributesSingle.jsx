import FormDropdown from '@/components/form/form-dropdown/FormDropdown';
import { useFormContext } from 'react-hook-form';

const ProductAddAttributesSingle = ({ attribute, languageCode, index }) => {
  const { setValue } = useFormContext();
  const label = attribute?.labels[languageCode];
  const options =
    attribute?.options[languageCode]?.map((e) => ({ label: e, value: e })) ||
    [];

  if (!label || !options.length) return null;

  setValue(`attributes.${languageCode}[${index}].label`, label);

  return (
    <div>
      <FormDropdown
        label={label}
        name={`attributes.${languageCode}[${index}].options`}
        options={options}
        validations={{ required: 'Please select an option' }}
        isMulti={true}
      />
    </div>
  );
};

export default ProductAddAttributesSingle;
