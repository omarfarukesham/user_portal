import { MARKETPLACE_PDP_URL } from '@/configuration/config';
import ProductEditVariantTableDeleteButton from './ProductEditVariantTableDeleteButton';

const pdpBaseURL = MARKETPLACE_PDP_URL;
const productEditVariantTableColumns = [
  {
    key: 'productSlug',
    label: 'Product',
    content: (productSlug) => (
      <a
        className='text-highlight hover:underline'
        href={pdpBaseURL + productSlug}
        target='_blank'
        rel='noreferrer'
      >
        {productSlug}
      </a>
    ),
  },
  {
    key: 'productId',
    label: 'Action',
    content: (productId) => (
      <ProductEditVariantTableDeleteButton productId={productId} />
    ),
  },
];

export default productEditVariantTableColumns;
