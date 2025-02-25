import FormInput from '@/components/form/FormInput';
import { useDebounce } from '@/hooks/useDebounce';
import { useEffect } from 'react';
import { useFormContext, useWatch } from 'react-hook-form';

const ProductAddSEOUrlKey = () => {
  const { getValues, setValue, setError } = useFormContext();

  const urlKeyInput = useWatch({ name: 'urlKey' });

  const debouncedUrlKey = useDebounce(urlKeyInput);

  const handleFocus = () => {
    const productName = getValues('productName.soldfy_com');
    const urlKey = encodeURIComponent(productName.split(' ').join('-'));
    setValue('urlKey', urlKey);
  };

  useEffect(() => {
    if (debouncedUrlKey) {
      const urlKeyDuplicate = Math.floor(Math.random() * 2); //! call API here

      if (urlKeyDuplicate) {
        setError('urlKey', {
          type: 'manual',
          message: 'Duplicate URL key detected',
        });
      }
    }
  }, [debouncedUrlKey, setError]);

  return <FormInput label='URL Key' name='urlKey' onFocus={handleFocus} />;
};

export default ProductAddSEOUrlKey;
