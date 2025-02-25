import CrossIcon from '@/assets/icons/CrossIcon';
import DeleteIcon from '@/assets/icons/DeleteIcon';
import FormInput from '@/components/form/FormInput';
import Button from '@/components/ui/Button';
import { useEffect } from 'react';
import { useFieldArray, useFormContext } from 'react-hook-form';

const SingleSpecification = ({ index, removeSpecification }) => {
  const {
    formState: { errors },
  } = useFormContext();

  const {
    fields: specificationRow,
    append: appendSpecificationRow,
    remove: removeSpecificationRow,
  } = useFieldArray({
    name: `specification[${index}].row`,
    shouldUnregister: true,
  });

  useEffect(() => {
    appendSpecificationRow({ name: '', description: '' });
  }, [appendSpecificationRow]);

  const specificationError = errors.specification?.[index];

  return (
    <div className='shadow py-8 px-10 rounded-lg relative'>
      <Button
        onClick={() => removeSpecification(index)}
        variant='table-action'
        className='absolute top-5 right-5 hover:bg-danger group'
      >
        <CrossIcon className=' fill-primary w-3 h-3 group-hover:fill-white' />
      </Button>

      <FormInput
        label='Specification Title'
        name={`specification[${index}].title`}
        className={specificationError?.title && 'border-danger'}
      />

      <div className='mt-3'>
        {specificationRow.map((row, rowIndex) => {
          const rowError = specificationError?.row?.[rowIndex];

          return (
            <div key={row.id} className='flex items-end gap-5 mt-2'>
              <FormInput
                label='Name'
                name={`specification[${index}].row[${rowIndex}].name`}
                className={rowError?.name && 'border-danger'}
              />
              <FormInput
                label='Description'
                name={`specification[${index}].row[${rowIndex}].description`}
                containerClassName='grow'
                className={rowError?.description && 'border-danger'}
              />
              <Button
                variant='table-action'
                className='hover:bg-danger p-0 w-8 h-8'
                onClick={() => removeSpecificationRow(index)}
              >
                <DeleteIcon className='fill-primary w-4 h-4' />
              </Button>
            </div>
          );
        })}
      </div>
      <Button
        type='button'
        variant='outlined'
        className='mt-5'
        onClick={() => appendSpecificationRow({ name: '', description: '' })}
      >
        + Add Row
      </Button>
    </div>
  );
};

export default SingleSpecification;
