"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _react = _interopRequireDefault(require("react"));
require("../styles/SectionA.css");
function _interopRequireDefault(e) { return e && e.__esModule ? e : { "default": e }; }
var SectionA = function SectionA(_ref) {
  var headline = _ref.headline,
    paragraph = _ref.paragraph,
    cta = _ref.cta,
    image = _ref.image,
    _ref$mirrorLayout = _ref.mirrorLayout,
    mirrorLayout = _ref$mirrorLayout === void 0 ? false : _ref$mirrorLayout,
    bgColor = _ref.bgColor;
  return /*#__PURE__*/_react["default"].createElement("section", {
    id: "section-a",
    className: "half",
    style: bgColor ? {
      backgroundColor: bgColor
    } : {}
  }, /*#__PURE__*/_react["default"].createElement("div", {
    className: "max-width section-a"
  }, /*#__PURE__*/_react["default"].createElement("div", {
    className: "section-content ".concat(mirrorLayout ? "mirror" : "")
  }, /*#__PURE__*/_react["default"].createElement("div", {
    className: "section-image"
  }, /*#__PURE__*/_react["default"].createElement("img", {
    src: image,
    alt: "Section"
  })), /*#__PURE__*/_react["default"].createElement("div", {
    className: "section-text"
  }, /*#__PURE__*/_react["default"].createElement("h2", {
    className: "section-headline"
  }, headline), /*#__PURE__*/_react["default"].createElement("p", {
    className: "section-paragraph"
  }, paragraph), /*#__PURE__*/_react["default"].createElement("button", {
    className: "section-cta",
    onClick: cta.onClick
  }, cta.text)))));
};
var _default = exports["default"] = SectionA;