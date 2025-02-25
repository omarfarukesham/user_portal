import FormError from '@/components/form/FormError';
import FormSelect from '@/components/form/form-select/FormSelect';
import CollapsibleSection from '@/components/ui/CollapsibleSection';
import FlagLabel from '@/components/ui/FlagLabel';
import { useDataContext } from '@/context/dataContext';
import useProductAddUpdateDataContext from '@/hooks/useProductAddUpdateDataContext';
import { publishStatusOptions } from '@/services/fake/formData';

const ProductAddMarkets = () => {
  const { data } = useDataContext();
  const markets = data?.markets || [];

  //Computing and updating selectedMarketCodes, selectedLanguageCodes, selectedCurrencyCodes to the context to use throughout the form
  useProductAddUpdateDataContext();
  return (
    <CollapsibleSection
      title='Markets'
      isCollapsible={false}
      //headChildren={<ProductAddAutoFill markets={markets} />}
    >
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

      <FormError name='publishStatuses' />
    </CollapsibleSection>
  );
};

export default ProductAddMarkets;
