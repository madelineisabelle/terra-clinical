/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import PropsTable from 'terra-props-table';
import Markdown from 'terra-markdown';
import ReadMe from 'terra-clinical-tabs/docs/README.md';
import { version } from 'terra-clinical-tabs/package.json';

// Component Source
// eslint-disable-next-line import/no-webpack-loader-syntax, import/first, import/no-unresolved, import/extensions
import ClinicalTabsSrc from '!raw-loader!terra-clinical-tabs/src/ClinicalTabs';

// Example Files

const ClinicalTabsExamples = () => (
  <div>
    <div id="version">Version: {version}</div>
    <Markdown id="readme" src={ReadMe} />
    <PropsTable id="props" src={ClinicalTabsSrc} />
  </div>
);

export default ClinicalTabsExamples;
