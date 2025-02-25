import CrossIcon from '@/assets/icons/CrossIcon';
import DeleteIcon from '@/assets/icons/DeleteIcon';
import FormInput from '@/components/form/FormInput';
import FormTextarea from '@/components/form/FormTextarea';
import Button from '@/components/ui/Button';
import { useFieldArray, useFormContext } from 'react-hook-form';

const ProductAddSpecificationSingle = ({
  languageCode,
  index,
  removeSpecification,
}) => {
  const {
    formState: { errors },
  } = useFormContext();

  const {
    fields: specificationValues,
    append: appendSpecificationRow,
    remove: removeSpecificationRow,
  } = useFieldArray({
    name: `specifications.${languageCode}[${index}].values`,
  });

  const specificationError = errors.specifications?.[languageCode]?.[index];

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
        label='Title'
        name={`specifications.${languageCode}[${index}].title`}
        className={specificationError?.title && 'border-danger'}
      />

      <div className='mt-3'>
        {specificationValues.map((row, rowIndex) => {
          const rowError = specificationError?.values?.[rowIndex];

          return (
            <div key={row.id} className='flex gap-5 mt-2'>
              <FormInput
                label='Name'
                name={`specifications.${languageCode}[${index}].values[${rowIndex}].name`}
                className={rowError?.name && 'border-danger'}
              />
              <div className='flex-1'>
                <FormTextarea
                  label='Description'
                  name={`specifications.${languageCode}[${index}].values[${rowIndex}].description`}
                  containerClassName='grow'
                  className={rowError?.description && 'border-danger'}
                />
              </div>
              <Button
                variant='table-action'
                className='self-center hover:bg-danger p-0 w-8 h-8 group'
                onClick={() => removeSpecificationRow(index)}
              >
                <DeleteIcon className='fill-primary w-4 h-4 group-hover:fill-white' />
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

export default ProductAddSpecificationSingle;
