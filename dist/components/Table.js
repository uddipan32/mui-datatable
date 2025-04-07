"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = MyDataTable;
var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));
var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));
var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));
var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));
var _moment = _interopRequireDefault(require("moment"));
var _reactCsv = require("react-csv");
var _link = _interopRequireDefault(require("next/link"));
var _router = require("next/router");
var _react = _interopRequireDefault(require("react"));
var _Button = _interopRequireDefault(require("@mui/material/Button"));
var _Select = _interopRequireDefault(require("@mui/material/Select"));
var _Box = _interopRequireDefault(require("@mui/material/Box"));
var _TableCell = _interopRequireDefault(require("@mui/material/TableCell"));
var _Tooltip = _interopRequireDefault(require("@mui/material/Tooltip"));
var _Typography = _interopRequireDefault(require("@mui/material/Typography"));
var _InputAdornment = _interopRequireDefault(require("@mui/material/InputAdornment"));
var _styles = require("@mui/material/styles");
var _MenuItem = _interopRequireDefault(require("@mui/material/MenuItem"));
var _Search = _interopRequireDefault(require("@mui/icons-material/Search"));
var _tableComponents = require("./tableComponents");
var _Iconify = _interopRequireDefault(require("./Iconify"));
var _emotionRgba = require("emotion-rgba");
var _jsxRuntime = require("react/jsx-runtime");
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { (0, _defineProperty2["default"])(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; } // ==== IMPORT COMPONENTS ====
function TableLoading() {
  var _ref;
  var theme = (0, _styles.useTheme)();
  return /*#__PURE__*/(0, _jsxRuntime.jsx)(_Box["default"], {
    id: "table-loading",
    sx: (_ref = {
      position: "absolute",
      zIndex: 99,
      height: "100%",
      width: "100%",
      backgroundColor: (0, _emotionRgba.rgba)(theme.palette.background["default"], 0.5)
    }, (0, _defineProperty2["default"])(_ref, "width", "100%"), (0, _defineProperty2["default"])(_ref, "height", "100%"), (0, _defineProperty2["default"])(_ref, "display", "flex"), (0, _defineProperty2["default"])(_ref, "justifyContent", "center"), (0, _defineProperty2["default"])(_ref, "alignItems", "center"), _ref),
    children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_Iconify["default"], {
      icon: "svg-spinners:gooey-balls-2",
      sx: {
        width: "50px",
        height: "50px",
        color: theme.palette.primary.main
      }
    })
  });
}
function TableHeader(_ref2) {
  var _options$tableHeaderS, _options$tableHeaderS2, _options$tableHeaderS3;
  var onSelectAllClick = _ref2.onSelectAllClick,
    order = _ref2.order,
    orderBy = _ref2.orderBy,
    numSelected = _ref2.numSelected,
    rowCount = _ref2.rowCount,
    selectable = _ref2.selectable,
    onRequestSort = _ref2.onRequestSort,
    columns = _ref2.columns,
    rowSelection = _ref2.rowSelection,
    actions = _ref2.actions,
    onRequestSearch = _ref2.onRequestSearch,
    options = _ref2.options;
  var theme = (0, _styles.useTheme)();
  var createSortHandler = function createSortHandler(property) {
    return function (event) {
      onRequestSort(event, property);
    };
  };
  return /*#__PURE__*/(0, _jsxRuntime.jsx)(_tableComponents.MyTableHead, {
    id: "table-header",
    sx: _objectSpread({}, options === null || options === void 0 ? void 0 : options.tableHeaderStyle),
    children: /*#__PURE__*/(0, _jsxRuntime.jsxs)(_tableComponents.MyTableRow, {
      sx: _objectSpread({}, options === null || options === void 0 || (_options$tableHeaderS = options.tableHeaderStyle) === null || _options$tableHeaderS === void 0 ? void 0 : _options$tableHeaderS.rowStyle),
      children: [(rowSelection || rowSelection == null) && selectable && /*#__PURE__*/(0, _jsxRuntime.jsx)(_tableComponents.MyTableCell, {
        padding: "none",
        sx: _objectSpread({}, options === null || options === void 0 || (_options$tableHeaderS2 = options.tableHeaderStyle) === null || _options$tableHeaderS2 === void 0 ? void 0 : _options$tableHeaderS2.cellStyle),
        children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_tableComponents.MyTableCheckbox, {
          icon: /*#__PURE__*/(0, _jsxRuntime.jsx)(_Iconify["default"], {
            icon: "fluent:checkbox-unchecked-16-regular",
            sx: {
              width: "24px",
              height: "24px",
              color: (0, _emotionRgba.rgba)(theme.palette.primary.main, 0.7)
            }
          }),
          checkedIcon: /*#__PURE__*/(0, _jsxRuntime.jsx)(_Iconify["default"], {
            icon: "akar-icons:check-box-fill",
            sx: {
              width: "24px",
              height: "24px",
              color: theme.palette.primary.main
            }
          }),
          indeterminate: numSelected > 0 && numSelected < rowCount,
          checked: rowCount > 0 && numSelected === rowCount,
          onChange: onSelectAllClick,
          inputProps: {
            "aria-label": "select all"
          }
        })
      }), actions && (actions === null || actions === void 0 ? void 0 : actions.length) > 0 && /*#__PURE__*/(0, _jsxRuntime.jsx)(_TableCell["default"], {
        align: "center",
        sx: _objectSpread({}, options === null || options === void 0 || (_options$tableHeaderS3 = options.tableHeaderStyle) === null || _options$tableHeaderS3 === void 0 ? void 0 : _options$tableHeaderS3.cellStyle),
        padding: "none",
        children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_Typography["default"], {
          variant: "body2",
          fontWeight: 600,
          children: "Actions"
        })
      }), columns.map(function (column, i) {
        var _options$tableHeaderS4;
        return /*#__PURE__*/(0, _jsxRuntime.jsxs)(_tableComponents.MyTableCell, {
          sx: options === null || options === void 0 || (_options$tableHeaderS4 = options.tableHeaderStyle) === null || _options$tableHeaderS4 === void 0 ? void 0 : _options$tableHeaderS4.cellStyle,
          align: column.align,
          padding: column.disablePadding ? "none" : "normal",
          sortDirection: orderBy === column.id ? order : false,
          children: [column.sorting == null || column.sorting ? /*#__PURE__*/(0, _jsxRuntime.jsx)(_tableComponents.MyTableSortLabel, {
            active: orderBy === column.field,
            direction: orderBy === column.field ? order : "asc",
            onClick: createSortHandler(column.field),
            sx: {},
            children: column.title
          }) : /*#__PURE__*/(0, _jsxRuntime.jsx)(_Typography["default"], {
            variant: "body2",
            fontWeight: 600,
            children: column.title
          }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_Box["default"], {
            height: 1
          })]
        }, i);
      })]
    })
  });
}

