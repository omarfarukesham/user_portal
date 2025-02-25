import { useState } from 'react';
import { twMerge } from 'tailwind-merge';
import { productAddSteps } from './productAddSteps';

const ProductAddSidebar = () => {
  const [selectedStep, setSelectedStep] = useState('basic-information');

  //TODO: Will be solved lated if needed (Form re-render issue)
  //useChangeHashOnScroll();

  /* const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    // location.hash is like: "#price". So we remove the "#" to get the current step
    const currentStep = location.hash.slice(1);
    setSelectedStep(currentStep);
  }, [location]); */

  const handleStepClick = (step) => {
    setSelectedStep(step.path);

    //TODO: Will be solved lated if needed (Form re-render issue)
    //navigate(`/admin/products/add#${step.path}`, { replace: true });
    document.getElementById(step.path).scrollIntoView({
      behavior: 'smooth',
    });
  };

  return (
    <div className='max-w-64 bg-white shadow min-h-full flex flex-col gap-5 p-5'>
      {productAddSteps.map((step) => {
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

export default ProductAddSidebar;
