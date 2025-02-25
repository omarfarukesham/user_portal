import { useFormContext } from 'react-hook-form';
import { twMerge } from 'tailwind-merge';
import FormSelectionNestedOption from './FormSelectionNestedOption';
import FormSelectionNestedOptions from './FormSelectionNestedOptions';

const FormSelectionNestedOptionsContainer = ({
  optionsClassName,
  restServiceHook,
  restFilters,
  name,
  labelKey,
  valueKey,
  rootOption,
  setSelectedOption = () => null,
  setIsOpen = () => null,
  onChange,
}) => {
  const { setValue } = useFormContext();
  const handleOptionClick = (item) => {
    setSelectedOption({
      label: item[labelKey],
      value: item[valueKey],
    });
    setValue(name, item[valueKey]);
    setIsOpen(false);
    onChange(item);
  };

  return (
    <div
      className={twMerge(
        'absolute z-20 bg-white rounded shadow min-w-[10rem] w-full max-h-[300px] overflow-auto',
        optionsClassName,
      )}
    >
      {rootOption && (
        <FormSelectionNestedOption
          className='text-[14px] text-gray-5 p-2'
          onClick={() => handleOptionClick(rootOption)}
        >
          {rootOption[labelKey]}
        </FormSelectionNestedOption>
      )}
      <FormSelectionNestedOptions
        name={name}
        labelKey={labelKey}
        valueKey={valueKey}
        restServiceHook={restServiceHook}
        restFilters={restFilters}
        rootOption={rootOption}
        handleOptionClick={handleOptionClick}
      />
    </div>
  );
};

export default FormSelectionNestedOptionsContainer;
