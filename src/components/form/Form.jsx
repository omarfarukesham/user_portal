import findValue from '@/utilities/findValue';
import { joiResolver } from '@hookform/resolvers/joi';
import { useEffect } from 'react';
import { FormProvider, useForm } from 'react-hook-form';
import { toast } from 'react-toastify';

const Form = ({
  onSubmit,
  defaultValues,
  errors,
  className,
  schema,
  mode = 'onChange',
  children,
  showErrorToast = false,
  stopPropagation = false,
}) => {
  const methods = useForm({
    defaultValues: defaultValues || {},
    mode,
    ...(schema && { resolver: joiResolver(schema) }),
  });

  useEffect(() => {
    methods.reset(defaultValues);
  }, [defaultValues, methods]);

  // Manual errors set through props
  useEffect(() => {
    if (errors) {
      const keys = Object.keys(errors);
      keys.forEach((key) =>
        methods.setError(key, {
          type: 'manual',
          message: errors[key],
        }),
      );
    }
  }, [errors, methods]);

  useEffect(() => {
    if (Object.keys(methods.formState.errors)?.length) {
      // eslint-disable-next-line no-console
      console.log(methods.formState.errors);
      if (showErrorToast) {
        const message = findValue(methods.formState.errors, 'message');
        toast.error(message);
      }
    }
  }, [methods.formState, showErrorToast]);

  const handleSubmit = (event) => {
    if (stopPropagation) {
      event.stopPropagation();
    }
    return methods.handleSubmit(onSubmit)(event);
  };

  return (
    <FormProvider {...methods}>
      <form onSubmit={handleSubmit} className={className}>
        {children}
      </form>
    </FormProvider>
  );
};

export default Form;
