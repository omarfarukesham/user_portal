import { MARKETPLACE_PDP_URL } from '@/configuration/config';

const pdpBaseURL = MARKETPLACE_PDP_URL;
const productViewVariantTableColumns = [
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
];

export default productViewVariantTableColumns;
