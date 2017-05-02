import React from 'react';

import TabView from 'terra-clinical-tabs';

const view = () => (
  <TabView>
  	<TabView.Tabs>
    	<TabView.Tab title="THIS NAME SHOULD COLLAPSE IT IS WAY TOO LONG OF A NAME OKAY" panelId="panel1" id="tab1"/>
	    <TabView.Tab title="Tab 2" panelId="panel2" id="tab2"/>
	    <TabView.Tab title="Tab 3" panelId="panel3" id="tab3"/>
	    <TabView.Tab title="Tab 4" panelId="panel4" id="tab4"/>
  	</TabView.Tabs>
   	<TabView.TabPanel tabId="tab1" id="panel1" content={<h2>This is Tab 1</h2>}>
    </TabView.TabPanel>
    <TabView.TabPanel content={<ol><li>List1</li><li>List2</li><li>List3</li></ol>} tabId="tab2" id="panel2"/>
    <TabView.TabPanel content={<table><tr><th>Col1</th><th>Col2</th><th>Col3</th></tr><tr><td>Test1</td><td>Test1</td> 
    <td>Test1</td></tr><tr><td>Test2</td><td>Test2</td><td>Test2</td></tr></table>} tabId="tab3" id="panel3"/>
    <TabView.TabPanel content={<h4>This is Tab 4</h4>} tabId="tab4" id="panel4"/>
  </TabView>);
export default view;
