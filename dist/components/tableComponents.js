"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
var _typeof = require("@babel/runtime/helpers/typeof");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.SearchBox = exports.MyTableTools = exports.MyTableToolButton = exports.MyTableTextField = exports.MyTableSortLabel = exports.MyTableRow = exports.MyTablePagination = exports.MyTableIconButton = exports.MyTableHead = exports.MyTableFilterMenu = exports.MyTableContainer = exports.MyTableCheckbox = exports.MyTableCell = exports.MyTableBody = exports.MyTableBadge = exports.MyTable = void 0;
var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));
var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));
var _react = _interopRequireWildcard(require("react"));
var _emotionRgba = require("emotion-rgba");
var _material = require("@mui/material");
var _styles = require("@mui/material/styles");
var _Iconify = _interopRequireDefault(require("./Iconify"));
var _jsxRuntime = require("react/jsx-runtime");
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != _typeof(e) && "function" != typeof e) return { "default": e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && {}.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n["default"] = e, t && t.set(e, n), n; }
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
    _useState2 = (0, _slicedToArray2["default"])(_useState, 2),
    searchFieldText = _useState2[0],
    setSearchFieldText = _useState2[1];
  return /*#__PURE__*/(0, _jsxRuntime.jsxs)(_material.Box, {
    sx: {
      display: "flex",
      height: "100%",
      marginRight: "12px",
      boxSizing: "border-box"
    },
    children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_material.Select, {
      sx: (_ref16 = {
        boxShadow: "none",
        border: "none",
        borderRight: "1px solid transparent",
        borderTopLeftRadius: "8px",
        borderBottomLeftRadius: "8px",
        borderTopRightRadius: "0px",
        borderBottomRightRadius: "0px",
        marginRight: "-2px"
      }, (0, _defineProperty2["default"])(_ref16, "border", "1px solid transparent !important"), (0, _defineProperty2["default"])(_ref16, "padding", "0px !important"), (0, _defineProperty2["default"])(_ref16, "& .MuiSelect-select", {
        border: "none !important",
        padding: "0px 12px",
        minWidth: "50px",
        minHeight: " 0px !important"
      }), (0, _defineProperty2["default"])(_ref16, "&: focus", {
        border: "none"
      }), (0, _defineProperty2["default"])(_ref16, "&: hover", {
        padding: "0px 12px",
        border: "1px solid transparent !important"
      }), (0, _defineProperty2["default"])(_ref16, "& .MuiInputBase-root", {
        padding: "0px",
        "&: hover": {
          padding: "0px !important",
          border: "1px solid red !important"
        }
      }), (0, _defineProperty2["default"])(_ref16, "& .MuiOutlinedInput-select", {
        "&: hover": {
          padding: "0px 12px",
          border: "1px solid red !important"
        }
      }), _ref16),
      value: searchBy ? searchBy : options[0].field,
      defaultValue: searchBy,
      onChange: function onChange(e) {
        return setSearchBy(e.target.value);
      },
      children: options.map(function (option, i) {
        return /*#__PURE__*/(0, _jsxRuntime.jsx)(_material.MenuItem, {
          value: option.field,
          children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_material.Typography, {
            variant: "body2",
            fontWeight: 500,
            children: option.title
          })
        }, i);
      })
    }), /*#__PURE__*/(0, _jsxRuntime.jsx)(MyTableTextField, {
      id: "search",
      variant: "outlined",
      size: "small",
      placeholder: placeholder,
      fullWidth: true,
      InputProps: {
        startAdornment: /*#__PURE__*/(0, _jsxRuntime.jsx)(_material.IconButton, {
          size: "small",
          onClick: function onClick() {
            handleRequestSearch(searchFieldText, searchBy ? searchBy : options[0].field);
          },
          children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_Iconify["default"], {
            icon: "bx:bx-search"
          })
        })
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
    })]
  });
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