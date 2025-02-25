import { twMerge } from 'tailwind-merge';

const FormSelectionNestedOption = ({
  children,
  isSelected,
  isExpanded,
  className,
  ...props
}) => {
  return (
    <div
      className={twMerge(
        'cursor-pointer hover:bg-bg-color text-label flex items-center gap-2',
        isExpanded && 'bg-bg-color-2',
        isSelected && 'bg-bg-color',
        className,
      )}
      {...props}
    >
      {children}
    </div>
  );
};

export default FormSelectionNestedOption;
