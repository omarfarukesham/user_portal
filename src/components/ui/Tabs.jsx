import { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { twMerge } from 'tailwind-merge';

const Tabs = ({
  children,
  items,
  onChange,
  activeClassName = 'border-t border-x border-secondary bg-bg-color-2',
  defaultSelected,
}) => {
  const [selectedTab, setSelectedTab] = useState(defaultSelected);

  let [searchParams, setSearchParams] = useSearchParams();

  const handleTabChange = (item) => {
    setSelectedTab(item.key);
    onChange(item.key);

    // update the url with selected tab as query
    setSearchParams({ ...searchParams, tab: item.key });
  };

  useEffect(() => {
    // set previously selected tab on refresh (if selected)
    const currentTab = searchParams.get('tab');
    if (currentTab && items.findIndex((item) => item.key === currentTab) > -1) {
      setSelectedTab(currentTab);
      onChange(currentTab);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [items]);

  return (
    <div>
      <div className='flex items-center gap-2 w-full overflow-x-scroll md:overflow-x-auto'>
        {items?.length &&
          items.map((item) => {
            return (
              <div
                key={item.key}
                onClick={() => handleTabChange(item)}
                className={twMerge(
                  'bg-white rounded-t-lg p-3 text-center cursor-pointer whitespace-nowrap',
                  selectedTab === item.key && activeClassName,
                )}
              >
                {item.label}
              </div>
            );
          })}
      </div>

      <div className='w-full rounded-lg'>{children}</div>
    </div>
  );
};

export default Tabs;
