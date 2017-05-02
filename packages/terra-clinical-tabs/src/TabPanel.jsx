import React, { PropTypes } from 'react';
import classNames from 'classnames';
import './TabPanel.scss';

const propTypes = {
  /**
   * The content passed to the component
   */
  content: PropTypes.node.isRequired,
  /**
   * The id of the TabPanel
   */
  id: PropTypes.string,
  /**
   * The id of the associated Tab
   */
  tabId: PropTypes.string,
  /**
   * The boolean representing whether a TabPanel's tab is selected or not
   */
  isSelected: PropTypes.bool,
};

const defaultProps = {
	isSelected: true,
};

const TabPanel = ({content, id, tabId, isSelected }) => {
  return (
    <section className="tabpanel" role="tabpanel" id={id} aria-labelledby={tabId}>
  		{isSelected ? content : null}
  	</section>
  );
};

TabPanel.propTypes = propTypes;
TabPanel.defaultProps = defaultProps;

export default TabPanel;