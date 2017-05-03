import React from 'react';

import TabView from 'terra-clinical-tabs';

const view = () => (
  <TabView>
  	<TabView.Tabs>
    	<TabView.Tab title="THIS NAME SHOULD COLLAPSE IT IS WAY TOO LONG OF A NAME OKAY" tabKey="tab1"/>
	    <TabView.Tab title="Tab 2" tabKey="tab2"/>
	    <TabView.Tab title="Tab 3" tabKey="tab3"/>
	    <TabView.Tab title="Tab 4" tabKey="tab4"/>
  	</TabView.Tabs>
   	<TabView.TabPanel tabKey="tab1" content={<h2>This is Tab 1</h2>}>
    </TabView.TabPanel>
    <TabView.TabPanel content={<ol><li>List1</li><li>List2</li><li>List3</li></ol>} tabKey="tab2"/>
    <TabView.TabPanel content={<table><tr><th>Col1</th><th>Col2</th><th>Col3</th></tr><tr><td>Test1</td><td>Test1</td> 
    <td>Test1</td></tr><tr><td>Test2</td><td>Test2</td><td>Test2</td></tr></table>} tabKey="tab3"/>
    <TabView.TabPanel content={<h4>This is Tab 4</h4>} tabKey="tab4"/>
  </TabView>);
export default view;
