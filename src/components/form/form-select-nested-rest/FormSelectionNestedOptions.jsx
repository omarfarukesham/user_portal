import ArrowRightIcon from '@/assets/icons/ArrowRightIcon';
import PageError from '@/components/layout/PageError';
import LoadingSpinner from '@/components/ui/LoadingSpinner';
import { useState } from 'react';
import { useFormContext } from 'react-hook-form';
import FormSelectionNestedOption from './FormSelectionNestedOption';

const FormSelectionNestedOptions = ({
  restServiceHook,
  restFilters,
  name,
  labelKey,
  valueKey,
  handleOptionClick,
}) => {
  const { getValues } = useFormContext();
  const selectedOptionValue = getValues(name);

  const filters = { perPage: 1000, page: 1, ...restFilters };
  const { data, error, isFetching } = restServiceHook(filters);

  // eslint-disable-next-line react-hooks/exhaustive-deps
  const items = data?.items || [];

  const [parentId, setParentId] = useState();
  return (
    <div className='flex'>
      <div className='flex-1'>
        {isFetching && <LoadingSpinner message='Loading List' />}
        {!isFetching &&
          items.map((item) => (
            <FormSelectionNestedOption
              key={item.id}
              isSelected={item[valueKey] === selectedOptionValue}
              isExpanded={item[valueKey] === parentId}
              className='flex'
            >
              <div
                className='flex-1 p-2'
                onClick={() => handleOptionClick(item)}
              >
                {item[labelKey]}
              </div>
              <button
                type='button'
                className='p-2'
                onClick={() => setParentId(item[valueKey])}
              >
                <ArrowRightIcon />
              </button>
            </FormSelectionNestedOption>
          ))}
        {!isFetching && items && !items.length && (
          <FormSelectionNestedOption className='cursor-default text-[14px] text-gray-4'>
            No Child Item Found
          </FormSelectionNestedOption>
        )}
        {!isFetching && error && <PageError message={error?.message} />}
      </div>
      {parentId && (
        <FormSelectionNestedOptions
          className='flex-1'
          name={name}
          labelKey={labelKey}
          valueKey={valueKey}
          restServiceHook={restServiceHook}
          restFilters={{ parentCategoryId: parentId }}
          handleOptionClick={handleOptionClick}
        />
      )}
    </div>
  );
};

export default FormSelectionNestedOptions;
