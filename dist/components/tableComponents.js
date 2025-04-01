"use strict";

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.SearchBox = exports.MyTableTools = exports.MyTableToolButton = exports.MyTableTextField = exports.MyTableSortLabel = exports.MyTableRow = exports.MyTablePagination = exports.MyTableIconButton = exports.MyTableHead = exports.MyTableFilterMenu = exports.MyTableContainer = exports.MyTableCheckbox = exports.MyTableCell = exports.MyTableBody = exports.MyTableBadge = exports.MyTable = void 0;
var _emotionRgba = require("emotion-rgba");
var _material = require("@mui/material");
var _styles = require("@mui/material/styles");
var _Iconify = _interopRequireDefault(require("../../src/components/misc/Iconify"));
var _react = require("react");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t["return"] && (u = t["return"](), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }
// ==== TABLE CONTAINER =====
var MyTableContainer = exports.MyTableContainer = (0, _styles.styled)(_material.TableContainer)(function (_ref) {
  var theme = _ref.theme;
  return {
    //   padding: theme.spacing(2),
    borderRadius: "7.51px",
    boxShadow: "0px 1px 1px ".concat(theme.palette.divider),
    transition: "background-color 0.3s"
  };
});
var MyTableTools = exports.MyTableTools = (0, _styles.styled)(_material.Box)(function (_ref2) {
  var theme = _ref2.theme;
  return {
    padding: theme.spacing(2),
    borderBottom: "1px solid ".concat(theme.palette.divider),
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between"
  };
});
var MyTableHead = exports.MyTableHead = (0, _styles.styled)(_material.TableHead)(function (_ref3) {
  var theme = _ref3.theme;
  return {
    minWidth: "100%",
    backgroundColor: (0, _emotionRgba.rgba)(theme.palette.primary.main, 0.1),
    // backgroundColor: emphasize(theme.palette.action.selected, 0.7),
    "tr > th": {
      padding: theme.spacing(1.2, 2),
      color: theme.palette.text.secondary,
      fontWeight: 500
    }
  };
});
var MyTableToolButton = exports.MyTableToolButton = (0, _styles.styled)(_material.Button)(function (_ref4) {
  var theme = _ref4.theme,
    variant = _ref4.variant;
  return {
    minWidth: theme.spacing(10),
    textTransform: "none",
    borderRadius: "7.51px",
    color: theme.palette.text.secondary,
    backgroundColor: theme.palette.background.paper,
    borderColor: theme.palette.divider,
    border: "1px solid ".concat(theme.palette.divider),
    "&:hover": {
      backgroundColor: (0, _emotionRgba.rgba)(theme.palette.primary.main, 0.2),
      // backgroundColor: emphasize(
      //   theme.palette.action.selected,
      //   theme.palette.action.hoverOpacity
      // ),
      borderColor: theme.palette.divider
    }
  };
});
var MyTableCheckbox = exports.MyTableCheckbox = (0, _styles.styled)(_material.Checkbox)(function (_ref5) {
  var theme = _ref5.theme;
  return {
    padding: theme.spacing(0),
    boxSizing: "border-box"
  };
});
var MyTableRow = exports.MyTableRow = (0, _styles.styled)(_material.TableRow)(function (_ref6) {
  var theme = _ref6.theme;
  return {};
});
var MyTableCell = exports.MyTableCell = (0, _styles.styled)(_material.TableCell)(function (_ref7) {
  var theme = _ref7.theme;
  return {
    padding: theme.spacing(1, 2)
  };
});
var MyTableSortLabel = exports.MyTableSortLabel = (0, _styles.styled)(_material.TableSortLabel)(function (_ref8) {
  var theme = _ref8.theme;
  return {
    color: theme.palette.primary.main,
    "&:hover": {
      color: theme.palette.secondary.main
    }
  };
});
var MyTableTextField = exports.MyTableTextField = (0, _styles.styled)(_material.TextField)(function (_ref9) {
  var theme = _ref9.theme;
  return {
    ".MuiInputBase-root": {
      fontSize: "12px !important",
      paddingLeft: "10px !important",
      ".MuiInputBase-input": {
        padding: "5px !important"
      }
    }
  };
});
var MyTable = exports.MyTable = (0, _styles.styled)(_material.Table)(function (_ref10) {
  var theme = _ref10.theme;
  return {};
});
var MyTableBody = exports.MyTableBody = (0, _styles.styled)(_material.TableBody)(function (_ref11) {
  var theme = _ref11.theme;
  return {
    position: "relative"
  };
});
var MyTableIconButton = exports.MyTableIconButton = (0, _styles.styled)(_material.IconButton)(function (_ref12) {
  var theme = _ref12.theme;
  return {};
});
var MyTablePagination = exports.MyTablePagination = (0, _styles.styled)(_material.TablePagination)(function (_ref13) {
  var theme = _ref13.theme;
  return {};
});
var MyTableFilterMenu = exports.MyTableFilterMenu = (0, _styles.styled)(_material.Menu)(function (_ref14) {
  var theme = _ref14.theme;
  return {
    "& .MuiMenu-paper": {
      backgroundColor: theme.palette.background.paper,
      borderRadius: "14px",
      padding: "0px 10px",
      minWidth: "200px"
    }
  };
});
var SearchBox = exports.SearchBox = function SearchBox(_ref15) {
  var _ref16;
  var placeholder = _ref15.placeholder,
    options = _ref15.options,
    search = _ref15.search,
    searchBy = _ref15.searchBy,
    setSearchBy = _ref15.setSearchBy,
    handleRequestSearch = _ref15.handleRequestSearch;
  var _useState = (0, _react.useState)(""),
    _useState2 = _slicedToArray(_useState, 2),
    searchFieldText = _useState2[0],
    setSearchFieldText = _useState2[1];
  return /*#__PURE__*/React.createElement(_material.Box, {
    sx: {
      display: "flex",
      height: "100%",
      marginRight: "12px",
      boxSizing: "border-box"
    }
  }, /*#__PURE__*/React.createElement(_material.Select, {
    sx: (_ref16 = {
      boxShadow: "none",
      border: "none",
      borderRight: "1px solid transparent",
      borderTopLeftRadius: "8px",
      borderBottomLeftRadius: "8px",
      borderTopRightRadius: "0px",
      borderBottomRightRadius: "0px",
      marginRight: "-2px"
    }, _defineProperty(_ref16, "border", "1px solid transparent !important"), _defineProperty(_ref16, "padding", "0px !important"), _defineProperty(_ref16, "& .MuiSelect-select", {
      border: "none !important",
      padding: "0px 12px",
      minWidth: "50px",
      minHeight: " 0px !important"
    }), _defineProperty(_ref16, "&: focus", {
      border: "none"
    }), _defineProperty(_ref16, "&: hover", {
      padding: "0px 12px",
      border: "1px solid transparent !important"
    }), _defineProperty(_ref16, "& .MuiInputBase-root", {
      padding: "0px",
      "&: hover": {
        padding: "0px !important",
        border: "1px solid red !important"
      }
    }), _defineProperty(_ref16, "& .MuiOutlinedInput-select", {
      "&: hover": {
        padding: "0px 12px",
        border: "1px solid red !important"
      }
    }), _ref16),
    value: searchBy ? searchBy : options[0].field,
    defaultValue: searchBy,
    onChange: function onChange(e) {
      return setSearchBy(e.target.value);
    }
  }, options.map(function (option, i) {
    return /*#__PURE__*/React.createElement(_material.MenuItem, {
      key: i,
      value: option.field
    }, /*#__PURE__*/React.createElement(_material.Typography, {
      variant: "body2",
      fontWeight: 500
    }, option.title));
  })), /*#__PURE__*/React.createElement(MyTableTextField, {
    id: "search",
    variant: "outlined",
    size: "small",
    placeholder: placeholder,
    fullWidth: true,
    InputProps: {
      startAdornment: /*#__PURE__*/React.createElement(_material.IconButton, {
        size: "small",
        onClick: function onClick() {
          handleRequestSearch(searchFieldText, searchBy ? searchBy : options[0].field);
        }
      }, /*#__PURE__*/React.createElement(_Iconify["default"], {
        icon: "bx:bx-search"
      }))
    },
    sx: {
      "& .MuiInputBase-root": {
        borderTopRightRadius: "8px",
        borderBottomRightRadius: "8px",
        borderTopLeftRadius: "0px",
        borderBottomLeftRadius: "0px",
        height: "100%",
        border: "1px solid transparent !important",
        "&: hover": {
          border: "1px solid transparent !important"
        },
        minHeight: "none"
      }
    },
    onChange: function onChange(e) {
      return setSearchFieldText(e.target.value);
    },
    onKeyDown: function onKeyDown(e) {
      return e.key === "Enter" && handleRequestSearch(e.target.value, searchBy ? searchBy : options[0].field);
    }
  }));
};
var MyTableBadge = exports.MyTableBadge = (0, _styles.styled)(_material.Badge)(function (_ref17) {
  var theme = _ref17.theme;
  return {
    "& .MuiBadge-badge": {
      zIndex: "0 !important",
      right: "22px"
    }
  };
});