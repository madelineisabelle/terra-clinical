/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import PropsTable from 'terra-props-table';
import Markdown from 'terra-markdown';

// Component Source
// eslint-disable-next-line import/no-webpack-loader-syntax, import/first, import/no-unresolved, import/extensions
import TabViewSrc from '!raw-loader!terra-clinical-tabs/src/TabView';
import TabsSrc from '!raw-loader!terra-clinical-tabs/src/Tabs';
import TabSrc from '!raw-loader!terra-clinical-tabs/src/Tab';
import TabPanelSrc from '!raw-loader!terra-clinical-tabs/src/TabPanel';

import Tabs from './Tabs';


const TabsExamples = () => (
  <div>
  	<h2> TabView </h2>
    <PropsTable id="props-TabView" src={TabViewSrc} />
  	<h2> Tabs </h2>
    <PropsTable id="props-Tabs" src={TabsSrc} />
  	<h2> Tab </h2>
    <PropsTable id="props-Tab" src={TabSrc} />
  	<h2> TabPanel </h2>
    <PropsTable id="props-TabPanel" src={TabPanelSrc} />
    <Tabs/>
  </div>
);

export default TabsExamples;
