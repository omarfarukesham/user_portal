import PageInnerContainer from '@/components/layout/PageInnerContainer';

import { Tabs } from '@alphaui/core';
import { useState } from 'react';
import RoleViewBasicTab from './RoleViewBasicTab';
import RoleViewPermissionsTab from './permissions/RoleViewPermissionsTab';

const RoleViewBody = ({ role }) => {
  const tabItems = [
    {
      label: 'Basic Info',
      value: 'basicInfo',
      children: <RoleViewBasicTab role={role} />,
    },
    {
      label: 'Permissions',
      value: 'permissions',
      children: <RoleViewPermissionsTab role={role} />,
    },
  ];

  const [selectedTab, setSelectedTab] = useState(tabItems[0]?.key);

  return (
    <PageInnerContainer className='p-5 flex flex-col gap-5 overflow-scroll'>
      <Tabs
        items={tabItems}
        defaultSelected={selectedTab}
        onChange={(tab) => tab && setSelectedTab(tab)}
        itemClassName='px-5 md:px-20'
        containerClassName='shrink-0 px-0'
      />
    </PageInnerContainer>
  );
};

export default RoleViewBody;
