import Checkbox from '@/components/ui/Checkbox';

const ProductAddProductCheckbox = ({
  product,
  selectedProds,
  setSelectedProds,
}) => {
  return (
    <Checkbox
      checked={!!selectedProds.find((prod) => prod.sku === product.sku)}
      onChange={(e) => {
        if (e.target.checked) {
          setSelectedProds([...selectedProds, product]);
        } else {
          setSelectedProds(
            selectedProds.filter((prod) => prod.sku !== product.sku),
          );
        }
      }}
    />
  );
};

export default ProductAddProductCheckbox;
