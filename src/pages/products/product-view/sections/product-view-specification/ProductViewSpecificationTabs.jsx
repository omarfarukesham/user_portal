import FlagLabel from '@/components/ui/FlagLabel';
import Tabs from '@/components/ui/Tabs';
import { Fragment, useState } from 'react';
import ProductViewSpecificationTable from './ProductViewSpecificationTable';

const ProductViewSpecificationTabs = ({ languageCodes, specifications }) => {
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
              <ProductViewSpecificationTable
                specifications={specifications[item.key]}
              />
            )}
          </Fragment>
        );
      })}
    </Tabs>
  );
};

export default ProductViewSpecificationTabs;
