import { useState } from 'react';
import { useFormContext } from 'react-hook-form';

const useDropdownSelectedOptions = ({
  isMulti = false,
  options = [],
  name = '',
  defaultOptions = [],
}) => {
  const { getValues } = useFormContext();

  const getDefaultValue = () => {
    const formValue = getValues(name);

    if (defaultOptions.length) {
      return defaultOptions;
    }

    if (formValue) {
      return isMulti
        ? options.filter((option) => formValue.includes(option.value))
        : options.filter((option) => option.value === formValue);
    }

    return [];
  };

  const [selectedOptions, setSelectedOptions] = useState(getDefaultValue());

  return { selectedOptions, setSelectedOptions };
};

export default useDropdownSelectedOptions;
