/* eslint-disable import/no-extraneous-dependencies */

import React from 'react';
import { Route } from 'react-router';
import ClinicalTabsTests from './ClinicalTabsTests';
import DefaultClinicalTabs from './DefaultClinicalTabs';

const routes = (
  <div>
    <Route path="/tests/clinical-tabs-tests" component={ClinicalTabsTests} />
    <Route path="/tests/clinical-tabs-tests/default" component={DefaultClinicalTabs} />
  </div>
);

export default routes;
