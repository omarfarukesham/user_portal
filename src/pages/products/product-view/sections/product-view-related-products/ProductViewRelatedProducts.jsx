import RelatedIcon from '@/assets/icons/RelatedIcon';
import CollapsibleSection from '@/components/ui/CollapsibleSection';
import ProductViewRelatedProductsSection from './ProductViewRelatedProductsSection';

const ProductViewRelatedProducts = () => {
  const relevantProducts = [
    {
      title: 'Related Product',
      description:
        'Related products are shown to customers in addition to the item the customer is looking at.',
      type: 'RELATED',
    },
    {
      title: 'Recommended Product',
      description:
        'A recommended / up-sell item is offered to the customer as a pricier or higher - quality alternative to the product the customer is looking at.',
      type: 'RECOMMENDED',
    },
    {
      title: 'Cross Sell Product',
      description:
        'These "impulse-buy" products appear next to the shopping cart as cross-sells to the items already in the shopping cart.',
      type: 'CROSS_SELL',
    },
  ];

  return (
    <CollapsibleSection
      icon={RelatedIcon}
      title='Related Products'
      isCollapsible={false}
      className='m-10 my-5'
      contentClassName='p-0'
    >
      {relevantProducts.map((relevantProduct) => (
        <ProductViewRelatedProductsSection
          key={relevantProduct.type}
          title={relevantProduct.title}
          description={relevantProduct.description}
          type={relevantProduct.type}
        />
      ))}
    </CollapsibleSection>
  );
};

export default ProductViewRelatedProducts;
