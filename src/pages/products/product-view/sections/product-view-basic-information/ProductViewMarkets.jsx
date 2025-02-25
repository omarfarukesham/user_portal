import CollapsibleSection from '@/components/ui/CollapsibleSection';
import FlagLabel from '@/components/ui/FlagLabel';
import { useDataContext } from '@/context/dataContext';

const ProductViewMarkets = () => {
  const { data } = useDataContext();
  const markets = data.markets;
  const publishStatuses = data?.product?.publishStatuses || [];

  return (
    <CollapsibleSection title='Markets' isCollapsible={false}>
      <div className='flex flex-wrap gap-10'>
        {markets?.map((market) => (
          <div key={market.id}>
            <FlagLabel
              countryCode={market.countryCode}
              containerClass='gap-5'
              className='scale-[200%]'
              label={
                <div>
                  <div>{market.name}</div>
                  <div className='text-sm text-gray'>
                    {publishStatuses[market.marketCode] || 'INACTIVE'}
                  </div>
                </div>
              }
            />
          </div>
        ))}
      </div>
    </CollapsibleSection>
  );
};

export default ProductViewMarkets;
