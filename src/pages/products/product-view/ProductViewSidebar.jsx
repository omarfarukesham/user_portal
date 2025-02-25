import { useDataContext } from '@/context/dataContext';
import { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { twMerge } from 'tailwind-merge';
import productViewSidebarSteps from './productViewSidebarSteps';

const ProductViewSidebar = () => {
  const { data } = useDataContext();
  const id = data?.product?.id;
  const location = useLocation();
  const navigate = useNavigate();
  const getCurrentStep = () => {
    const pathNames = location.pathname.split('/');
    const pathName = pathNames[pathNames.length - 1];
    if (pathName === id) return 'basic-information';
    return pathName;
  };

  const [selectedStep, setSelectedStep] = useState(getCurrentStep());

  const handleStepClick = (step) => {
    const navigatePath = '/admin/products/' + id + '/' + step.path;
    navigate(navigatePath);
    setSelectedStep(step.path);
  };

  return (
    <div className='max-w-64 bg-white shadow min-h-full flex flex-col gap-5 p-5 overflow-auto'>
      {productViewSidebarSteps.map((step) => {
        return (
          <button
            type='button'
            onClick={() => handleStepClick(step)}
            key={step.id}
            className={twMerge(
              'p-3 flex items-center gap-3 hover:bg-secondary rounded-lg text-label',
              selectedStep === step.path && 'bg-secondary right-arrow',
            )}
          >
            <step.icon />{' '}
            <div className='flex-1 text-left hidden lg:block'>{step.label}</div>
          </button>
        );
      })}
    </div>
  );
};

export default ProductViewSidebar;
