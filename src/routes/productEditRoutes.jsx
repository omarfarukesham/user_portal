/* eslint-disable react-refresh/only-export-components */
import RouteAuthorization from '@/components/layout/RouteAuthorization';
import permissions from '@/configuration/permissions';
// import ProductEditReviewRatings from '@/pages/products/product-edit/sections/product-edit-review-ratings/ProductEditReviewRatings';
import { lazy } from 'react';
import { Navigate } from 'react-router-dom';

const ProductEdit = lazy(() =>
  import('@/pages/products/product-edit/ProductEdit'),
);
const ProductEditReviewRatings = lazy(() =>
  import(
    '@/pages/products/product-edit/sections/product-edit-review-ratings/ProductEditReviewRatings'
  ),
);

const ProductEditBasicInformation = lazy(() =>
  import(
    '@/pages/products/product-edit/sections/product-edit-basic-information/ProductEditBasicInformation'
  ),
);
const ProductEditPrice = lazy(() =>
  import('@/pages/products/product-edit/sections/ProductEditPrice'),
);
const ProductEditShippingAndDelivery = lazy(() =>
  import(
    '@/pages/products/product-edit/sections/product-edit-shipping-and-delivery/ProductEditShippingAndDelivery'
  ),
);
const ProductEditDescriptions = lazy(() =>
  import(
    '@/pages/products/product-edit/sections/product-edit-descriptions/ProductEditDescriptions'
  ),
);
const ProductEditImages = lazy(() =>
  import(
    '@/pages/products/product-edit/sections/product-edit-images/ProductEditImages'
  ),
);
const ProductEditVideos = lazy(() =>
  import(
    '@/pages/products/product-edit/sections/product-edit-videos/ProductEditVideos'
  ),
);
const ProductEditCategoryAndAttributes = lazy(() =>
  import(
    '@/pages/products/product-edit/sections/product-edit-category-and-attributes/ProductEditCategoryAndAttributes'
  ),
);
const ProductEditSpecification = lazy(() =>
  import(
    '@/pages/products/product-edit/sections/product-edit-specification/ProductEditSpecification'
  ),
);
const ProductEditSEO = lazy(() =>
  import('@/pages/products/product-edit/sections/ProductEditSEO'),
);
const ProductEditRelatedProducts = lazy(() =>
  import(
    '@/pages/products/product-edit/sections/product-edit-related-products/ProductEditRelatedProducts'
  ),
);
const ProductEditVariant = lazy(() =>
  import(
    '@/pages/products/product-edit/sections/product-edit-variant/ProductEditVariant'
  ),
);

const productEditRoutes = [
  {
    path: 'products/:id/edit/',
    element: (
      <RouteAuthorization
        element={ProductEdit}
        permission={permissions.EDIT_PRODUCT}
      />
    ),
    children: [
      {
        path: '',
        element: <Navigate to='basic-information' replace />,
      },
      {
        path: 'basic-information',
        element: <ProductEditBasicInformation />,
      },
      {
        path: 'price',
        element: <ProductEditPrice />,
      },
      {
        path: 'shipping-and-delivery',
        element: <ProductEditShippingAndDelivery />,
      },
      {
        path: 'descriptions',
        element: <ProductEditDescriptions />,
      },
      {
        path: 'images',
        element: <ProductEditImages />,
      },
      {
        path: 'videos',
        element: <ProductEditVideos />,
      },
      {
        path: 'category-and-attributes',
        element: <ProductEditCategoryAndAttributes />,
      },
      {
        path: 'specification',
        element: <ProductEditSpecification />,
      },
      {
        path: 'seo',
        element: <ProductEditSEO />,
      },
      {
        path: 'related-products',
        element: <ProductEditRelatedProducts />,
      },
      {
        path: 'variant',
        element: <ProductEditVariant />,
      },
      {
        path: 'all-Reviews',
        element: <ProductEditReviewRatings />,
      },
    ],
  },
];

export default productEditRoutes;
