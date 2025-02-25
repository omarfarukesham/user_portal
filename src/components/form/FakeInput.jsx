import { twMerge } from 'tailwind-merge';

const FakeInput = ({
  label,
  value,
  className,
  labelClassName,
  containerClassName,
  required = false,
}) => {
  return (
    <div className={containerClassName}>
      <label
        className={twMerge('text-label block mb-2.5 relative', labelClassName)}
      >
        {label} {required && <span className='text-danger'>*</span>}
      </label>

      <div
        className={twMerge(
          'text-label border border-gray-4 rounded px-3 py-2 h-9 w-full ',
          className,
        )}
      >
        {value}
      </div>
    </div>
  );
};

export default FakeInput;
