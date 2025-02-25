import { MARKETPLACE_PDP_URL } from '@/configuration/config';
import ProductsTableActionButtons from './ProductsTableActionButtons';

const pdpBaseURL = MARKETPLACE_PDP_URL;
const productsTableColumns = [
  {
    label: 'SL No.',
    key: 'serial',
  },
  {
    label: 'SKU',
    key: 'sku',
  },
  {
    label: 'Name',
    key: 'name',
    content: (name, product) => (
      <a
        className='text-highlight hover:underline'
        href={pdpBaseURL + product?.productSlug}
        target='_blank'
        rel='noreferrer'
      >
        {name}
      </a>
    ),
  },
  {
    label: 'MPN',
    key: 'mpn',
  },
  {
    label: 'Brand',
    key: 'brandName',
  },
  {
    label: 'Featured',
    key: 'isFeatured',
    content: (value) => (value ? 'Yes' : 'No'),
  },
  {
    label: 'Price',
    key: 'price',
    content: (price) => price?.priceText,
  },
  {
    label: <div className='text-center'>Action</div>,
    content: (_, rowData) => <ProductsTableActionButtons data={rowData} />,
  },
];

export default productsTableColumns;
