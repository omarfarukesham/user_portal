import LoadingSpinner from '@/components/ui/LoadingSpinner';
import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import ProductEditSidebar from './ProductEditSidebar';

const ProductViewBodyLayout = () => {
  return (
    <div className='flex-1 flex gap-5 overflow-hidden'>
      <ProductEditSidebar />
      <Suspense fallback={<LoadingSpinner text='Loading your content' />}>
        <div className='flex-1 bg-white shadow overflow-auto'>
          <Outlet />
        </div>
      </Suspense>
    </div>
  );
};

export default ProductViewBodyLayout;
