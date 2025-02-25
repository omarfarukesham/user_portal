import FlagLabel from '@/components/ui/FlagLabel';
import Tabs from '@/components/ui/Tabs';
import { useDataContext } from '@/context/dataContext';
import { Fragment, useState } from 'react';
import ProductAddSpecificationList from './ProductAddSpecificationList';

const ProductAddSpecification = () => {
  const { data } = useDataContext();
  const selectedLanguageCodes = data?.selectedLanguageCodes || [];

  // Ensuring english as default language
  if (!selectedLanguageCodes.includes('EN'))
    selectedLanguageCodes.unshift('EN');

  const tabItems = selectedLanguageCodes.map((languageCode) => ({
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
            {selectedTab === item.key && (
              <ProductAddSpecificationList languageCode={item.key} />
            )}
          </Fragment>
        );
      })}
    </Tabs>
  );
};

export default ProductAddSpecification;
