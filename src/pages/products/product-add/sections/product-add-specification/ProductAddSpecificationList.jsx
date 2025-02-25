import Button from '@/components/ui/Button';
import { useFieldArray } from 'react-hook-form';
import ProductAddSpecificationSingle from './ProductAddSpecificationSingle';

const ProductAddSpecificationList = ({ languageCode }) => {
  const {
    fields,
    append: appendSpecification,
    remove: removeSpecification,
  } = useFieldArray({
    name: `specifications.${languageCode}`,
  });

  return (
    <>
      <div className='flex flex-col gap-7 my-7'>
        {fields.map((field, index) => {
          return (
            <ProductAddSpecificationSingle
              key={field.title + index}
              languageCode={languageCode}
              index={index}
              removeSpecification={removeSpecification}
            />
          );
        })}
      </div>

      <Button
        type='button'
        onClick={() =>
          appendSpecification({
            title: '',
            values: [{ name: '', description: '' }],
          })
        }
      >
        + Add New Specification
      </Button>
    </>
  );
};

export default ProductAddSpecificationList;
