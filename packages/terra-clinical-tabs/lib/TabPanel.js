'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

require('./TabPanel.scss');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var propTypes = {
  /**
   * The content passed to the component
   */
  content: _react.PropTypes.node.isRequired,
  /**
   * The id of the TabPanel
   */
  id: _react.PropTypes.string,
  /**
   * The id of the associated Tab
   */
  tabId: _react.PropTypes.string,
  /**
   * The boolean representing whether a TabPanel's tab is selected or not
   */
  isSelected: _react.PropTypes.bool
};

var defaultProps = {
  isSelected: true
};

var TabPanel = function TabPanel(_ref) {
  var content = _ref.content,
      id = _ref.id,
      tabId = _ref.tabId,
      isSelected = _ref.isSelected;

  return _react2.default.createElement(
    'section',
    { className: 'tabpanel', role: 'tabpanel', id: id, 'aria-labelledby': tabId },
    isSelected ? content : null
  );
};

TabPanel.propTypes = propTypes;
TabPanel.defaultProps = defaultProps;

exports.default = TabPanel;