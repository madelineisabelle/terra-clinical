import React, { PropTypes } from 'react';
import classNames from 'classnames';
import './Tab.scss';

const propTypes = {
  /**
   * The title of the Tab
   */
  title: PropTypes.string,
  /**
   * The id of the TabPanel that should be displayed when this Tab is selected
   */
  panelId: PropTypes.string.isRequired,
  /**
   * The boolean representing whether a tab is selected or not
   */
  isSelected: PropTypes.bool,
  /**
   * The id of the Tab
   */
  id: PropTypes.string,
  /**
   * The function to handle click events on the hyperlink
   */
  handleOnClick: PropTypes.func,
};

const defaultProps = {
  isSelected: false,
  id: null,
  handleOnClick: null,
};

const Tab = ({title, panelId, isSelected, id, handleOnClick}) => {
  return (
    <li role="presentation" id={id} key={id}>
      <a aria-controls={panelId} role="tab" onClick={handleOnClick} aria-selected={isSelected} className={isSelected ? 'is-active' : ''}> {title}</a>
    </li>
  );
};

Tab.propTypes = propTypes;
Tab.defaultProps = defaultProps;

export default Tab;