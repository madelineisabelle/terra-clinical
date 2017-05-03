import React, { PropTypes } from 'react';
import classNames from 'classnames';
import './TabPanel.scss';

const propTypes = {
  /**
   * The content passed to the component
   */
  content: PropTypes.node,
  /**
   * The key of the associated Tab
   */
  tabKey: PropTypes.string,
  /**
   * The boolean representing whether a TabPanel's tab is selected or not
   */
  isSelected: PropTypes.bool,
};

const defaultProps = {
	isSelected: true,
};

const TabPanel = ({content, tabKey, isSelected }) => {
  return (
    <section className="tabpanel" role="tabpanel">
  		{isSelected ? content : null}
  	</section>
  );
};

TabPanel.propTypes = propTypes;
TabPanel.defaultProps = defaultProps;

export default TabPanel;