/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import PropsTable from 'terra-props-table';
import Markdown from 'terra-markdown';
import ReadMe from 'terra-tabs/docs/README.md';
import { version } from 'terra-tabs/package.json';

// Component Source
// eslint-disable-next-line import/no-webpack-loader-syntax, import/first, import/no-unresolved, import/extensions
import TabsSrc from '!raw-loader!terra-tabs/src/Tabs';

// Example Files

const TabsExamples = () => (
  <div>
    <div id="version">Version: {version}</div>
    <Markdown id="readme" src={ReadMe} />
    <PropsTable id="props" src={TabsSrc} />
  </div>
);

export default TabsExamples;
