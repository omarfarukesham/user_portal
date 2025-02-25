import DescriptionIcon from '@/assets/icons/DescriptionIcon';
import CollapsibleSection from '@/components/ui/CollapsibleSection';
import FlagLabel from '@/components/ui/FlagLabel';
import HTMLContentView from '@/components/ui/HTMLContentView';
import Tabs from '@/components/ui/Tabs';
import { useDataContext } from '@/context/dataContext';
import { Fragment, useState } from 'react';

const ProductViewDescriptionsShort = () => {
  const { data } = useDataContext();
  const shortDescriptions = data?.product?.shortDescriptions || [];

  const tabItems = Object.keys(shortDescriptions)?.map((languageCode) => ({
    label: <FlagLabel languageCode={languageCode} label={languageCode} />,
    key: languageCode,
  }));
  const [selectedTab, setSelectedTab] = useState(tabItems[0]?.key);

  return (
    <CollapsibleSection
      icon={DescriptionIcon}
      title='Short Descriptions'
      isCollapsible={false}
      className='m-10 my-5'
      contentClassName='grid gap-20'
    >
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
                <div className='py-5'>
                  <HTMLContentView htmlContent={shortDescriptions[item.key]} />
                </div>
              )}
            </Fragment>
          );
        })}
      </Tabs>
    </CollapsibleSection>
  );
};

export default ProductViewDescriptionsShort;
