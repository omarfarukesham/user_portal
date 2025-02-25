import ArticleIcon from '@/assets/icons/ArticleIcon';
import CategoryIcon from '@/assets/icons/CategoryIcon';
import CustomerReview from '@/assets/icons/CustomerReview';
import DescriptionIcon from '@/assets/icons/DescriptionIcon';
import DollarIcon from '@/assets/icons/DollarIcon';
import ImageIcon from '@/assets/icons/ImageIcon';
import InfoIcon from '@/assets/icons/InfoIcon';
import RelatedIcon from '@/assets/icons/RelatedIcon';
import ShippingIcon from '@/assets/icons/ShippingIcon';
import SpecificationIcon from '@/assets/icons/SpecificationIcon';
import VariantIcon from '@/assets/icons/VariantIcon';
import VideoIcon from '@/assets/icons/VideoIcon';

const productEditSidebarSteps = [
  {
    id: 1,
    label: 'Basic Information',
    path: 'basic-information',
    icon: ArticleIcon,
  },
  {
    id: 2,
    label: 'Price',
    path: 'price',
    icon: DollarIcon,
  },
  {
    id: 3,
    label: 'Shipping & Delivery',
    path: 'shipping-and-delivery',
    icon: ShippingIcon,
  },
  {
    id: 4,
    label: 'Descriptions',
    path: 'descriptions',
    icon: DescriptionIcon,
  },
  {
    id: 5,
    label: 'Images',
    path: 'images',
    icon: ImageIcon,
  },
  {
    id: 7,
    label: 'Videos',
    path: 'videos',
    icon: VideoIcon,
  },
  {
    id: 8,
    label: 'Category & Attributes',
    path: 'category-and-attributes',
    icon: CategoryIcon,
  },
  {
    id: 9,
    label: 'Specification',
    path: 'specification',
    icon: SpecificationIcon,
  },
  {
    id: 10,
    label: 'SEO',
    path: 'seo',
    icon: InfoIcon,
  },
  {
    id: 11,
    label: 'Related Products',
    path: 'related-products',
    icon: RelatedIcon,
  },
  {
    id: 12,
    label: 'Variant',
    path: 'variant',
    icon: VariantIcon,
  },
  {
    id: 13,
    label: 'All Reviews',
    path: 'all-reviews',
    icon: CustomerReview,
  },
];

export default productEditSidebarSteps;
