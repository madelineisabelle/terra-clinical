import React from 'react';
import PropsTable from 'terra-props-table';
import Markdown from 'terra-markdown';
import ReadMe from 'terra-clinical-detail-view/docs/README.md';
import { version } from 'terra-clinical-detail-view/package.json';

// Component Source
// eslint-disable-next-line import/no-webpack-loader-syntax, import/first, import/no-unresolved, import/extensions
import DetailViewSrc from '!raw-loader!terra-clinical-detail-view/src/DetailView.jsx';

// Example files
import DetailViewDivided from './DetailViewDivided';
import DetailViewNoDivider from './DetailViewNoDivider';

const DetailViewExamples = () => (
  <div>
    <div id="version">Version: {version}</div>
    <Markdown id="readme" src={ReadMe} />
    <h2>Detail View</h2>
    <PropsTable id="props" src={DetailViewSrc} />
    <h2 id="Divided">Divided</h2>
    <DetailViewDivided />
    <h2 id="NoDivider">No Divider</h2>
    <DetailViewNoDivider />
  </div>
);

export default DetailViewExamples;
