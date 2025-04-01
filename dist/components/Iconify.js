"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = Iconify;
var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));
var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutProperties"));
var _react = require("@iconify/react");
var _material = require("@mui/material");
var _jsxRuntime = require("react/jsx-runtime");
var _excluded = ["icon", "sx", "width", "height"];
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { (0, _defineProperty2["default"])(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function Iconify(_ref) {
  var _sx$color;
  var icon = _ref.icon,
    sx = _ref.sx,
    width = _ref.width,
    height = _ref.height,
    other = (0, _objectWithoutProperties2["default"])(_ref, _excluded);
  var theme = (0, _material.useTheme)();
  return /*#__PURE__*/(0, _jsxRuntime.jsx)(_material.Box, _objectSpread({
    component: _react.Icon,
    icon: icon,
    sx: _objectSpread(_objectSpread({}, sx), {}, {
      color: (_sx$color = sx === null || sx === void 0 ? void 0 : sx.color) !== null && _sx$color !== void 0 ? _sx$color : theme.palette.icon.main
    })
  }, other));
}