/* eslint-disable react-refresh/only-export-components */
import RouteAuthorization from '@/components/layout/RouteAuthorization';
import permissions from '@/configuration/permissions';
import ProductViewReviewRatings from '@/pages/products/product-view/sections/product-view-review-ratings/ProductViewReviewRatings';
import { lazy } from 'react';
import { Navigate } from 'react-router-dom';

const ProductView = lazy(() =>
  import('@/pages/products/product-view/ProductView'),
);
const ProductViewBasicInformation = lazy(() =>
  import(
    '@/pages/products/product-view/sections/product-view-basic-information/ProductViewBasicInformation'
  ),
);
const ProductViewPrice = lazy(() =>
  import('@/pages/products/product-view/sections/ProductViewPrice'),
);
const ProductViewShippingAndDelivery = lazy(() =>
  import(
    '@/pages/products/product-view/sections/product-view-shipping-and-delivery/ProductViewShippingAndDelivery'
  ),
);
const ProductViewDescriptions = lazy(() =>
  import(
    '@/pages/products/product-view/sections/product-view-descriptions/ProductViewDescriptions'
  ),
);
const ProductViewImages = lazy(() =>
  import(
    '@/pages/products/product-view/sections/product-view-images/ProductViewImages'
  ),
);
const ProductViewVideos = lazy(() =>
  import(
    '@/pages/products/product-view/sections/product-view-videos/ProductViewVideos'
  ),
);
const ProductViewCategoryAndAttributes = lazy(() =>
  import(
    '@/pages/products/product-view/sections/product-view-category-and-attributes/ProductViewCategoryAndAttributes'
  ),
);
const ProductViewSpecification = lazy(() =>
  import(
    '@/pages/products/product-view/sections/product-view-specification/ProductViewSpecification'
  ),
);
const ProductViewSEO = lazy(() =>
  import('@/pages/products/product-view/sections/ProductViewSEO'),
);
const ProductViewRelatedProducts = lazy(() =>
  import(
    '@/pages/products/product-view/sections/product-view-related-products/ProductViewRelatedProducts'
  ),
);
const ProductViewVariant = lazy(() =>
  import(
    '@/pages/products/product-view/sections/product-view-variant/ProductViewVariant'
  ),
);

const productViewRoutes = [
  {
    path: 'products/:id',
    element: (
      <RouteAuthorization
        element={ProductView}
        permission={permissions.VIEW_PRODUCT}
      />
    ),
    children: [
      {
        path: '',
        element: <Navigate to='basic-information' replace />,
      },
      {
        path: 'basic-information',
        element: <ProductViewBasicInformation />,
      },
      {
        path: 'price',
        element: <ProductViewPrice />,
      },
      {
        path: 'shipping-and-delivery',
        element: <ProductViewShippingAndDelivery />,
      },
      {
        path: 'descriptions',
        element: <ProductViewDescriptions />,
      },
      {
        path: 'images',
        element: <ProductViewImages />,
      },
      {
        path: 'videos',
        element: <ProductViewVideos />,
      },
      {
        path: 'category-and-attributes',
        element: <ProductViewCategoryAndAttributes />,
      },
      {
        path: 'specification',
        element: <ProductViewSpecification />,
      },
      {
        path: 'seo',
        element: <ProductViewSEO />,
      },
      {
        path: 'related-products',
        element: <ProductViewRelatedProducts />,
      },
      {
        path: 'variant',
        element: <ProductViewVariant />,
      },
      {
        path: 'all-reviews',
        element: <ProductViewReviewRatings />,
      },
    ],
  },
];

export default productViewRoutes;
