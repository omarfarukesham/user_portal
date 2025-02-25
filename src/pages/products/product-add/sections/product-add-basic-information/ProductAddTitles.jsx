import FormInputWithFlag from '@/components/form/FormInputWithFlag';
import { useDataContext } from '@/context/dataContext';

const ProductAddTitles = () => {
  const { data } = useDataContext();
  const selectedLanguageCodes = data?.selectedLanguageCodes || [];

  return (
    <div>
      <FormInputWithFlag
        name='titles.EN'
        label='Product Titles'
        placeholder='Product Title'
        languageCode='EN'
        validations={{ required: 'Product title is required' }}
      />
      {selectedLanguageCodes.map((languageCode) => (
        <FormInputWithFlag
          key={languageCode}
          name={`titles.${languageCode}`}
          placeholder='Product Title'
          languageCode={languageCode}
          shouldUnregisterOnUnmount={true}
          validations={{ required: 'Product title is required' }}
        />
      ))}
    </div>
  );
};

export default ProductAddTitles;
