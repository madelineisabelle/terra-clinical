'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

require('./TabView.scss');

var _Tabs = require('./Tabs');

var _Tabs2 = _interopRequireDefault(_Tabs);

var _TabPanel = require('./TabPanel');

var _TabPanel2 = _interopRequireDefault(_TabPanel);

var _Tab = require('./Tab');

var _Tab2 = _interopRequireDefault(_Tab);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var propTypes = {
  /**
   * The children passed to the component
   */
  children: _react.PropTypes.node,
  /**
   * The id of the currently displayed TabPanel
   */
  selectedPanelId: _react.PropTypes.string
};

var defaultProps = {};

var TabView = function (_React$Component) {
  _inherits(TabView, _React$Component);

  function TabView(props) {
    _classCallCheck(this, TabView);

    var _this = _possibleConstructorReturn(this, (TabView.__proto__ || Object.getPrototypeOf(TabView)).call(this, props));

    _this.handleSelection = _this.handleSelection.bind(_this);
    _this.cloneChildren = _this.cloneChildren.bind(_this);
    _this.state = { selectedPanelId: 'panel1' };
    return _this;
  }

  _createClass(TabView, [{
    key: 'handleSelection',
    value: function handleSelection(event, panelId) {
      this.setState({ selectedPanelId: panelId });
    }
  }, {
    key: 'wrappedOnClickForTab',
    value: function wrappedOnClickForTab(tab) {
      var _this2 = this;

      return function (event) {
        _this2.handleSelection(event, tab.props.panelId);
      };
    }
  }, {
    key: 'cloneChildren',
    value: function cloneChildren(children) {
      var _this3 = this;

      return _react2.default.Children.map(children, function (child) {
        if (!_react2.default.isValidElement(child)) return child;
        var newProps = {};

        if (child.type === _Tab2.default) {
          newProps.handleOnClick = _this3.wrappedOnClickForTab(child);
          newProps.isSelected = _this3.state.selectedPanelId == child.props.panelId;
        } else if (child.type === _TabPanel2.default) {
          newProps.isSelected = _this3.state.selectedPanelId == child.props.id;
        }

        newProps.children = _this3.cloneChildren(child.props.children);
        return _react2.default.cloneElement(child, newProps);
      });
    }
  }, {
    key: 'render',
    value: function render() {
      var _props = this.props,
          children = _props.children,
          customProps = _objectWithoutProperties(_props, ['children']);

      var clonedChildItems = this.cloneChildren(children);

      return _react2.default.createElement(
        'div',
        null,
        _react2.default.createElement(
          'nav',
          { className: 'hasTabs' },
          clonedChildItems
        )
      );
    }
  }]);

  return TabView;
}(_react2.default.Component);

TabView.propTypes = propTypes;
TabView.defaultProps = defaultProps;
TabView.Tabs = _Tabs2.default;
TabView.Tab = _Tab2.default;
TabView.TabPanel = _TabPanel2.default;

exports.default = TabView;