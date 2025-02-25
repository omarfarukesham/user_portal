/* eslint-disable react-refresh/only-export-components */
import RouteAuthorization from '@/components/layout/RouteAuthorization';
import permissions from '@/configuration/permissions';
import { lazy } from 'react';
import productEditRoutes from './productEditRoutes';
import productViewRoutes from './productViewRoutes';

// Product List
const Products = lazy(() => import('@/pages/products/Products'));

// Product Add
const ProductAdd = lazy(() =>
  import('@/pages/products/product-add/ProductAdd'),
);

// These are the children routes of the main layout
const productRoutes = [
  {
    path: 'products',
    element: (
      <RouteAuthorization
        element={Products}
        permission={permissions.VIEW_PRODUCT}
      />
    ),
  },
  ...productViewRoutes,
  ...productEditRoutes,
  {
    path: 'products/add',
    element: (
      <RouteAuthorization
        element={ProductAdd}
        permission={permissions.EDIT_PRODUCT}
      />
    ),
  },
];

export default productRoutes;
