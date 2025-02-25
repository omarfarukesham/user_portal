import { useState } from 'react';
import { useFormContext } from 'react-hook-form';
import ProductAddAttributesSingleCustom from './ProductAddAttributesSingleCustom';
import ProductAddAttributesSingleSelection from './ProductAddAttributesSingleSelection';

const ProductAddAttributesSingle = ({ attribute, languageCode, index }) => {
  const [showCustomInput, setShowCustomInput] = useState(false);
  const { setValue } = useFormContext();
  const name = `attributes.${languageCode}[${index}].options`;
  const label = attribute?.labels[languageCode];
  const options =
    attribute?.options[languageCode]?.map((e) => ({ label: e, value: e })) ||
    [];

  if (!label || !options.length) return null;

  setValue(`attributes.${languageCode}[${index}].label`, label);
  setValue(
    `attributes.${languageCode}[${index}].isVariant`,
    attribute.isVariant,
  );

  return (
    <div>
      {!showCustomInput && (
        <ProductAddAttributesSingleSelection
          label={label}
          name={name}
          attribute={attribute}
          options={options}
          setValue={setValue}
        />
      )}

      {showCustomInput && (
        <ProductAddAttributesSingleCustom
          label={label}
          name={name}
          attribute={attribute}
          options={options}
          setValue={setValue}
        />
      )}

      <div
        onClick={() => setShowCustomInput((prev) => !prev)}
        className={`text-sm cursor-pointer ${
          showCustomInput ? 'text-primary' : 'text-gray'
        }`}
      >
        {showCustomInput ? 'Hide input' : 'Custom input'}
      </div>
    </div>
  );
};

export default ProductAddAttributesSingle;
