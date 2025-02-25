import CrossIcon from '@/assets/icons/CrossIcon';

const FormSelectionNestedSelectedOption = ({
  selectedOption,
  removeOption,
  placeholder,
}) => {
  const handleRemoveOption = (e) => {
    e.stopPropagation();
    removeOption();
  };

  return (
    <div className='flex flex-1'>
      {selectedOption?.label ? (
        <div className='shadow h-6 pl-2 bg-gray-1 rounded flex items-center justify-between gap-2 overflow-hidden whitespace-nowrap'>
          {selectedOption?.label}
          <div
            className='hover:bg-danger w-5 h-full p-1 group'
            onClick={handleRemoveOption}
          >
            <CrossIcon className='w-2 h-full fill-black mx-auto group-hover:fill-white' />
          </div>
        </div>
      ) : (
        <span className='text-gray-4'>{placeholder}</span>
      )}
    </div>
  );
};

export default FormSelectionNestedSelectedOption;
