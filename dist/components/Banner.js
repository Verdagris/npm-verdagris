"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _react = _interopRequireDefault(require("react"));
require("../styles/Banner.css");
function _interopRequireDefault(e) { return e && e.__esModule ? e : { "default": e }; }
var Banner = function Banner(_ref) {
  var title = _ref.title,
    tagline = _ref.tagline,
    cta = _ref.cta,
    layout = _ref.layout,
    backgroundColor = _ref.backgroundColor,
    textColor = _ref.textColor;
  var bannerStyle = {
    backgroundColor: backgroundColor || "var(--bgColor)",
    color: textColor || "var(--textColor)",
    width: "100%"
  };
  var isCenterAligned = layout === "center";
  return /*#__PURE__*/_react["default"].createElement("div", {
    style: bannerStyle,
    className: "flex"
  }, /*#__PURE__*/_react["default"].createElement("div", {
    className: "max-width banner ".concat(isCenterAligned ? "center" : "left")
  }, /*#__PURE__*/_react["default"].createElement("h1", {
    className: "banner-title w-full"
  }, title), /*#__PURE__*/_react["default"].createElement("div", {
    className: "flex col w-full"
  }, /*#__PURE__*/_react["default"].createElement("p", {
    className: "banner-tagline"
  }, tagline), /*#__PURE__*/_react["default"].createElement("button", {
    className: "banner-cta",
    onClick: cta.onClick
  }, cta.text))));
};
var _default = exports["default"] = Banner;