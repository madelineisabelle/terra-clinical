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
   * The id of the TabPanel that should be displayed when this Tab is selected
   */
  panelId: _react.PropTypes.string.isRequired,
  /**
   * The boolean representing whether a tab is selected or not
   */
  isSelected: _react.PropTypes.bool,
  /**
   * The id of the Tab
   */
  id: _react.PropTypes.string,
  /**
   * The function to handle click events on the hyperlink
   */
  handleOnClick: _react.PropTypes.func
};

var defaultProps = {
  isSelected: false,
  id: null,
  handleOnClick: null
};

var Tab = function Tab(_ref) {
  var title = _ref.title,
      panelId = _ref.panelId,
      isSelected = _ref.isSelected,
      id = _ref.id,
      handleOnClick = _ref.handleOnClick;

  return _react2.default.createElement(
    'li',
    { role: 'presentation', id: id, key: id },
    _react2.default.createElement(
      'a',
      { 'aria-controls': panelId, role: 'tab', onClick: handleOnClick, 'aria-selected': isSelected, className: isSelected ? 'is-active' : '' },
      ' ',
      title
    )
  );
};

Tab.propTypes = propTypes;
Tab.defaultProps = defaultProps;

exports.default = Tab;