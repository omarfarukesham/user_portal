import FlagLabel from '@/components/ui/FlagLabel';
import Tabs from '@/components/ui/Tabs';
import { useDataContext } from '@/context/dataContext';
import ProductAddSpecificationList from '@/pages/products/product-add/sections/product-add-specification/ProductAddSpecificationList';
import { Fragment, useState } from 'react';

const ProductEditSpecificationTabs = () => {
  const { data } = useDataContext();
  const languageCodes = data.getSelectedLanguageCodes();

  // Ensuring english as default language
  if (!languageCodes.includes('EN')) languageCodes.unshift('EN');

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
            {selectedTab === item.key && (
              <ProductAddSpecificationList languageCode={item.key} />
            )}
          </Fragment>
        );
      })}
    </Tabs>
  );
};

export default ProductEditSpecificationTabs;
