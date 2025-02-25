import FormSelect from '@/components/form/form-select/FormSelect';
import CollapsibleSection from '@/components/ui/CollapsibleSection';
import FlagLabel from '@/components/ui/FlagLabel';
import { useDataContext } from '@/context/dataContext';
import { publishStatusOptions } from '@/services/fake/formData';

const ProductEditMarkets = () => {
  const { data } = useDataContext();
  const markets = data.markets;

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
                  <FormSelect
                    name={`publishStatuses.${market.marketCode}`}
                    options={publishStatusOptions}
                    defaultOption={publishStatusOptions[0]}
                  />
                </div>
              }
            />
          </div>
        ))}
      </div>
    </CollapsibleSection>
  );
};

export default ProductEditMarkets;
