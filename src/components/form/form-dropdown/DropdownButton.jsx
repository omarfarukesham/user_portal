import { twMerge } from 'tailwind-merge';

const DropdownButton = ({
  variant,
  className,
  handleDropdownClick,
  children,
  isAnyItemSelected,
}) => {
  return (
    <button
      type='button'
      className={twMerge(
        'flex items-center px-2 text-[14px] leading-none rounded overflow-hidden w-full border border-gray-4',
        isAnyItemSelected ? 'py-[4.5px]' : 'py-2',
        variant === 'default' && 'bg-white',
        variant === 'outlined' && '',
        className,
      )}
      onClick={handleDropdownClick}
    >
      {children}
    </button>
  );
};
export default DropdownButton;
