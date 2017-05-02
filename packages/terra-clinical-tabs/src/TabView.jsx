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
   * The id of the currently displayed TabPanel
   */
  selectedPanelId: PropTypes.string,
};

const defaultProps = {
};


class TabView extends React.Component {
  constructor(props) {
    super(props);
    this.handleSelection = this.handleSelection.bind(this);
    this.cloneChildren = this.cloneChildren.bind(this);
    this.state = { selectedPanelId: 'panel1'};
  }

  handleSelection(event, panelId) {
    this.setState({ selectedPanelId: panelId });
  }

  wrappedOnClickForTab(tab) {
    return (event) => {
      this.handleSelection(event, tab.props.panelId);
    };
  }

  cloneChildren(children) {
    return React.Children.map(children, child => {
      if(!React.isValidElement(child)) return child;
      const newProps = {};

      if (child.type === Tab) {
        newProps.handleOnClick = this.wrappedOnClickForTab(child);
        newProps.isSelected = (this.state.selectedPanelId == child.props.panelId);
      }

      else if (child.type === TabPanel) {
        newProps.isSelected = (this.state.selectedPanelId == child.props.id);
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