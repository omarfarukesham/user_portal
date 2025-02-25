import FormDropdown from '@/components/form/form-dropdown/FormDropdown';

const ProductAddAttributesSingleSelection = ({
  label,
  attribute,
  name,
  options,
  setValue,
}) => {
  const handleOnChange = (data) => {
    // Setting the value as array for non multi selection
    if (attribute.inputType !== 'MULTI_SELECT' && data[0]) {
      setValue(name, [data[0].value]);
    }
  };

  return (
    <FormDropdown
      label={label + `${attribute.isVariant ? ' (Variant)' : ''}`}
      name={name}
      options={options}
      validations={
        attribute.isRequired
          ? { required: `Please select option for ${label}` }
          : {}
      }
      isMulti={attribute.inputType === 'MULTI_SELECT'}
      onChange={handleOnChange}
    />
  );
};

export default ProductAddAttributesSingleSelection;
