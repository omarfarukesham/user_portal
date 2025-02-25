import { useEffect } from 'react';
import { useFormContext } from 'react-hook-form';
import { twMerge } from 'tailwind-merge';

/**
 * FormInputField component.
 *
 * @component
 * @param {string} name - The name of the input field.
 * @param {object} validations - The validation rules of react-hook-form (optional).
 * @param {string} className - The additional class names for styling (optional).
 * @param {any} props... - Additional props to be spread on the input element.
 * @returns {JSX.Element} - The rendered FormInputField component.
 */
const FormInputField = ({
  name,
  validations = {},
  shouldUnregisterOnUnmount = false,
  className,
  ...props
}) => {
  const { register, unregister } = useFormContext();

  useEffect(() => {
    return () => shouldUnregisterOnUnmount && unregister(name);
  }, [name, shouldUnregisterOnUnmount, unregister]);

  return (
    <input
      {...register(name, validations)}
      id={name}
      className={twMerge(
        'text-label border border-gray-4 rounded px-3 py-2 h-9 w-full outline-none',
        className,
      )}
      {...props}
    />
  );
};

export default FormInputField;
