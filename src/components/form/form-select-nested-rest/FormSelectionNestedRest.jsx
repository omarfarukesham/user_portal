import useOutsideClick from '@/hooks/useClickOutside';
import { useEffect, useState } from 'react';
import { useFormContext } from 'react-hook-form';
import FormError from '../FormError';
import FormLabel from '../FormLabel';
import DropdownArrowIcon from '../form-dropdown/DropdownArrowIcon';
import FormSelectionNestedOptionsContainer from './FormSelectionNestedOptionsContainer';
import FormSelectionNestedSelectedOption from './FormSelectionNestedSelectedOption';
import FormSelectionNestedSelectedOptionContainer from './FormSelectionNestedSelectedOptionContainer';

const FormSelectionNestedRest = ({
  name,
  validations,
  label,
  selectedOption: selectedOptionGiven,
  placeholder = 'Select Option',
  shouldUnregisterOnUnmount,
  restServiceHook,
  restFilters = { isRootCategory: true },
  className,
  labelKey = 'name',
  valueKey = 'id',
  rootOption,
  onChange = () => null,
}) => {
  const { register, unregister, setValue } = useFormContext();

  useEffect(() => {
    return () => shouldUnregisterOnUnmount && unregister(name);
  }, [name, shouldUnregisterOnUnmount, unregister]);

  useEffect(() => {
    register(name, {
      ...validations,
    });
  }, [name, register, validations]);

  const [isOpen, setIsOpen] = useState(false);
  const formSelectionRef = useOutsideClick(() => setIsOpen(false));
  const [selectedOption, setSelectedOption] = useState(selectedOptionGiven);

  const removeOption = () => {
    setValue(name, '');
    setSelectedOption(null);
  };
  return (
    <div ref={formSelectionRef} className='relative'>
      <FormLabel label={label} validations={validations} />
      <FormSelectionNestedSelectedOptionContainer
        className={className}
        handleDropdownClick={() => setIsOpen(!isOpen)}
      >
        <FormSelectionNestedSelectedOption
          selectedOption={selectedOption}
          placeholder={placeholder}
          removeOption={removeOption}
        />
        <DropdownArrowIcon isOpen={isOpen} />
      </FormSelectionNestedSelectedOptionContainer>
      {isOpen && (
        <FormSelectionNestedOptionsContainer
          name={name}
          labelKey={labelKey}
          valueKey={valueKey}
          restServiceHook={restServiceHook}
          restFilters={restFilters}
          setIsOpen={setIsOpen}
          setSelectedOption={setSelectedOption}
          rootOption={rootOption}
          onChange={onChange}
        />
      )}
      <FormError name={name} />
    </div>
  );
};

export default FormSelectionNestedRest;
