import React, { PropTypes } from 'react';
import classNames from 'classnames';
import './Tab.scss';

const propTypes = {
  /**
   * The title of the Tab
   */
  title: PropTypes.string,
  /**
   * The boolean representing whether a tab is selected or not
   */
  isSelected: PropTypes.bool,
  /**
   * The key of the Tab
   */
  tabKey: PropTypes.string.isRequired,
  /**
   * The function to handle click events on the hyperlink
   */
  handleOnClick: PropTypes.func,
};

const defaultProps = {
  isSelected: false,
  handleOnClick: null,
};

const Tab = ({title, isSelected, tabKey, handleOnClick}) => {
  return (
    <li role="presentation" key={tabKey}>
      <a role="tab" onClick={handleOnClick} aria-selected={isSelected} className={isSelected ? 'is-active' : ''}> {title}</a>
    </li>
  );
};

Tab.propTypes = propTypes;
Tab.defaultProps = defaultProps;

export default Tab;