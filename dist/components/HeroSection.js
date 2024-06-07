"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _react = _interopRequireDefault(require("react"));
require("../styles/HeroSection.css");
function _interopRequireDefault(e) { return e && e.__esModule ? e : { "default": e }; }
var HeroSection = function HeroSection(_ref) {
  var tagline = _ref.tagline,
    mainTitle = _ref.mainTitle,
    subtitle = _ref.subtitle,
    additionalInfo = _ref.additionalInfo,
    cta1 = _ref.cta1,
    cta2 = _ref.cta2,
    image = _ref.image,
    layout = _ref.layout;
  var isCenterAligned = layout === "center";
  return /*#__PURE__*/_react["default"].createElement("section", {
    id: "home-hero"
  }, /*#__PURE__*/_react["default"].createElement("div", {
    className: "hero-section max-width ".concat(isCenterAligned ? "center" : "left")
  }, /*#__PURE__*/_react["default"].createElement("div", {
    className: "hero-content"
  }, /*#__PURE__*/_react["default"].createElement("p", {
    className: "tagline"
  }, tagline), /*#__PURE__*/_react["default"].createElement("h1", {
    className: "main-title"
  }, mainTitle), /*#__PURE__*/_react["default"].createElement("p", {
    className: "subtitle"
  }, subtitle), /*#__PURE__*/_react["default"].createElement("p", {
    className: "additional-info"
  }, additionalInfo), /*#__PURE__*/_react["default"].createElement("div", {
    className: "cta-buttons"
  }, /*#__PURE__*/_react["default"].createElement("button", {
    className: "cta-button",
    onClick: cta1.onClick
  }, cta1.text), /*#__PURE__*/_react["default"].createElement("button", {
    className: "cta-button",
    onClick: cta2.onClick
  }, cta2.text))), /*#__PURE__*/_react["default"].createElement("div", {
    className: "hero-image"
  }, /*#__PURE__*/_react["default"].createElement("img", {
    src: image,
    alt: "Hero"
  }))));
};
var _default = exports["default"] = HeroSection;