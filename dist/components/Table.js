"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = MyDataTable;
var _moment = _interopRequireDefault(require("moment"));
var _reactCsv = require("react-csv");
var _link = _interopRequireDefault(require("next/link"));
var _router = require("next/router");
var _react = require("react");
var _material = require("@mui/material");
var _Search = _interopRequireDefault(require("@mui/icons-material/Search"));
var _tableComponents = require("./tableComponents");
var _Iconify = _interopRequireDefault(require("./Iconify"));
var _emotionRgba = require("emotion-rgba");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return e; }; var t, e = {}, r = Object.prototype, n = r.hasOwnProperty, o = Object.defineProperty || function (t, e, r) { t[e] = r.value; }, i = "function" == typeof Symbol ? Symbol : {}, a = i.iterator || "@@iterator", c = i.asyncIterator || "@@asyncIterator", u = i.toStringTag || "@@toStringTag"; function define(t, e, r) { return Object.defineProperty(t, e, { value: r, enumerable: !0, configurable: !0, writable: !0 }), t[e]; } try { define({}, ""); } catch (t) { define = function define(t, e, r) { return t[e] = r; }; } function wrap(t, e, r, n) { var i = e && e.prototype instanceof Generator ? e : Generator, a = Object.create(i.prototype), c = new Context(n || []); return o(a, "_invoke", { value: makeInvokeMethod(t, r, c) }), a; } function tryCatch(t, e, r) { try { return { type: "normal", arg: t.call(e, r) }; } catch (t) { return { type: "throw", arg: t }; } } e.wrap = wrap; var h = "suspendedStart", l = "suspendedYield", f = "executing", s = "completed", y = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var p = {}; define(p, a, function () { return this; }); var d = Object.getPrototypeOf, v = d && d(d(values([]))); v && v !== r && n.call(v, a) && (p = v); var g = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(p); function defineIteratorMethods(t) { ["next", "throw", "return"].forEach(function (e) { define(t, e, function (t) { return this._invoke(e, t); }); }); } function AsyncIterator(t, e) { function invoke(r, o, i, a) { var c = tryCatch(t[r], t, o); if ("throw" !== c.type) { var u = c.arg, h = u.value; return h && "object" == _typeof(h) && n.call(h, "__await") ? e.resolve(h.__await).then(function (t) { invoke("next", t, i, a); }, function (t) { invoke("throw", t, i, a); }) : e.resolve(h).then(function (t) { u.value = t, i(u); }, function (t) { return invoke("throw", t, i, a); }); } a(c.arg); } var r; o(this, "_invoke", { value: function value(t, n) { function callInvokeWithMethodAndArg() { return new e(function (e, r) { invoke(t, n, e, r); }); } return r = r ? r.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); } }); } function makeInvokeMethod(e, r, n) { var o = h; return function (i, a) { if (o === f) throw new Error("Generator is already running"); if (o === s) { if ("throw" === i) throw a; return { value: t, done: !0 }; } for (n.method = i, n.arg = a;;) { var c = n.delegate; if (c) { var u = maybeInvokeDelegate(c, n); if (u) { if (u === y) continue; return u; } } if ("next" === n.method) n.sent = n._sent = n.arg;else if ("throw" === n.method) { if (o === h) throw o = s, n.arg; n.dispatchException(n.arg); } else "return" === n.method && n.abrupt("return", n.arg); o = f; var p = tryCatch(e, r, n); if ("normal" === p.type) { if (o = n.done ? s : l, p.arg === y) continue; return { value: p.arg, done: n.done }; } "throw" === p.type && (o = s, n.method = "throw", n.arg = p.arg); } }; } function maybeInvokeDelegate(e, r) { var n = r.method, o = e.iterator[n]; if (o === t) return r.delegate = null, "throw" === n && e.iterator["return"] && (r.method = "return", r.arg = t, maybeInvokeDelegate(e, r), "throw" === r.method) || "return" !== n && (r.method = "throw", r.arg = new TypeError("The iterator does not provide a '" + n + "' method")), y; var i = tryCatch(o, e.iterator, r.arg); if ("throw" === i.type) return r.method = "throw", r.arg = i.arg, r.delegate = null, y; var a = i.arg; return a ? a.done ? (r[e.resultName] = a.value, r.next = e.nextLoc, "return" !== r.method && (r.method = "next", r.arg = t), r.delegate = null, y) : a : (r.method = "throw", r.arg = new TypeError("iterator result is not an object"), r.delegate = null, y); } function pushTryEntry(t) { var e = { tryLoc: t[0] }; 1 in t && (e.catchLoc = t[1]), 2 in t && (e.finallyLoc = t[2], e.afterLoc = t[3]), this.tryEntries.push(e); } function resetTryEntry(t) { var e = t.completion || {}; e.type = "normal", delete e.arg, t.completion = e; } function Context(t) { this.tryEntries = [{ tryLoc: "root" }], t.forEach(pushTryEntry, this), this.reset(!0); } function values(e) { if (e || "" === e) { var r = e[a]; if (r) return r.call(e); if ("function" == typeof e.next) return e; if (!isNaN(e.length)) { var o = -1, i = function next() { for (; ++o < e.length;) if (n.call(e, o)) return next.value = e[o], next.done = !1, next; return next.value = t, next.done = !0, next; }; return i.next = i; } } throw new TypeError(_typeof(e) + " is not iterable"); } return GeneratorFunction.prototype = GeneratorFunctionPrototype, o(g, "constructor", { value: GeneratorFunctionPrototype, configurable: !0 }), o(GeneratorFunctionPrototype, "constructor", { value: GeneratorFunction, configurable: !0 }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, u, "GeneratorFunction"), e.isGeneratorFunction = function (t) { var e = "function" == typeof t && t.constructor; return !!e && (e === GeneratorFunction || "GeneratorFunction" === (e.displayName || e.name)); }, e.mark = function (t) { return Object.setPrototypeOf ? Object.setPrototypeOf(t, GeneratorFunctionPrototype) : (t.__proto__ = GeneratorFunctionPrototype, define(t, u, "GeneratorFunction")), t.prototype = Object.create(g), t; }, e.awrap = function (t) { return { __await: t }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, c, function () { return this; }), e.AsyncIterator = AsyncIterator, e.async = function (t, r, n, o, i) { void 0 === i && (i = Promise); var a = new AsyncIterator(wrap(t, r, n, o), i); return e.isGeneratorFunction(r) ? a : a.next().then(function (t) { return t.done ? t.value : a.next(); }); }, defineIteratorMethods(g), define(g, u, "Generator"), define(g, a, function () { return this; }), define(g, "toString", function () { return "[object Generator]"; }), e.keys = function (t) { var e = Object(t), r = []; for (var n in e) r.push(n); return r.reverse(), function next() { for (; r.length;) { var t = r.pop(); if (t in e) return next.value = t, next.done = !1, next; } return next.done = !0, next; }; }, e.values = values, Context.prototype = { constructor: Context, reset: function reset(e) { if (this.prev = 0, this.next = 0, this.sent = this._sent = t, this.done = !1, this.delegate = null, this.method = "next", this.arg = t, this.tryEntries.forEach(resetTryEntry), !e) for (var r in this) "t" === r.charAt(0) && n.call(this, r) && !isNaN(+r.slice(1)) && (this[r] = t); }, stop: function stop() { this.done = !0; var t = this.tryEntries[0].completion; if ("throw" === t.type) throw t.arg; return this.rval; }, dispatchException: function dispatchException(e) { if (this.done) throw e; var r = this; function handle(n, o) { return a.type = "throw", a.arg = e, r.next = n, o && (r.method = "next", r.arg = t), !!o; } for (var o = this.tryEntries.length - 1; o >= 0; --o) { var i = this.tryEntries[o], a = i.completion; if ("root" === i.tryLoc) return handle("end"); if (i.tryLoc <= this.prev) { var c = n.call(i, "catchLoc"), u = n.call(i, "finallyLoc"); if (c && u) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } else if (c) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); } else { if (!u) throw new Error("try statement without catch or finally"); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } } } }, abrupt: function abrupt(t, e) { for (var r = this.tryEntries.length - 1; r >= 0; --r) { var o = this.tryEntries[r]; if (o.tryLoc <= this.prev && n.call(o, "finallyLoc") && this.prev < o.finallyLoc) { var i = o; break; } } i && ("break" === t || "continue" === t) && i.tryLoc <= e && e <= i.finallyLoc && (i = null); var a = i ? i.completion : {}; return a.type = t, a.arg = e, i ? (this.method = "next", this.next = i.finallyLoc, y) : this.complete(a); }, complete: function complete(t, e) { if ("throw" === t.type) throw t.arg; return "break" === t.type || "continue" === t.type ? this.next = t.arg : "return" === t.type ? (this.rval = this.arg = t.arg, this.method = "return", this.next = "end") : "normal" === t.type && e && (this.next = e), y; }, finish: function finish(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.finallyLoc === t) return this.complete(r.completion, r.afterLoc), resetTryEntry(r), y; } }, "catch": function _catch(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.tryLoc === t) { var n = r.completion; if ("throw" === n.type) { var o = n.arg; resetTryEntry(r); } return o; } } throw new Error("illegal catch attempt"); }, delegateYield: function delegateYield(e, r, n) { return this.delegate = { iterator: values(e), resultName: r, nextLoc: n }, "next" === this.method && (this.arg = t), y; } }, e; }
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }
function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t["return"] && (u = t["return"](), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); } // ==== IMPORT COMPONENTS ====
function TableLoading() {
  var _ref;
  var theme = (0, _material.useTheme)();
  return /*#__PURE__*/React.createElement(_material.Box, {
    id: "table-loading",
    sx: (_ref = {
      position: "absolute",
      zIndex: 99,
      height: "100%",
      width: "100%",
      backgroundColor: (0, _emotionRgba.rgba)(theme.palette.background["default"], 0.5)
    }, _defineProperty(_ref, "width", "100%"), _defineProperty(_ref, "height", "100%"), _defineProperty(_ref, "display", "flex"), _defineProperty(_ref, "justifyContent", "center"), _defineProperty(_ref, "alignItems", "center"), _ref)
  }, /*#__PURE__*/React.createElement(_Iconify["default"], {
    icon: "svg-spinners:gooey-balls-2",
    sx: {
      width: "50px",
      height: "50px",
      color: theme.palette.primary.main
    }
  }));
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
  var theme = (0, _material.useTheme)();
  var createSortHandler = function createSortHandler(property) {
    return function (event) {
      onRequestSort(event, property);
    };
  };
  return /*#__PURE__*/React.createElement(_tableComponents.MyTableHead, {
    id: "table-header",
    sx: _objectSpread({}, options === null || options === void 0 ? void 0 : options.tableHeaderStyle)
  }, /*#__PURE__*/React.createElement(_tableComponents.MyTableRow, {
    sx: _objectSpread({}, options === null || options === void 0 || (_options$tableHeaderS = options.tableHeaderStyle) === null || _options$tableHeaderS === void 0 ? void 0 : _options$tableHeaderS.rowStyle)
  }, (rowSelection || rowSelection == null) && selectable && /*#__PURE__*/React.createElement(_tableComponents.MyTableCell, {
    padding: "none",
    sx: _objectSpread({}, options === null || options === void 0 || (_options$tableHeaderS2 = options.tableHeaderStyle) === null || _options$tableHeaderS2 === void 0 ? void 0 : _options$tableHeaderS2.cellStyle)
  }, /*#__PURE__*/React.createElement(_tableComponents.MyTableCheckbox, {
    icon: /*#__PURE__*/React.createElement(_Iconify["default"], {
      icon: "fluent:checkbox-unchecked-16-regular",
      sx: {
        width: "24px",
        height: "24px",
        color: (0, _emotionRgba.rgba)(theme.palette.primary.main, 0.7)
      }
    }),
    checkedIcon: /*#__PURE__*/React.createElement(_Iconify["default"], {
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
  })), actions && (actions === null || actions === void 0 ? void 0 : actions.length) > 0 && /*#__PURE__*/React.createElement(_material.TableCell, {
    align: "center",
    sx: _objectSpread({}, options === null || options === void 0 || (_options$tableHeaderS3 = options.tableHeaderStyle) === null || _options$tableHeaderS3 === void 0 ? void 0 : _options$tableHeaderS3.cellStyle),
    padding: "none"
  }, /*#__PURE__*/React.createElement(_material.Typography, {
    variant: "body2",
    fontWeight: 600
  }, "Actions")), columns.map(function (column, i) {
    var _options$tableHeaderS4;
    return /*#__PURE__*/React.createElement(_tableComponents.MyTableCell, {
      sx: options === null || options === void 0 || (_options$tableHeaderS4 = options.tableHeaderStyle) === null || _options$tableHeaderS4 === void 0 ? void 0 : _options$tableHeaderS4.cellStyle,
      key: i,
      align: column.align,
      padding: column.disablePadding ? "none" : "normal",
      sortDirection: orderBy === column.id ? order : false
    }, column.sorting == null || column.sorting ? /*#__PURE__*/React.createElement(_tableComponents.MyTableSortLabel, {
      active: orderBy === column.field,
      direction: orderBy === column.field ? order : "asc",
      onClick: createSortHandler(column.field),
      sx: {}
    }, column.title) : /*#__PURE__*/React.createElement(_material.Typography, {
      variant: "body2",
      fontWeight: 600
    }, column.title), /*#__PURE__*/React.createElement(_material.Box, {
      height: 1
    }));
  })));
}
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
  var csvRef = (0, _react.useRef)(null);
  var _useState = (0, _react.useState)("asc"),
    _useState2 = _slicedToArray(_useState, 2),
    order = _useState2[0],
    setOrder = _useState2[1];
  var _useState3 = (0, _react.useState)(""),
    _useState4 = _slicedToArray(_useState3, 2),
    orderBy = _useState4[0],
    setOrderBy = _useState4[1];
  var _useState5 = (0, _react.useState)(""),
    _useState6 = _slicedToArray(_useState5, 2),
    search = _useState6[0],
    setSearch = _useState6[1];
  var _useState7 = (0, _react.useState)(null),
    _useState8 = _slicedToArray(_useState7, 2),
    searchBy = _useState8[0],
    setSearchBy = _useState8[1];
  var _useState9 = (0, _react.useState)([]),
    _useState10 = _slicedToArray(_useState9, 2),
    selected = _useState10[0],
    setSelected = _useState10[1];
  var _useState11 = (0, _react.useState)(0),
    _useState12 = _slicedToArray(_useState11, 2),
    page = _useState12[0],
    setPage = _useState12[1];
  var _useState13 = (0, _react.useState)((_options$pageSize = options === null || options === void 0 ? void 0 : options.pageSize) !== null && _options$pageSize !== void 0 ? _options$pageSize : 50),
    _useState14 = _slicedToArray(_useState13, 2),
    rowsPerPage = _useState14[0],
    setRowsPerPage = _useState14[1];
  var _useState15 = (0, _react.useState)([]),
    _useState16 = _slicedToArray(_useState15, 2),
    rows = _useState16[0],
    setRows = _useState16[1];
  var _useState17 = (0, _react.useState)(0),
    _useState18 = _slicedToArray(_useState17, 2),
    totalCount = _useState18[0],
    setTotalCount = _useState18[1];
  var _useState19 = (0, _react.useState)([]),
    _useState20 = _slicedToArray(_useState19, 2),
    exportData = _useState20[0],
    setExportData = _useState20[1];
  var _useState21 = (0, _react.useState)(null),
    _useState22 = _slicedToArray(_useState21, 2),
    filter = _useState22[0],
    setFilter = _useState22[1];
  var _useState23 = (0, _react.useState)(null),
    _useState24 = _slicedToArray(_useState23, 2),
    tempFilter = _useState24[0],
    setTempFilter = _useState24[1];

  // loading
  var _useState25 = (0, _react.useState)(false),
    _useState26 = _slicedToArray(_useState25, 2),
    isLoading = _useState26[0],
    setLoading = _useState26[1];
  var _useState27 = (0, _react.useState)(false),
    _useState28 = _slicedToArray(_useState27, 2),
    isExporting = _useState28[0],
    setExporting = _useState28[1];
  var theme = (0, _material.useTheme)();

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
  var _useState29 = (0, _react.useState)(null),
    _useState30 = _slicedToArray(_useState29, 2),
    filterAnchorEl = _useState30[0],
    setFilterAnchorEl = _useState30[1];
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
  (0, _react.useEffect)(function () {
    handleFilterChange();
  }, [filter]);

  // ==== EXPORT DATA ====
  var _useState31 = (0, _react.useState)(null),
    _useState32 = _slicedToArray(_useState31, 2),
    exportAnchorEl = _useState32[0],
    setExportAnchorEl = _useState32[1];
  var openExportMenu = Boolean(exportAnchorEl);
  var handleOpenExportMenu = function handleOpenExportMenu(event) {
    setExportAnchorEl(event.currentTarget);
  };
  var handleCloseExportMenu = function handleCloseExportMenu() {
    setExportAnchorEl(null);
  };
  var handleExportDataCSV = /*#__PURE__*/function () {
    var _ref4 = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee() {
      var tempColumns, rowData;
      return _regeneratorRuntime().wrap(function _callee$(_context) {
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
    var _ref5 = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee2() {
      var tempColumns, selectedData, rowData;
      return _regeneratorRuntime().wrap(function _callee2$(_context2) {
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
    var _ref6 = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee3() {
      var response, tempColumns, rowData;
      return _regeneratorRuntime().wrap(function _callee3$(_context3) {
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
  (0, _react.useEffect)(function () {
    if (exportData.length > 0) {
      csvRef.current.link.click();
    }
  }, [exportData]);

  // =======

  // ==== FETCH DATA ====

  var fetchData = /*#__PURE__*/function () {
    var _ref7 = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee4(values, initialFilter) {
      var _data$length, response;
      return _regeneratorRuntime().wrap(function _callee4$(_context4) {
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
  (0, _react.useEffect)(function () {
    if (currentPage) setPage(parseInt(currentPage));
    if (currentFilter) {
      setFilter(JSON.parse(currentFilter));
      setTempFilter(JSON.parse(currentFilter));
      fetchData(null, JSON.parse(currentFilter));
    } else {
      fetchData();
    }
  }, [currentPage, search, rowsPerPage, order, orderBy]);
  (0, _react.useEffect)(function () {
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
  (0, _react.useEffect)(function () {
    if (filterChangeListener) {
      filterChangeListener(tempFilter);
    }
  }, [tempFilter]);
  return /*#__PURE__*/React.createElement(_tableComponents.MyTableContainer
  // component={Paper}
  , {
    sx: _objectSpread({
      position: "relative",
      width: "100%"
    }, options === null || options === void 0 ? void 0 : options.tableContainerStyle)
  }, /*#__PURE__*/React.createElement(_tableComponents.MyTableTools, {
    id: "tools",
    sx: _objectSpread({}, options === null || options === void 0 ? void 0 : options.tableToolbarStyle)
  }, title && /*#__PURE__*/React.createElement(_material.Box, {
    id: ""
  }, /*#__PURE__*/React.createElement(_material.Typography, {
    variant: "h5",
    sx: _objectSpread({}, options === null || options === void 0 ? void 0 : options.titleStyle)
  }, title), /*#__PURE__*/React.createElement(_material.Typography, {
    variant: "subtitle2",
    color: "GrayText",
    textOverflow: "ellipsis",
    sx: _objectSpread({}, options === null || options === void 0 ? void 0 : options.subtitleStyle)
  }, subtitle)), /*#__PURE__*/React.createElement(_material.Box, {
    className: "flex",
    mr: 2,
    sx: {
      maxWidth: "50%",
      overflowY: "auto"
    }
  }, toolsLeft && toolsLeft.map(function (tool, i) {
    return tool && (tool === null || tool === void 0 ? void 0 : tool.render());
  })), /*#__PURE__*/React.createElement(_material.Box, {
    id: "tools",
    sx: {
      display: "flex",
      flexWrap: "nowrap",
      alignItems: "center"
    }
  }, /*#__PURE__*/React.createElement(_material.Box, {
    sx: _defineProperty({
      height: "100%",
      display: {
        xs: "none",
        sm: "block"
      }
    }, "height", "40px")
  }, columns.filter(function (column) {
    return column.searchable;
  }).length > 0 && /*#__PURE__*/React.createElement(_tableComponents.SearchBox, {
    id: "search",
    placeholder: "Search here",
    options: columns.filter(function (column) {
      return column.searchable;
    }),
    search: search,
    searchBy: searchBy,
    setSearchBy: setSearchBy,
    handleRequestSearch: handleRequestSearch
  })), filterOptionsFormat && filterOptionsFormat.length > 0 && /*#__PURE__*/React.createElement(_tableComponents.MyTableBadge, {
    badgeContent: filter ? Object.keys(filter).length : 0,
    color: "primary",
    size: "small"
  }, /*#__PURE__*/React.createElement(_tableComponents.MyTableToolButton, {
    sx: {
      marginRight: "10px"
    },
    startIcon: /*#__PURE__*/React.createElement(_Iconify["default"], {
      icon: "ion:filter"
    }),
    id: "table-filter",
    onClick: handleOpenFilterMenu
  }, "Filter")), tools && tools.map(function (tool, i) {
    return tool && (tool === null || tool === void 0 ? void 0 : tool.render(selected));
  }), (options === null || options === void 0 ? void 0 : options.exportButton) && /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(_tableComponents.MyTableToolButton, {
    startIcon: /*#__PURE__*/React.createElement(_Iconify["default"], {
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
    }
  }, "Export")), (options === null || options === void 0 ? void 0 : options.refreshButton) && /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(_tableComponents.MyTableToolButton, {
    sx: {
      mr: 1,
      height: "100%",
      minWidth: "0px"
    },
    onClick: function onClick() {
      return tableRef.current.fetchData();
    }
  }, /*#__PURE__*/React.createElement(_Iconify["default"], {
    icon: isLoading ? "eos-icons:loading" : "ant-design:reload-outlined",
    sx: {
      fontSize: "1rem",
      margin: "4px"
    }
  }))))), /*#__PURE__*/React.createElement(_material.Box, {
    sx: {
      overflowY: "auto",
      boxSizing: "border-box"
    }
  }, /*#__PURE__*/React.createElement(_tableComponents.MyTable, null, /*#__PURE__*/React.createElement(TableHeader, {
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
  }), /*#__PURE__*/React.createElement(_tableComponents.MyTableBody, {
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
    }
  }, isLoading && /*#__PURE__*/React.createElement(React.Fragment, null, rows.length == 0 && /*#__PURE__*/React.createElement(_material.Box, {
    height: 60
  }), /*#__PURE__*/React.createElement(TableLoading, null)), !isLoading && rows.length === 0 && /*#__PURE__*/React.createElement(_tableComponents.MyTableRow, {
    sx: _objectSpread({}, options === null || options === void 0 ? void 0 : options.rowStyle)
  }, /*#__PURE__*/React.createElement(_tableComponents.MyTableCell, {
    colSpan: columns.length + 1
  }, /*#__PURE__*/React.createElement(_material.Box, {
    className: "flex align-center justify-center",
    mt: 2,
    mb: 2
  }, /*#__PURE__*/React.createElement(_material.Typography, {
    variant: "body2",
    color: "GrayText",
    textAlign: "center"
  }, noDataMsg !== null && noDataMsg !== void 0 ? noDataMsg : "No data found")))), rows.map(function (row, index) {
    var isItemSelected = isSelected(row._id);
    var labelId = "enhanced-table-checkbox-".concat(index);
    return /*#__PURE__*/React.createElement(_tableComponents.MyTableRow, {
      hover: true,
      key: row._id,
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
      }, options === null || options === void 0 ? void 0 : options.rowStyle)
    }, selectable && ((options === null || options === void 0 ? void 0 : options.rowSelection) == null || options !== null && options !== void 0 && options.rowSelection) ? /*#__PURE__*/React.createElement(_tableComponents.MyTableCell, {
      padding: "none",
      sx: _objectSpread({}, options === null || options === void 0 ? void 0 : options.cellStyle)
    }, /*#__PURE__*/React.createElement(_tableComponents.MyTableCheckbox, {
      icon: /*#__PURE__*/React.createElement(_Iconify["default"], {
        icon: "fluent:checkbox-unchecked-16-regular",
        sx: {
          width: "24px",
          height: "24px",
          color: (0, _emotionRgba.rgba)(theme.palette.primary.main, 0.7)
        }
      }),
      checkedIcon: /*#__PURE__*/React.createElement(_Iconify["default"], {
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
    })) : null, actions && actions.length > 0 && /*#__PURE__*/React.createElement(_tableComponents.MyTableCell, {
      align: "center",
      sx: _objectSpread({}, options === null || options === void 0 ? void 0 : options.cellStyle)
    }, /*#__PURE__*/React.createElement(_material.Box, {
      display: "flex"
    }, actions.map(function (action, j) {
      var actionData = typeof action === "function" ? action(row) : action;
      if (!(actionData !== null && actionData !== void 0 && actionData.hidden)) {
        return /*#__PURE__*/React.createElement(_material.Tooltip, {
          key: "".concat(row._id, "-a-").concat(j),
          title: actionData.title
        }, /*#__PURE__*/React.createElement(_tableComponents.MyTableIconButton, _extends({
          disabled: actionData.disabled,
          onClick: function onClick(e) {
            e.stopPropagation();
            actionData.onClick(event, row);
          }
        }, actionData.iconProps), actionData === null || actionData === void 0 ? void 0 : actionData.icon));
      }
    }))), columns.map(function (column, j) {
      if (column.render) {
        return /*#__PURE__*/React.createElement(_tableComponents.MyTableCell, {
          key: "".concat(row._id, "-b-").concat(j),
          align: column.align,
          sx: _objectSpread({
            wordBreak: "break-word",
            whiteSpace: "normal"
          }, options === null || options === void 0 ? void 0 : options.cellStyle)
        }, column.render(row, j));
      } else {
        return /*#__PURE__*/React.createElement(_tableComponents.MyTableCell, {
          key: "".concat(row._id, "-c-").concat(j),
          align: column.align,
          sx: _objectSpread({}, options === null || options === void 0 ? void 0 : options.cellStyle)
        }, row[column.field]);
      }
    }));
  })))), ((options === null || options === void 0 ? void 0 : options.pagination) == null || (options === null || options === void 0 ? void 0 : options.pagination)) && /*#__PURE__*/React.createElement(_tableComponents.MyTablePagination, {
    rowsPerPageOptions: (_options$pageSizeOpti = options === null || options === void 0 ? void 0 : options.pageSizeOptions) !== null && _options$pageSizeOpti !== void 0 ? _options$pageSizeOpti : [50, 100, 150],
    component: "div",
    count: totalCount,
    rowsPerPage: rowsPerPage,
    page: page,
    onPageChange: handleChangePage,
    onRowsPerPageChange: handleChangeRowsPerPage
  }), /*#__PURE__*/React.createElement(_reactCsv.CSVLink, {
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
  }), /*#__PURE__*/React.createElement(_tableComponents.MyTableFilterMenu, {
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
    }
  }, /*#__PURE__*/React.createElement(_material.Typography, {
    variant: "h6"
  }, "Filter by"), filterOptionsFormat === null || filterOptionsFormat === void 0 ? void 0 : filterOptionsFormat.map(function (option, i) {
    var _tempFilter$option$fi, _option$options, _option$type;
    return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(_material.Typography, {
      variant: "body2",
      fontWeight: 500,
      mt: 1,
      mb: 1
    }, option.label), option.type === "select" ? /*#__PURE__*/React.createElement(Select, {
      sx: {
        width: "100%",
        padding: "10px"
      },
      defaultValue: "all",
      value: (_tempFilter$option$fi = tempFilter === null || tempFilter === void 0 ? void 0 : tempFilter[option.field]) !== null && _tempFilter$option$fi !== void 0 ? _tempFilter$option$fi : "all",
      onChange: function onChange(e) {
        setTempFilter(_objectSpread(_objectSpread({}, tempFilter), {}, _defineProperty({}, option.field, e.target.value)));
      },
      placeholder: option.placeholder
    }, /*#__PURE__*/React.createElement("option", {
      value: "all",
      disabled: true,
      selected: true,
      hidden: true
    }, /*#__PURE__*/React.createElement("em", null, "All")), option === null || option === void 0 || (_option$options = option.options) === null || _option$options === void 0 ? void 0 : _option$options.map(function (opt) {
      return /*#__PURE__*/React.createElement(_material.MenuItem, {
        key: opt.value,
        value: opt.value
      }, opt.label);
    })) : /*#__PURE__*/React.createElement(_tableComponents.MyTableTextField, {
      size: "small",
      type: (_option$type = option.type) !== null && _option$type !== void 0 ? _option$type : "text",
      onChange: function onChange(e) {
        setTempFilter(_objectSpread(_objectSpread({}, tempFilter), {}, _defineProperty({}, option.name, e.target.value)));
      },
      onKeyDown: function onKeyDown(e) {
        return e.key === "Enter" && setTempFilter(_objectSpread(_objectSpread({}, tempFilter), {}, _defineProperty({}, option.name, e.target.value)));
      },
      InputProps: {
        startAdornment: /*#__PURE__*/React.createElement(_material.InputAdornment, {
          position: "start"
        }, /*#__PURE__*/React.createElement(_Search["default"], {
          sx: {
            width: "17px"
          }
        }))
      }
    }));
  }), /*#__PURE__*/React.createElement(_material.Box, {
    className: "flex space-between",
    mt: 2,
    mb: 2
  }, /*#__PURE__*/React.createElement(Button, {
    variant: "outlined",
    sx: {
      mr: 2
    },
    onClick: function onClick() {
      setFilter(null);
      setTempFilter(null);
    }
  }, "Reset"), /*#__PURE__*/React.createElement(Button, {
    variant: "contained",
    onClick: function onClick() {
      setFilter(tempFilter);
      handleCloseFilterMenu();
    }
  }, "Apply Filter"))), /*#__PURE__*/React.createElement(_tableComponents.MyTableFilterMenu, {
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
    }
  }, /*#__PURE__*/React.createElement(_material.MenuItem, {
    onClick: function onClick() {
      if (selected.length > 0) {
        var _tableRef$current;
        tableRef === null || tableRef === void 0 || (_tableRef$current = tableRef.current) === null || _tableRef$current === void 0 || _tableRef$current.handleExportSelectedDataCSV();
      } else {
        var _tableRef$current2;
        tableRef === null || tableRef === void 0 || (_tableRef$current2 = tableRef.current) === null || _tableRef$current2 === void 0 || _tableRef$current2.handleExportAllDataCSV();
      }
    }
  }, "Export as CSV")));
}