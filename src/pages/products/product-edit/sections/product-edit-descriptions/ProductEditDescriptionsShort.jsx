import DescriptionIcon from '@/assets/icons/DescriptionIcon';
import FormTextEditor from '@/components/form/FormTextEditor';
import CollapsibleSection from '@/components/ui/CollapsibleSection';
import FlagLabel from '@/components/ui/FlagLabel';
import Tabs from '@/components/ui/Tabs';
import { Fragment, useState } from 'react';

const ProductEditDescriptionsShort = ({ languageCodes = [] }) => {
  const tabItems = languageCodes.map((languageCode) => ({
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
                <FormTextEditor name={`shortDescriptions[${item.key}]`} />
              )}
            </Fragment>
          );
        })}
      </Tabs>
    </CollapsibleSection>
  );
};

export default ProductEditDescriptionsShort;
