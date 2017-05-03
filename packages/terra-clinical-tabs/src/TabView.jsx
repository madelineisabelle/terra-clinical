import React, { PropTypes } from 'react';
import classNames from 'classnames';
import './TabView.scss';
import Tabs from './Tabs';
import TabPanel from './TabPanel';
import Tab from './Tab';

const propTypes = {
  /**
   * The children passed to the component
   */
  children: PropTypes.node,
  /**
   * The initial tab key
   */
  initialTabKey: PropTypes.string,
};

const defaultProps = {
  initialTabKey: undefined,
};


class TabView extends React.Component {
  constructor(props) {
    super(props);
    this.handleSelection = this.handleSelection.bind(this);
    this.cloneChildren = this.cloneChildren.bind(this);
    this.state = { selectedTabKey: this.props.initialTabKey};
  }

  handleSelection(event, tabKey) {
    this.setState({ selectedTabKey: tabKey });
  }

  wrappedOnClickForTab(tab) {
    return (event) => {
      this.handleSelection(event, tab.props.tabKey);
    };
  }

  cloneChildren(children) {
    var currentTabKey = this.state.selectedTabKey;

    return React.Children.map(children, child => {
      if(!React.isValidElement(child)) return child;
      const newProps = {};

      if (child.type === Tab) {
        newProps.handleOnClick = this.wrappedOnClickForTab(child);
        if (currentTabKey == undefined) {
          currentTabKey = child.props.tabKey;
          this.setState({ selectedTabKey: currentTabKey});
        }
        newProps.isSelected = (currentTabKey == child.props.tabKey);
      }

      else if (child.type === TabPanel) {
        newProps.isSelected = (currentTabKey == child.props.tabKey);
      }

      newProps.children = this.cloneChildren(child.props.children);
      return React.cloneElement(child, newProps);
    })
  }

  render() {
    const { children, ...customProps } = this.props;
    const clonedChildItems = this.cloneChildren(children);

    return (
      <div>
        <nav className="hasTabs">
          {clonedChildItems}
        </nav>
      </div>
    )
  }
}

TabView.propTypes = propTypes;
TabView.defaultProps = defaultProps;
TabView.Tabs = Tabs;
TabView.Tab = Tab;
TabView.TabPanel = TabPanel;

export default TabView;