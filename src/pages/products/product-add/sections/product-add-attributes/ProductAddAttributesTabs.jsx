import FlagLabel from '@/components/ui/FlagLabel';
import Tabs from '@/components/ui/Tabs';
import { useDataContext } from '@/context/dataContext';
import { Fragment, useState } from 'react';
import { twMerge } from 'tailwind-merge';
import ProductAddAttributesList from './ProductAddAttributesList';

const ProductAddAttributesTabs = ({ attributes }) => {
  const { data } = useDataContext();
  const selectedLanguageCodes = data?.selectedLanguageCodes || [];

  // Ensuring english as default language
  if (!selectedLanguageCodes.includes('EN'))
    selectedLanguageCodes.unshift('EN');

  const languageCodes = selectedLanguageCodes;
  const tabItems = languageCodes.map((languageCode) => ({
    label: <FlagLabel languageCode={languageCode} label={languageCode} />,
    key: languageCode,
  }));
  const [selectedTab, setSelectedTab] = useState(tabItems[0]?.key);

  return (
    <Tabs
      items={tabItems}
      activeClassName='border-b-2 border-secondary'
      defaultSelected={selectedTab}
      onChange={(tab) => tab && setSelectedTab(tab)}
    >
      <br />
      {tabItems.map((item) => {
        return (
          <Fragment key={item.key}>
            <ProductAddAttributesList
              className={twMerge(selectedTab != item.key && 'sr-only')}
              attributes={attributes}
              languageCode={item.key}
            />
          </Fragment>
        );
      })}
    </Tabs>
  );
};

export default ProductAddAttributesTabs;
