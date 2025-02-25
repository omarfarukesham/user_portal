import Button from '@/components/ui/Button';
import { useFormContext, useWatch } from 'react-hook-form';

const ProductAddAutoFill = ({ markets }) => {
  const { setValue } = useFormContext();
  const publishStatuses = useWatch({ name: 'publishStatuses' });
  //Filtering and mapping marketCode from publishStatuses (Selected Markets)
  const publishedMarketCodes = Object.entries(publishStatuses)
    .filter(
      ([, publishStatus]) =>
        !(publishStatus === '' || publishStatus === 'INACTIVE'),
    )
    .map(([marketCode]) => marketCode);

  const fillFormData = () => {
    const titles = { EN: 'iphone' };
    const descriptions = { EN: 'This is english description' };
    const shortDescriptions = { EN: 'This is english short description' };
    const originalPrice = {};

    markets
      .filter((m) => publishedMarketCodes.includes(m.marketCode))
      .forEach((market) => {
        titles[market.languageCode] = 'iphone';
        descriptions[market.languageCode] = 'This is auto description';
        shortDescriptions[market.languageCode] =
          'This is auto short description';
        originalPrice[market.currencyCode] = 500;
      });

    const demoData = {
      titles,
      sku: '10001',
      mpn: 111111111111,
      ean: 111111111111,
      gtin: 111111111111,
      stockCount: 100,
      stockStatus: 'IN_STOCK',
      standardQuantity: 100,
      warningQuantity: 100,
      originalPrice,
      packageDimension: {
        unit: 'CM',
        height: 100,
        width: 100,
        length: 100,
      },
      packageWeight: {
        unit: 'GM',
        value: 100,
      },
      descriptions: descriptions,
      shortDescriptions: shortDescriptions,
      visibilities: ['SEARCH'],
      taxRuleIds: ['65618e125209c521913ecd85'],
    };

    Object.keys(demoData).forEach((fieldName) => {
      setValue(fieldName, demoData[fieldName]);
    });
  };
  return (
    <Button
      type='button'
      onClick={fillFormData}
      size='small'
      variant='outlined'
      className='ml-auto mt-2 mr-2'
    >
      Fill the Form(For Development Only)
    </Button>
  );
};

export default ProductAddAutoFill;
