import { twMerge } from 'tailwind-merge';

const FormSelectionNestedSelectedOptionContainer = ({
  className,
  handleDropdownClick,
  children,
}) => {
  return (
    <button
      type='button'
      className={twMerge(
        'flex items-center text-[14px] leading-none rounded overflow-hidden w-full min-h-[36px] px-2 border border-gray-4',
        className,
      )}
      onClick={handleDropdownClick}
    >
      {children}
    </button>
  );
};

export default FormSelectionNestedSelectedOptionContainer;
