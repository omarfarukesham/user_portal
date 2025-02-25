import jsonpath from 'jsonpath';
import { useFormContext } from 'react-hook-form';

const FormError = ({ name }) => {
  const {
    formState: { errors },
  } = useFormContext();

  if (!name) return null;

  const errorField = jsonpath.query(errors, name);
  const error = errorField[0];

  if (!error?.message) return null;
  return <p className='text-label text-danger'>{error.message}</p>;
};

export default FormError;
