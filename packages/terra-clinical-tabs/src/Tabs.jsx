import React, { PropTypes } from 'react';
import classNames from 'classnames';
import Tab from './Tab';

const propTypes = {
  /**
   * The children passed to the component
   */
  children: PropTypes.node,
};

const defaultProps = {
};

const Tabs= ({children}) => {
  return (
    <ul className="tabs" role="tablist menu">
      {children}
    </ul>
  );
};

Tabs.propTypes = propTypes;
Tabs.defaultProps = defaultProps;
Tabs.Tab = Tab;

export default Tabs;
