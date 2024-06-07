"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _react = _interopRequireDefault(require("react"));
require("../styles/index.css");
require("../styles/Footer.css");
function _interopRequireDefault(e) { return e && e.__esModule ? e : { "default": e }; }
var Footer = function Footer(_ref) {
  var text = _ref.text,
    backgroundColor = _ref.backgroundColor,
    textColor = _ref.textColor;
  var footerStyle = {
    backgroundColor: backgroundColor || "var(--bgColor)",
    color: textColor || "var(--textColor)",
    padding: "10px",
    textAlign: "center"
  };
  return /*#__PURE__*/_react["default"].createElement("footer", {
    style: footerStyle,
    className: "flex col"
  }, /*#__PURE__*/_react["default"].createElement("div", {
    className: "max-width"
  }, /*#__PURE__*/_react["default"].createElement("p", null, text)));
};
var _default = exports["default"] = Footer;