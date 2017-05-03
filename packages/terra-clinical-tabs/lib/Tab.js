'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

require('./Tab.scss');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var propTypes = {
  /**
   * The title of the Tab
   */
  title: _react.PropTypes.string,
  /**
   * The boolean representing whether a tab is selected or not
   */
  isSelected: _react.PropTypes.bool,
  /**
   * The key of the Tab
   */
  tabKey: _react.PropTypes.string.isRequired,
  /**
   * The function to handle click events on the hyperlink
   */
  handleOnClick: _react.PropTypes.func
};

var defaultProps = {
  isSelected: false,
  handleOnClick: null
};

var Tab = function Tab(_ref) {
  var title = _ref.title,
      isSelected = _ref.isSelected,
      tabKey = _ref.tabKey,
      handleOnClick = _ref.handleOnClick;

  return _react2.default.createElement(
    'li',
    { role: 'presentation', key: tabKey },
    _react2.default.createElement(
      'a',
      { role: 'tab', onClick: handleOnClick, 'aria-selected': isSelected, className: isSelected ? 'is-active' : '' },
      ' ',
      title
    )
  );
};

Tab.propTypes = propTypes;
Tab.defaultProps = defaultProps;

exports.default = Tab;