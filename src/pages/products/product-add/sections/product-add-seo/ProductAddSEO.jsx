import FormInput from '@/components/form/FormInput';
import FormSwitch from '@/components/form/FormSwitch';
import FormTextarea from '@/components/form/FormTextarea';
import FormDropdown from '@/components/form/form-dropdown/FormDropdown';
import { useDataContext } from '@/context/dataContext';
import { metaRobotRulesOptions } from '@/services/fake/formData';
import ProductAddSEOCanonical from './ProductAddSEOCanonical';
import ProductAddSEOOpenGraph from './ProductAddSEOOpenGraph';

const ProductAddSEO = () => {
  const { data } = useDataContext();
  const markets = data?.markets || [];

  return (
    <>
      <div className='grid gap-7 my-7'>
        {/* <ProductAddSEOUrlKey /> */}
        <FormInput label='URL Key' name='seoInfo.urlKey' />
        <FormInput label='Meta Title' name='seoInfo.metaTitle' />
        <FormInput label='Meta Keywords' name='seoInfo.metaKeywords' />
        <FormTextarea label='Meta Description' name='seoInfo.metaDescription' />

        <div className='grid grid-cols-2 gap-5'>
          <FormSwitch
            label='Include In HTML Sitemap'
            name='seoInfo.isIncludeInHtmlMap'
          />
          <FormSwitch
            label='Use in Cross Linking'
            name='seoInfo.isUseInCrossLinking'
          />
        </div>

        <div className='grid grid-cols-2 gap-5'>
          <FormDropdown
            label='Meta Robots'
            name='seoInfo.metaRobotRule'
            options={metaRobotRulesOptions}
          />
          <FormDropdown
            label='Cross Domain Store'
            name='seoInfo.crossDomainMarketCode'
            options={markets.map((market) => ({
              label: market.name,
              value: market.marketCode,
            }))}
          />
        </div>

        <FormInput label='Cross Domain URL' name='seoInfo.crossDomainUrl' />

        <div className='grid grid-cols-2 gap-5'>
          <ProductAddSEOCanonical />
          <ProductAddSEOOpenGraph />
          <FormSwitch
            label='Include In XML Sitemap'
            name='seoInfo.includeInXMLSitemap'
          />
        </div>
      </div>
    </>
  );
};

export default ProductAddSEO;
