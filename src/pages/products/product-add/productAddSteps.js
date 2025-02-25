import ArticleIcon from '@/assets/icons/ArticleIcon';
import CategoryIcon from '@/assets/icons/CategoryIcon';
import DescriptionIcon from '@/assets/icons/DescriptionIcon';
import DollarIcon from '@/assets/icons/DollarIcon';
import ImageIcon from '@/assets/icons/ImageIcon';
import InfoIcon from '@/assets/icons/InfoIcon';
import ShippingIcon from '@/assets/icons/ShippingIcon';
import SpecificationIcon from '@/assets/icons/SpecificationIcon';
import VideoIcon from '@/assets/icons/VideoIcon';
import ProductAddBannerImage from './sections/ProductAddBannerImage';
import ProductAddCategory from './sections/ProductAddCategory';
import ProductAddDescription from './sections/ProductAddDescription';
import ProductAddImages from './sections/ProductAddImages';
import ProductAddShipping from './sections/ProductAddShipping';
import ProductAddVideo from './sections/ProductAddVideo';
import ProductAddBasicInformation from './sections/product-add-basic-information/ProductAddBasicInformation';
import ProductAddPrice from './sections/product-add-price/ProductAddPrice';
import ProductAddSEO from './sections/product-add-seo/ProductAddSEO';
import ProductAddSpecification from './sections/product-add-specification/ProductAddSpecification';

export const productAddSteps = [
  {
    id: 1,
    label: 'Basic Information',
    icon: ArticleIcon,
    element: ProductAddBasicInformation,
    path: 'basic-information',
    isRequired: true,
  },
  {
    id: 2,
    label: 'Price',
    icon: DollarIcon,
    element: ProductAddPrice,
    path: 'price',
    isRequired: false,
  },
  {
    id: 3,
    label: 'Shipping & Delivery',
    icon: ShippingIcon,
    element: ProductAddShipping,
    path: 'shipping-delivery',
    isRequired: false,
  },
  {
    id: 4,
    label: 'Description',
    icon: DescriptionIcon,
    element: ProductAddDescription,
    path: 'description',
    isRequired: true,
  },
  {
    id: 5,
    label: 'Images',
    icon: ImageIcon,
    element: ProductAddImages,
    path: 'images',
    isRequired: false,
  },
  {
    id: 11,
    label: 'Banner Image',
    icon: ImageIcon,
    element: ProductAddBannerImage,
    path: 'banner-image',
    isRequired: false,
  },
  {
    id: 6,
    label: 'Video',
    icon: VideoIcon,
    element: ProductAddVideo,
    path: 'video',
    isRequired: false,
  },
  {
    id: 7,
    label: 'Category & Attributes',
    icon: CategoryIcon,
    element: ProductAddCategory,
    path: 'category',
    isRequired: true,
  },
  {
    id: 8,
    label: 'Specification',
    icon: SpecificationIcon,
    element: ProductAddSpecification,
    path: 'specification',
    isRequired: false,
  },
  {
    id: 9,
    label: 'SEO',
    icon: InfoIcon,
    element: ProductAddSEO,
    path: 'seo',
    isRequired: true,
  },
];