/**
 *
 * @param {title, subtitle, data, columns, filterOptions, options, tableRef, onRowClick, actions, tools, toolsLeft, selectable, noDataMsg, filterChangeListener}
 * @returns
 */

function MyDataTable(_ref3) {
  var _options$pageSize, _options$pageSizeOpti;
  var title = _ref3.title,
    subtitle = _ref3.subtitle,
    data = _ref3.data,
    columns = _ref3.columns,
    filterOptions = _ref3.filterOptions,
    options = _ref3.options,
    tableRef = _ref3.tableRef,
    onRowClick = _ref3.onRowClick,
    actions = _ref3.actions,
    tools = _ref3.tools,
    toolsLeft = _ref3.toolsLeft,
    _ref3$selectable = _ref3.selectable,
    selectable = _ref3$selectable === void 0 ? true : _ref3$selectable,
    noDataMsg = _ref3.noDataMsg,
    filterChangeListener = _ref3.filterChangeListener;
  var csvRef = _react["default"].useRef();
  var _React$useState = _react["default"].useState("asc"),
    _React$useState2 = (0, _slicedToArray2["default"])(_React$useState, 2),
    order = _React$useState2[0],
    setOrder = _React$useState2[1];
  var _React$useState3 = _react["default"].useState(""),
    _React$useState4 = (0, _slicedToArray2["default"])(_React$useState3, 2),
    orderBy = _React$useState4[0],
    setOrderBy = _React$useState4[1];
  var _React$useState5 = _react["default"].useState(""),
    _React$useState6 = (0, _slicedToArray2["default"])(_React$useState5, 2),
    search = _React$useState6[0],
    setSearch = _React$useState6[1];
  var _React$useState7 = _react["default"].useState(null),
    _React$useState8 = (0, _slicedToArray2["default"])(_React$useState7, 2),
    searchBy = _React$useState8[0],
    setSearchBy = _React$useState8[1];
  var _React$useState9 = _react["default"].useState([]),
    _React$useState10 = (0, _slicedToArray2["default"])(_React$useState9, 2),
    selected = _React$useState10[0],
    setSelected = _React$useState10[1];
  var _React$useState11 = _react["default"].useState(0),
    _React$useState12 = (0, _slicedToArray2["default"])(_React$useState11, 2),
    page = _React$useState12[0],
    setPage = _React$useState12[1];
  var _React$useState13 = _react["default"].useState((_options$pageSize = options === null || options === void 0 ? void 0 : options.pageSize) !== null && _options$pageSize !== void 0 ? _options$pageSize : 50),
    _React$useState14 = (0, _slicedToArray2["default"])(_React$useState13, 2),
    rowsPerPage = _React$useState14[0],
    setRowsPerPage = _React$useState14[1];
  var _React$useState15 = _react["default"].useState([]),
    _React$useState16 = (0, _slicedToArray2["default"])(_React$useState15, 2),
    rows = _React$useState16[0],
    setRows = _React$useState16[1];
  var _React$useState17 = _react["default"].useState(0),
    _React$useState18 = (0, _slicedToArray2["default"])(_React$useState17, 2),
    totalCount = _React$useState18[0],
    setTotalCount = _React$useState18[1];
  var _React$useState19 = _react["default"].useState([]),
    _React$useState20 = (0, _slicedToArray2["default"])(_React$useState19, 2),
    exportData = _React$useState20[0],
    setExportData = _React$useState20[1];
  var _React$useState21 = _react["default"].useState(null),
    _React$useState22 = (0, _slicedToArray2["default"])(_React$useState21, 2),
    filter = _React$useState22[0],
    setFilter = _React$useState22[1];
  var _React$useState23 = _react["default"].useState(null),
    _React$useState24 = (0, _slicedToArray2["default"])(_React$useState23, 2),
    tempFilter = _React$useState24[0],
    setTempFilter = _React$useState24[1];

  // loading
  var _React$useState25 = _react["default"].useState(false),
    _React$useState26 = (0, _slicedToArray2["default"])(_React$useState25, 2),
    isLoading = _React$useState26[0],
    setLoading = _React$useState26[1];
  var _React$useState27 = _react["default"].useState(false),
    _React$useState28 = (0, _slicedToArray2["default"])(_React$useState27, 2),
    isExporting = _React$useState28[0],
    setExporting = _React$useState28[1];
  var theme = (0, _styles.useTheme)();

  // routers
  var router = (0, _router.useRouter)();
  var currentPage = router.query.page;
  var currentFilter = router.query.filter;
  var handleChangePage = function handleChangePage(event, newPage) {
    router.replace({
      query: _objectSpread(_objectSpread({}, router.query), {}, {
        page: newPage
      })
    });
    setPage(parseInt(newPage));
  };
  var handleChangeRowsPerPage = function handleChangeRowsPerPage(event) {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };
  var handleRequestSort = function handleRequestSort(event, property) {
    var isAsc = orderBy === property && order === "asc";
    setOrder(isAsc ? "desc" : "asc");
    setOrderBy(property);
  };
  var handleRequestSearch = function handleRequestSearch(search, searchBy) {
    setSearch(search);
    setSearchBy(searchBy);
  };
  var handleSelectAllClick = function handleSelectAllClick(event) {
    if (event.target.checked) {
      var newSelecteds = rows.map(function (n) {
        return n._id;
      });
      setSelected(newSelecteds);
      return;
    }
    setSelected([]);
  };
  var handleClick = function handleClick(event, id) {
    var selectedIndex = selected.indexOf(id);
    var newSelected = [];
    if (selectedIndex === -1) {
      newSelected = newSelected.concat(selected, id);
    } else {
      newSelected = selected.filter(function (item) {
        return item !== id;
      });
    }
    setSelected(newSelected);
  };
  var isSelected = function isSelected(name) {
    return selected.indexOf(name) !== -1;
  };

  // === FILTER ====
  var _React$useState29 = _react["default"].useState(null),
    _React$useState30 = (0, _slicedToArray2["default"])(_React$useState29, 2),
    filterAnchorEl = _React$useState30[0],
    setFilterAnchorEl = _React$useState30[1];
  var openFilterMenu = Boolean(filterAnchorEl);
  var handleOpenFilterMenu = function handleOpenFilterMenu(event) {
    setFilterAnchorEl(event.currentTarget);
  };
  var handleCloseFilterMenu = function handleCloseFilterMenu() {
    setFilterAnchorEl(null);
  };
  var handleFilterChange = function handleFilterChange() {
    router.replace({
      query: _objectSpread(_objectSpread({}, router.query), {}, {
        filter: JSON.stringify(filter)
      })
    });
  };
  _react["default"].useEffect(function () {
    handleFilterChange();
  }, [filter]);

  // ==== EXPORT DATA ====
  var _React$useState31 = _react["default"].useState(null),
    _React$useState32 = (0, _slicedToArray2["default"])(_React$useState31, 2),
    exportAnchorEl = _React$useState32[0],
    setExportAnchorEl = _React$useState32[1];
  var openExportMenu = Boolean(exportAnchorEl);
  var handleOpenExportMenu = function handleOpenExportMenu(event) {
    setExportAnchorEl(event.currentTarget);
  };
  var handleCloseExportMenu = function handleCloseExportMenu() {
    setExportAnchorEl(null);
  };
  var handleExportDataCSV = /*#__PURE__*/function () {
    var _ref4 = (0, _asyncToGenerator2["default"])(/*#__PURE__*/_regenerator["default"].mark(function _callee() {
      var tempColumns, rowData;
      return _regenerator["default"].wrap(function _callee$(_context) {
        while (1) switch (_context.prev = _context.next) {
          case 0:
            tempColumns = columns.filter(function (column) {
              return column["export"] != false;
            });
            rowData = rows.map(function (row) {
              return tempColumns.map(function (column) {
                if (column.exportValue) {
                  return column.exportValue(row);
                } else if (column.render) {
                  return column.render(row);
                } else {
                  return row[column.field];
                }
              });
            });
            console.log("data", rowData);
            setExportData(rowData);
            return _context.abrupt("return", rowData);
          case 5:
          case "end":
            return _context.stop();
        }
      }, _callee);
    }));
    return function handleExportDataCSV() {
      return _ref4.apply(this, arguments);
    };
  }();
  var handleExportSelectedDataCSV = /*#__PURE__*/function () {
    var _ref5 = (0, _asyncToGenerator2["default"])(/*#__PURE__*/_regenerator["default"].mark(function _callee2() {
      var tempColumns, selectedData, rowData;
      return _regenerator["default"].wrap(function _callee2$(_context2) {
        while (1) switch (_context2.prev = _context2.next) {
          case 0:
            setExporting(true);
            tempColumns = columns.filter(function (column) {
              return column["export"] != false;
            });
            selectedData = rows.filter(function (row) {
              return selected.includes(row._id);
            });
            rowData = selectedData.map(function (row) {
              return tempColumns.map(function (column) {
                if (column.exportValue) {
                  return column.exportValue(row);
                } else if (column.render) {
                  return column.render(row);
                } else {
                  return row[column.field];
                }
              });
            });
            setExporting(false);
            setExportData(rowData);
            return _context2.abrupt("return", rowData);
          case 7:
          case "end":
            return _context2.stop();
        }
      }, _callee2);
    }));
    return function handleExportSelectedDataCSV() {
      return _ref5.apply(this, arguments);
    };
  }();
  var handleExportAllDataCSV = /*#__PURE__*/function () {
    var _ref6 = (0, _asyncToGenerator2["default"])(/*#__PURE__*/_regenerator["default"].mark(function _callee3() {
      var response, tempColumns, rowData;
      return _regenerator["default"].wrap(function _callee3$(_context3) {
        while (1) switch (_context3.prev = _context3.next) {
          case 0:
            setExporting(true);
            setExportData([]);
            _context3.next = 4;
            return data({
              page: 0,
              pageSize: 1000000,
              orderBy: orderBy,
              order: order,
              search: search,
              searchBy: searchBy
            });
          case 4:
            response = _context3.sent;
            tempColumns = columns.filter(function (column) {
              return column["export"] != false;
            }); // const rowData = response.data.map((row) => {
            //   return tempColumns.map((column) => {
            //     if (column.exportValue) {
            //       return column.exportValue(row);
            //     } else if (column.render) {
            //       return column.render(row);
            //     } else {
            //       return row[column.field];
            //     }
            //   });
            // });
            rowData = response.data.map(function (row) {
              return tempColumns.map(function (column) {
                if (column.exportValue) {
                  return column.exportValue(row);
                } else if (column.render) {
                  return column.render(row);
                } else {
                  return row[column.field];
                }
              });
            });
            setExporting(false);
            setExportData(rowData);
            return _context3.abrupt("return", rowData);
          case 10:
          case "end":
            return _context3.stop();
        }
      }, _callee3);
    }));
    return function handleExportAllDataCSV() {
      return _ref6.apply(this, arguments);
    };
  }();
  _react["default"].useEffect(function () {
    if (exportData.length > 0) {
      csvRef.current.link.click();
    }
  }, [exportData]);

  // =======

  // ==== FETCH DATA ====

  var fetchData = /*#__PURE__*/function () {
    var _ref7 = (0, _asyncToGenerator2["default"])(/*#__PURE__*/_regenerator["default"].mark(function _callee4(values, initialFilter) {
      var _data$length, response;
      return _regenerator["default"].wrap(function _callee4$(_context4) {
        while (1) switch (_context4.prev = _context4.next) {
          case 0:
            setSelected([]);
            if (!(typeof data !== "function")) {
              _context4.next = 5;
              break;
            }
            setRows(data !== null && data !== void 0 ? data : []);
            setTotalCount((_data$length = data === null || data === void 0 ? void 0 : data.length) !== null && _data$length !== void 0 ? _data$length : 0);
            return _context4.abrupt("return");
          case 5:
            setLoading(true);
            console.log("InitialFilter: ", initialFilter, filter);
            if (initialFilter) {
              setFilter(initialFilter);
              setTempFilter(initialFilter);
              values = _objectSpread(_objectSpread({}, values), {}, {
                filter: initialFilter
              });
            } else if (filter) {
              values = _objectSpread(_objectSpread({}, values), {}, {
                filter: filter
              });
            }
            _context4.next = 10;
            return data(_objectSpread({
              page: page,
              pageSize: rowsPerPage,
              orderBy: orderBy,
              order: order,
              search: search,
              searchBy: searchBy
            }, values));
          case 10:
            response = _context4.sent;
            if (response) {
              setLoading(false);
              setRows(response.data);
              setTotalCount(response.totalCount);
            }
          case 12:
          case "end":
            return _context4.stop();
        }
      }, _callee4);
    }));
    return function fetchData(_x, _x2) {
      return _ref7.apply(this, arguments);
    };
  }();
  _react["default"].useEffect(function () {
    if (currentPage) setPage(parseInt(currentPage));
    if (currentFilter) {
      setFilter(JSON.parse(currentFilter));
      setTempFilter(JSON.parse(currentFilter));
      fetchData(null, JSON.parse(currentFilter));
    } else {
      fetchData();
    }
  }, [currentPage, search, rowsPerPage, order, orderBy]);
  _react["default"].useEffect(function () {
    if (router.query.filter == undefined) return;
    var filterData = JSON.parse(router.query.filter);
    // if (!filterData) return;
    console.log("filter", filterData);
    fetchData(null, filterData);
  }, [router.query.filter]);

  // filter option format
  var filterOptionsFormat = filterOptions === null || filterOptions === void 0 ? void 0 : filterOptions.filter(function (option) {
    return option;
  });

  // temp filter change
  _react["default"].useEffect(function () {
    if (filterChangeListener) {
      filterChangeListener(tempFilter);
    }
  }, [tempFilter]);
  return /*#__PURE__*/(0, _jsxRuntime.jsxs)(_tableComponents.MyTableContainer
  // component={Paper}
  , {
    sx: _objectSpread({
      position: "relative",
      width: "100%"
    }, options === null || options === void 0 ? void 0 : options.tableContainerStyle),
    children: [/*#__PURE__*/(0, _jsxRuntime.jsxs)(_tableComponents.MyTableTools, {
      id: "tools",
      sx: _objectSpread({}, options === null || options === void 0 ? void 0 : options.tableToolbarStyle),
      children: [title && /*#__PURE__*/(0, _jsxRuntime.jsxs)(_Box["default"], {
        id: "",
        children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_Typography["default"], {
          variant: "h5",
          sx: _objectSpread({}, options === null || options === void 0 ? void 0 : options.titleStyle),
          children: title
        }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_Typography["default"], {
          variant: "subtitle2",
          color: "GrayText",
          textOverflow: "ellipsis",
          sx: _objectSpread({}, options === null || options === void 0 ? void 0 : options.subtitleStyle),
          children: subtitle
        })]
      }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_Box["default"], {
        className: "flex",
        mr: 2,
        sx: {
          maxWidth: "50%",
          overflowY: "auto"
        },
        children: toolsLeft && toolsLeft.map(function (tool, i) {
          return tool && (tool === null || tool === void 0 ? void 0 : tool.render());
        })
      }), /*#__PURE__*/(0, _jsxRuntime.jsxs)(_Box["default"], {
        id: "tools",
        sx: {
          display: "flex",
          flexWrap: "nowrap",
          alignItems: "center"
        },
        children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_Box["default"], {
          sx: (0, _defineProperty2["default"])({
            height: "100%",
            display: {
              xs: "none",
              sm: "block"
            }
          }, "height", "40px"),
          children: columns.filter(function (column) {
            return column.searchable;
          }).length > 0 && /*#__PURE__*/(0, _jsxRuntime.jsx)(_tableComponents.SearchBox, {
            id: "search",
            placeholder: "Search here",
            options: columns.filter(function (column) {
              return column.searchable;
            }),
            search: search,
            searchBy: searchBy,
            setSearchBy: setSearchBy,
            handleRequestSearch: handleRequestSearch
          })
        }), filterOptionsFormat && filterOptionsFormat.length > 0 && /*#__PURE__*/(0, _jsxRuntime.jsx)(_tableComponents.MyTableBadge, {
          badgeContent: filter ? Object.keys(filter).length : 0,
          color: "primary",
          size: "small",
          children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_tableComponents.MyTableToolButton, {
            sx: {
              marginRight: "10px"
            },
            startIcon: /*#__PURE__*/(0, _jsxRuntime.jsx)(_Iconify["default"], {
              icon: "ion:filter"
            }),
            id: "table-filter",
            onClick: handleOpenFilterMenu,
            children: "Filter"
          })
        }), tools && tools.map(function (tool, i) {
          return tool && (tool === null || tool === void 0 ? void 0 : tool.render(selected));
        }), (options === null || options === void 0 ? void 0 : options.exportButton) && /*#__PURE__*/(0, _jsxRuntime.jsx)(_jsxRuntime.Fragment, {
          children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_tableComponents.MyTableToolButton, {
            startIcon: /*#__PURE__*/(0, _jsxRuntime.jsx)(_Iconify["default"], {
              icon: isExporting ? "line-md:downloading-loop" : "tabler:cloud-download"
            }),
            variant: "outlined",
            id: "table-export",
            sx: {
              mr: 1
            },
            disabled: isExporting,
            onClick: function onClick() {
              if (selected.length > 0) {
                handleExportSelectedDataCSV();
              } else {
                handleExportAllDataCSV();
              }
            },
            children: "Export"
          })
        }), (options === null || options === void 0 ? void 0 : options.refreshButton) && /*#__PURE__*/(0, _jsxRuntime.jsx)(_jsxRuntime.Fragment, {
          children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_tableComponents.MyTableToolButton, {
            sx: {
              mr: 1,
              height: "100%",
              minWidth: "0px"
            },
            onClick: function onClick() {
              return tableRef.current.fetchData();
            },
            children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_Iconify["default"], {
              icon: isLoading ? "eos-icons:loading" : "ant-design:reload-outlined",
              sx: {
                fontSize: "1rem",
                margin: "4px"
              }
            })
          })
        })]
      })]
    }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_Box["default"], {
      sx: {
        overflowY: "auto",
        boxSizing: "border-box"
      },
      children: /*#__PURE__*/(0, _jsxRuntime.jsxs)(_tableComponents.MyTable, {
        children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(TableHeader, {
          options: options,
          numSelected: selected.length,
          order: order,
          orderBy: orderBy,
          search: search,
          searchBy: searchBy,
          onRequestSearch: handleRequestSearch,
          onSelectAllClick: handleSelectAllClick,
          selectable: selectable,
          onRequestSort: handleRequestSort,
          rowCount: rows.length,
          actions: actions,
          columns: columns,
          rowSelection: options === null || options === void 0 ? void 0 : options.rowSelection
        }), /*#__PURE__*/(0, _jsxRuntime.jsxs)(_tableComponents.MyTableBody, {
          ref: function ref(_ref9) {
            tableRef && (tableRef.current = _objectSpread({
              ref: _ref9
            }, {
              getSelectedRows: function getSelectedRows() {
                return {
                  data: rows.filter(function (row) {
                    return selected.includes(row._id);
                  }),
                  ids: selected
                };
              },
              handleChangePage: handleChangePage,
              handleChangeRowsPerPage: handleChangeRowsPerPage,
              handleRequestSort: handleRequestSort,
              handleRequestSearch: handleRequestSearch,
              handleSelectAllClick: handleSelectAllClick,
              fetchData: fetchData,
              handleExportDataCSV: handleExportDataCSV,
              handleExportAllDataCSV: handleExportAllDataCSV,
              handleExportSelectedDataCSV: handleExportSelectedDataCSV
            }));
          },
          children: [isLoading && /*#__PURE__*/(0, _jsxRuntime.jsxs)(_jsxRuntime.Fragment, {
            children: [rows.length == 0 && /*#__PURE__*/(0, _jsxRuntime.jsx)(_Box["default"], {
              height: 60
            }), /*#__PURE__*/(0, _jsxRuntime.jsx)(TableLoading, {})]
          }), !isLoading && rows.length === 0 && /*#__PURE__*/(0, _jsxRuntime.jsx)(_tableComponents.MyTableRow, {
            sx: _objectSpread({}, options === null || options === void 0 ? void 0 : options.rowStyle),
            children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_tableComponents.MyTableCell, {
              colSpan: columns.length + 1,
              children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_Box["default"], {
                className: "flex align-center justify-center",
                mt: 2,
                mb: 2,
                children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_Typography["default"], {
                  variant: "body2",
                  color: "GrayText",
                  textAlign: "center",
                  children: noDataMsg !== null && noDataMsg !== void 0 ? noDataMsg : "No data found"
                })
              })
            })
          }), rows.map(function (row, index) {
            var isItemSelected = isSelected(row._id);
            var labelId = "enhanced-table-checkbox-".concat(index);
            return /*#__PURE__*/(0, _jsxRuntime.jsxs)(_tableComponents.MyTableRow, {
              hover: true,
              onClick: function onClick(event) {
                onRowClick && onRowClick(event, row);
              },
              role: "checkbox ",
              "aria-checked": isItemSelected,
              tabIndex: -1,
              selected: isItemSelected,
              sx: onRowClick ? _objectSpread({
                cursor: "pointer"
              }, options === null || options === void 0 ? void 0 : options.rowStyle) : _objectSpread({
                cursor: "default"
              }, options === null || options === void 0 ? void 0 : options.rowStyle),
              children: [selectable && ((options === null || options === void 0 ? void 0 : options.rowSelection) == null || options !== null && options !== void 0 && options.rowSelection) ? /*#__PURE__*/(0, _jsxRuntime.jsx)(_tableComponents.MyTableCell, {
                padding: "none",
                sx: _objectSpread({}, options === null || options === void 0 ? void 0 : options.cellStyle),
                children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_tableComponents.MyTableCheckbox, {
                  icon: /*#__PURE__*/(0, _jsxRuntime.jsx)(_Iconify["default"], {
                    icon: "fluent:checkbox-unchecked-16-regular",
                    sx: {
                      width: "24px",
                      height: "24px",
                      color: (0, _emotionRgba.rgba)(theme.palette.primary.main, 0.7)
                    }
                  }),
                  checkedIcon: /*#__PURE__*/(0, _jsxRuntime.jsx)(_Iconify["default"], {
                    icon: "akar-icons:check-box-fill",
                    sx: {
                      width: "24px",
                      height: "24px",
                      color: theme.palette.primary.main
                    }
                  }),
                  checked: isItemSelected,
                  onClick: function onClick(event) {
                    event.stopPropagation();
                    handleClick(event, row._id);
                  }
                })
              }) : null, actions && actions.length > 0 && /*#__PURE__*/(0, _jsxRuntime.jsx)(_tableComponents.MyTableCell, {
                align: "center",
                sx: _objectSpread({}, options === null || options === void 0 ? void 0 : options.cellStyle),
                children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_Box["default"], {
                  display: "flex",
                  children: actions.map(function (action, j) {
                    var actionData = typeof action === "function" ? action(row) : action;
                    if (!(actionData !== null && actionData !== void 0 && actionData.hidden)) {
                      return /*#__PURE__*/(0, _jsxRuntime.jsx)(_Tooltip["default"], {
                        title: actionData.title,
                        children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_tableComponents.MyTableIconButton, _objectSpread(_objectSpread({
                          disabled: actionData.disabled,
                          onClick: function onClick(e) {
                            e.stopPropagation();
                            actionData.onClick(event, row);
                          }
                        }, actionData.iconProps), {}, {
                          children: actionData === null || actionData === void 0 ? void 0 : actionData.icon
                        }))
                      }, "".concat(row._id, "-a-").concat(j));
                    }
                  })
                })
              }), columns.map(function (column, j) {
                if (column.render) {
                  return /*#__PURE__*/(0, _jsxRuntime.jsx)(_tableComponents.MyTableCell, {
                    align: column.align,
                    sx: _objectSpread({
                      wordBreak: "break-word",
                      whiteSpace: "normal"
                    }, options === null || options === void 0 ? void 0 : options.cellStyle),
                    children: column.render(row, j)
                  }, "".concat(row._id, "-b-").concat(j));
                } else {
                  return /*#__PURE__*/(0, _jsxRuntime.jsx)(_tableComponents.MyTableCell, {
                    align: column.align,
                    sx: _objectSpread({}, options === null || options === void 0 ? void 0 : options.cellStyle),
                    children: row[column.field]
                  }, "".concat(row._id, "-c-").concat(j));
                }
              })]
            }, row._id);
          })]
        })]
      })
    }), ((options === null || options === void 0 ? void 0 : options.pagination) == null || (options === null || options === void 0 ? void 0 : options.pagination)) && /*#__PURE__*/(0, _jsxRuntime.jsx)(_tableComponents.MyTablePagination, {
      rowsPerPageOptions: (_options$pageSizeOpti = options === null || options === void 0 ? void 0 : options.pageSizeOptions) !== null && _options$pageSizeOpti !== void 0 ? _options$pageSizeOpti : [50, 100, 150],
      component: "div",
      count: totalCount,
      rowsPerPage: rowsPerPage,
      page: page,
      onPageChange: handleChangePage,
      onRowsPerPageChange: handleChangeRowsPerPage
    }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_reactCsv.CSVLink, {
      asyncOnClick: true,
      data: exportData,
      headers: columns === null || columns === void 0 ? void 0 : columns.map(function (column) {
        if (column["export"] != false) return column.title;
        // return {
        //   label: column.title,
        //   key: column.field,
        // };
      }).filter(function (column) {
        return column;
      }),
      filename: "".concat(title !== null && title !== void 0 ? title : "data", "-").concat((0, _moment["default"])().format("DD-MM-yyyy"), ".csv"),
      className: "hidden",
      ref: csvRef,
      target: "_blank"
    }), /*#__PURE__*/(0, _jsxRuntime.jsxs)(_tableComponents.MyTableFilterMenu, {
      id: "filter-menu",
      anchorEl: filterAnchorEl,
      open: openFilterMenu,
      onClose: handleCloseFilterMenu,
      transformOrigin: {
        horizontal: "right",
        vertical: "top"
      },
      anchorOrigin: {
        horizontal: "right",
        vertical: "bottom"
      },
      sx: {
        minWidth: "300px"
      },
      children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_Typography["default"], {
        variant: "h6",
        children: "Filter by"
      }), filterOptionsFormat === null || filterOptionsFormat === void 0 ? void 0 : filterOptionsFormat.map(function (option, i) {
        var _tempFilter$option$fi, _option$options, _option$type;
        return /*#__PURE__*/(0, _jsxRuntime.jsxs)(_jsxRuntime.Fragment, {
          children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_Typography["default"], {
            variant: "body2",
            fontWeight: 500,
            mt: 1,
            mb: 1,
            children: option.label
          }), option.type === "select" ? /*#__PURE__*/(0, _jsxRuntime.jsxs)(_Select["default"], {
            sx: {
              width: "100%",
              padding: "10px"
            },
            defaultValue: "all",
            value: (_tempFilter$option$fi = tempFilter === null || tempFilter === void 0 ? void 0 : tempFilter[option.field]) !== null && _tempFilter$option$fi !== void 0 ? _tempFilter$option$fi : "all",
            onChange: function onChange(e) {
              setTempFilter(_objectSpread(_objectSpread({}, tempFilter), {}, (0, _defineProperty2["default"])({}, option.field, e.target.value)));
            },
            placeholder: option.placeholder,
            children: [/*#__PURE__*/(0, _jsxRuntime.jsx)("option", {
              value: "all",
              disabled: true,
              selected: true,
              hidden: true,
              children: /*#__PURE__*/(0, _jsxRuntime.jsx)("em", {
                children: "All"
              })
            }), option === null || option === void 0 || (_option$options = option.options) === null || _option$options === void 0 ? void 0 : _option$options.map(function (opt) {
              return /*#__PURE__*/(0, _jsxRuntime.jsx)(_MenuItem["default"], {
                value: opt.value,
                children: opt.label
              }, opt.value);
            })]
          }) : /*#__PURE__*/(0, _jsxRuntime.jsx)(_tableComponents.MyTableTextField, {
            size: "small",
            type: (_option$type = option.type) !== null && _option$type !== void 0 ? _option$type : "text",
            onChange: function onChange(e) {
              setTempFilter(_objectSpread(_objectSpread({}, tempFilter), {}, (0, _defineProperty2["default"])({}, option.name, e.target.value)));
            },
            onKeyDown: function onKeyDown(e) {
              return e.key === "Enter" && setTempFilter(_objectSpread(_objectSpread({}, tempFilter), {}, (0, _defineProperty2["default"])({}, option.name, e.target.value)));
            },
            InputProps: {
              startAdornment: /*#__PURE__*/(0, _jsxRuntime.jsx)(_InputAdornment["default"], {
                position: "start",
                children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_Search["default"], {
                  sx: {
                    width: "17px"
                  }
                })
              })
            }
          })]
        });
        npm;
      }), /*#__PURE__*/(0, _jsxRuntime.jsxs)(_Box["default"], {
        className: "flex space-between",
        mt: 2,
        mb: 2,
        children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_Button["default"], {
          variant: "outlined",
          sx: {
            mr: 2
          },
          onClick: function onClick() {
            setFilter(null);
            setTempFilter(null);
          },
          children: "Reset"
        }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_Button["default"], {
          variant: "contained",
          onClick: function onClick() {
            setFilter(tempFilter);
            handleCloseFilterMenu();
          },
          children: "Apply Filter"
        })]
      })]
    }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_tableComponents.MyTableFilterMenu, {
      id: "export-menu",
      sx: {
        display: "none"
      },
      anchorEl: exportAnchorEl,
      open: openExportMenu,
      onClose: handleCloseExportMenu,
      transformOrigin: {
        horizontal: "right",
        vertical: "top"
      },
      anchorOrigin: {
        horizontal: "right",
        vertical: "bottom"
      },
      children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_MenuItem["default"], {
        onClick: function onClick() {
          if (selected.length > 0) {
            var _tableRef$current;
            tableRef === null || tableRef === void 0 || (_tableRef$current = tableRef.current) === null || _tableRef$current === void 0 || _tableRef$current.handleExportSelectedDataCSV();
          } else {
            var _tableRef$current2;
            tableRef === null || tableRef === void 0 || (_tableRef$current2 = tableRef.current) === null || _tableRef$current2 === void 0 || _tableRef$current2.handleExportAllDataCSV();
          }
        },
        children: "Export as CSV"
      })
    })]
  });
}