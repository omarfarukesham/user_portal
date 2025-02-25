import FormInput from '@/components/form/FormInput';

const ProductAddAttributesSingleCustom = ({
  label,
  attribute,
  name,
  setValue,
}) => {
  const handleOnChange = (data) => {
    const value = [data?.target?.value || ''];
    setValue(name, value);
  };

  return (
    <FormInput
      label={label + `${attribute.isVariant ? ' (Variant)' : ''}`}
      name='stringInput'
      validations={
        attribute.isRequired
          ? { required: `Please select option for ${label}` }
          : {}
      }
      placeholder='Image link, custom input, etc...'
      onChange={handleOnChange}
    />
  );
};

export default ProductAddAttributesSingleCustom;
