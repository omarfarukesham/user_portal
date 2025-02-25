import FormTextEditor from '@/components/form/FormTextEditor';
import FlagLabel from '@/components/ui/FlagLabel';
import Tabs from '@/components/ui/Tabs';
import { useDataContext } from '@/context/dataContext';
import { Fragment, useState } from 'react';

const ProductAddDescription = () => {
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
  const [selectedTabShortDes, setSelectedTabShortDes] = useState(
    tabItems[0]?.key,
  );

  return (
    <div className='grid gap-7'>
      <div>
        <Tabs
          items={tabItems}
          activeClassName='border-b-2 border-secondary'
          defaultSelected={selectedTab}
          onChange={(tab) => tab && setSelectedTab(tab)}
        >
          <p className='mt-5 mb-2'>Product Description</p>
          {tabItems.map((item) => {
            return (
              <Fragment key={item.key}>
                {selectedTab === item.key && (
                  <FormTextEditor name={`descriptions.${item.key}`} />
                )}
              </Fragment>
            );
          })}
        </Tabs>
      </div>

      <Tabs
        items={tabItems}
        activeClassName='border-b-2 border-secondary'
        defaultSelected={selectedTabShortDes}
        onChange={(tab) => tab && setSelectedTabShortDes(tab)}
      >
        <p className='mt-5 mb-2'>Short Description</p>
        {tabItems.map((item) => {
          return (
            <Fragment key={item.key}>
              {selectedTabShortDes === item.key && (
                <FormTextEditor name={`shortDescriptions.${item.key}`} />
              )}
            </Fragment>
          );
        })}
      </Tabs>
    </div>
  );
};

export default ProductAddDescription;
