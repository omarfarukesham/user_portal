import { twMerge } from 'tailwind-merge';
import ProductAddAttributesSingle from './product-add-attibutes-single/ProductAddAttributesSingle';

const ProductAddAttributesList = ({ attributes, languageCode, className }) => {
  return (
    <div className={twMerge('grid md:grid-cols-2 gap-7', className)}>
      {attributes?.map(
        (attribute, index) =>
          attribute.options && (
            <ProductAddAttributesSingle
              key={attribute.labels[languageCode] + index}
              attribute={attribute}
              languageCode={languageCode}
              index={index}
            />
          ),
      )}
    </div>
  );
};

export default ProductAddAttributesList;
