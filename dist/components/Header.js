"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _react = _interopRequireDefault(require("react"));
require("../styles/index.css");
require("../styles/Header.css");
function _interopRequireDefault(e) { return e && e.__esModule ? e : { "default": e }; }
var Header = function Header(_ref) {
  var logo = _ref.logo,
    navItems = _ref.navItems,
    backgroundColor = _ref.backgroundColor,
    textColor = _ref.textColor;
  var headerStyle = {
    backgroundColor: backgroundColor || "var(--bgColor)",
    color: textColor || "var(--textColor)"
  };
  return /*#__PURE__*/_react["default"].createElement("header", {
    style: headerStyle
  }, /*#__PURE__*/_react["default"].createElement("div", {
    className: "max-width flex"
  }, /*#__PURE__*/_react["default"].createElement("img", {
    src: logo,
    alt: "Logo",
    className: "logo"
  }), /*#__PURE__*/_react["default"].createElement("nav", null, /*#__PURE__*/_react["default"].createElement("ul", {
    className: "nav-menu"
  }, navItems.map(function (item, index) {
    return /*#__PURE__*/_react["default"].createElement("li", {
      key: index
    }, /*#__PURE__*/_react["default"].createElement("a", {
      href: item.href,
      style: {
        color: textColor || "var(--textColor)"
      }
    }, item.text));
  })))));
};
var _default = exports["default"] = Header;