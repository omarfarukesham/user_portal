import FlagLabel from '../ui/FlagLabel';
import FormError from './FormError';
import FormInputField from './FormInputField';

/**
 * FormInput component.
 *
 * @component
 * @param {Object} props
 * @param {string} props.label - The label for the input field (optional).
 * @param {string} props.name - The name of the input field.
 * @param {Object} props.validations - The validation rules of react-hook-form (optional).
 * @param {string} props.className - The additional class names for styling the input field (optional).
 * @param {string} props.containerClassName - The additional class names for styling container div (optional).
 * @param {any} props... - Additional props to be spread on the FormInputField component.
 * @returns {JSX.Element} - The rendered FormInput component.
 */
const FormInputWithFlag = ({
  label,
  name,
  validations = {},
  className,
  labelClassName,
  containerClassName,
  languageCode,
  currencyCode,
  rightLabel = languageCode || currencyCode,
  ...props
}) => {
  return (
    <div className={`text-label ${containerClassName}`}>
      {label && (
        <label
          className={`text-label block mb-2.5 relative ${labelClassName}`}
          htmlFor={name}
        >
          {label}{' '}
          {validations?.required && <span className='text-danger'>*</span>}
        </label>
      )}

      <div className='relative flex items-center'>
        {(languageCode || currencyCode) && (
          <FlagLabel
            languageCode={languageCode}
            currencyCode={currencyCode}
            className='absolute w-10 h-10 left-3'
          />
        )}
        <FormInputField
          className={`pl-8 ${className}`}
          validations={validations}
          name={name}
          {...props}
        />
        {rightLabel && (
          <div className='absolute right-3 text-gray-4'>{rightLabel}</div>
        )}
      </div>

      <FormError name={name} />
    </div>
  );
};

export default FormInputWithFlag;
