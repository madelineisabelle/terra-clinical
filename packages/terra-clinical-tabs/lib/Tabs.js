'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

var _Tab = require('./Tab');

var _Tab2 = _interopRequireDefault(_Tab);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var propTypes = {
  /**
   * The children passed to the component
   */
  children: _react.PropTypes.node
};

var defaultProps = {};

var Tabs = function Tabs(_ref) {
  var children = _ref.children;

  return _react2.default.createElement(
    'ul',
    { className: 'tabs', role: 'tablist menu', 'data-update-hash': 'true' },
    children
  );
};

Tabs.propTypes = propTypes;
Tabs.defaultProps = defaultProps;
Tabs.Tab = _Tab2.default;

exports.default = Tabs;