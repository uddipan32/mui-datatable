"use strict";

require("core-js/modules/es.symbol.description.js");
require("core-js/modules/es.weak-map.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
require("core-js/modules/web.dom-collections.iterator.js");
require("core-js/modules/es.promise.js");
require("core-js/modules/es.parse-int.js");
var _react = _interopRequireWildcard(require("react"));
var _material = require("@mui/material");
var _Delete = _interopRequireDefault(require("@mui/icons-material/Delete"));
var _FilterList = _interopRequireDefault(require("@mui/icons-material/FilterList"));
var _styles = require("@mui/material/styles");
var _iconsMaterial = require("@mui/icons-material");
var _reactCsv = require("react-csv");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != typeof e && "function" != typeof e) return { default: e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && Object.prototype.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n.default = e, t && t.set(e, n), n; }
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return typeof key === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (typeof input !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (typeof res !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
function TableToolbar(props) {
  const {
    numSelected,
    showToolbar
  } = props;
  const [isLoading, setLoading] = (0, _react.useState)(false);
  if (showToolbar == null || showToolbar || numSelected > 0) {
    return <_material.Toolbar sx={_objectSpread({
      pl: {
        sm: 2
      },
      pr: {
        xs: 1,
        sm: 1
      }
    }, numSelected > 0 && {
      bgcolor: theme => (0, _styles.alpha)(theme.palette.primary.main, theme.palette.action.activatedOpacity)
    })}>
        {numSelected > 0 ? <_material.Typography sx={{
        flex: "1 1 100%"
      }} color="inherit" variant="subtitle1" component="div">
            {numSelected} selected
          </_material.Typography> : <_material.Typography sx={{
        flex: "1 1 100%"
      }} variant="h6" id="tableTitle" component="div">
            {props.title}
          </_material.Typography>}
        {numSelected > 0 ? <_material.Tooltip title="Delete">
            <_material.IconButton onClick={() => {}}>
              <_Delete.default />
            </_material.IconButton>
          </_material.Tooltip> : <_material.Tooltip title="Filter list">
            <_material.IconButton>
              <_FilterList.default />
            </_material.IconButton>
          </_material.Tooltip>}
        {props.exportButton && <>
            <_material.Tooltip title="Export">
              <_material.IconButton onClick={async () => {
            setLoading(true);
            if (props.exportAllData) {
              const response = await props.onExportAllDataCSV();
              if (response) setLoading(false);
            } else {
              const response = await props.onExportDataCSV();
              if (response) setLoading(false);
            }
          }}>
                {isLoading ? <_material.CircularProgress size={20} /> : <_iconsMaterial.Download />}
              </_material.IconButton>
            </_material.Tooltip>
          </>}
      </_material.Toolbar>;
  } else {
    return null;
  }
}
function TableHeader(props) {
  const {
    onSelectAllClick,
    order,
    orderBy,
    numSelected,
    rowCount,
    onRequestSort,
    columns
  } = props;
  const createSortHandler = property => event => {
    onRequestSort(event, property);
  };
  return <_material.TableHead>
      <_material.TableRow>
        {(props.rowSelection || props.rowSelection == null) && <_material.TableCell padding="checkbox">
            <_material.Checkbox color="primary" indeterminate={numSelected > 0 && numSelected < rowCount} checked={rowCount > 0 && numSelected === rowCount} onChange={onSelectAllClick} inputProps={{
          "aria-label": "select all"
        }} />
          </_material.TableCell>}
        {props.actions && props.actions.length > 0 && <_material.TableCell>Actions</_material.TableCell>}
        {columns.map((column, i) => {
        var _column$type;
        return <_material.TableCell key={i}>
            {column.sorting == null || column.sorting ? <_material.TableSortLabel active={orderBy === column.field} direction={orderBy === column.field ? order : "asc"} onClick={createSortHandler(column.field)}>
                {column.title}
              </_material.TableSortLabel> : column.title}
            <br />
            {column.searchable && <_material.TextField size="small" sx={{
            ".MuiInputBase-root": {
              fontSize: "12px !important",
              paddingLeft: "10px !important",
              ".MuiInputBase-input": {
                padding: "5px !important"
              }
            }
          }} type={(_column$type = column.type) !== null && _column$type !== void 0 ? _column$type : "text"} onChange={event => {
            if (column.type === "date") {
              props.onRequestSearch(event.target.value, column.field);
            }
          }} onKeyDown={event => {
            if (event.key === "Enter") {
              props.onRequestSearch(event.target.value, column.field);
            }
          }}
          // variant="standard"
          InputProps={{
            startAdornment: <_material.InputAdornment position="start">
                      <_iconsMaterial.Search sx={{
                width: "17px"
              }} />
                    </_material.InputAdornment>
          }}></_material.TextField>}
          </_material.TableCell>;
      })}
      </_material.TableRow>
    </_material.TableHead>;
}
function LoadingContainer() {
  return <_material.Box position="absolute" sx={{
    zIndex: "10",
    height: "100%",
    width: "100%",
    backgroundColor: (0, _styles.alpha)("#000", 0.2),
    display: "flex",
    justifyContent: "center",
    alignItems: "center"
  }}>
      <_material.CircularProgress />
    </_material.Box>;
}
const MyTable = props => {
  var _ref, _props$options, _props$options2, _props$options3, _props$options4, _props$options5, _props$options6, _props$options9, _props$options10, _props$options$pageSi, _props$options11;
  const csvRef = (0, _react.useRef)(null);
  const [isLoading, setLoading] = (0, _react.useState)(false);
  const [order, setOrder] = (0, _react.useState)("asc");
  const [orderBy, setOrderBy] = (0, _react.useState)("");
  const [search, setSearch] = (0, _react.useState)("");
  const [searchBy, setSearchBy] = (0, _react.useState)("");
  const [selected, setSelected] = (0, _react.useState)([]);
  const [page, setPage] = (0, _react.useState)(0);
  const [rowsPerPage, setRowsPerPage] = (0, _react.useState)((_ref = (_props$options = props.options) === null || _props$options === void 0 ? void 0 : _props$options.pageSize) !== null && _ref !== void 0 ? _ref : 5);
  const [rows, setRows] = (0, _react.useState)([]);
  const [exportData, setExportData] = (0, _react.useState)([]);
  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };
  const handleChangeRowsPerPage = event => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };
  const handleRequestSort = (event, property) => {
    const isAsc = orderBy === property && order === "asc";
    setOrder(isAsc ? "desc" : "asc");
    setOrderBy(property);
  };
  const handleRequestSearch = (search, searchBy) => {
    setSearch(search);
    setSearchBy(searchBy);
  };
  const handleSelectAllCLick = event => {
    if (event.target.checked) {
      const newSelecteds = rows.map(n => n._id);
      setSelected(newSelecteds);
      return;
    }
    setSelected([]);
  };
  const handleClick = (event, name) => {
    const selectedIndex = selected.indexOf(name);
    let newSelected = [];
    if (selectedIndex === -1) {
      newSelected = newSelected.concat(selected, name);
    } else if (selectedIndex === 0) {
      newSelected = newSelected.concat(selected.slice(1));
    } else if (selectedIndex === selected.length - 1) {
      newSelected = newSelected.concat(selected.slice(0, -1));
    } else if (selectedIndex > 0) {
      newSelected = newSelected.concat(selected.slice(0, selectedIndex), selected.slice(selectedIndex + 1));
    }
    setSelected(newSelected);
  };
  const isSelected = name => selected.indexOf(name) !== -1;

  // ==== EXPORT ====
  const handleExportDataCSV = async () => {
    setExportData([]);
    setExportData(rows);
    return rows;
  };
  const handleExportAllDataCSV = async () => {
    setExportData([]);
    const response = await props.data({
      page: 0,
      pageSize: 1000000,
      orderBy: orderBy,
      order: order
    });
    console.log(response);
    setExportData(response.rows);
    return response.rows;
  };
  (0, _react.useEffect)(() => {
    if (exportData.length > 0) {
      csvRef.current.link.click();
    }
  }, [exportData]);
  // ===============

  // ==== FETCH DATA ====
  const fetchData = async () => {
    setLoading(true);
    const response = await props.data({
      search,
      searchBy,
      page: page,
      pageSize: rowsPerPage,
      orderBy: orderBy,
      order: order
    });
    if (response) {
      setLoading(false);
    }
    setRows(response.rows);
  };
  (0, _react.useEffect)(() => {
    fetchData();
  }, [page, search, searchBy, orderBy, order, rowsPerPage]);
  return <_material.Box sx={{
    width: "100%",
    position: "relative"
  }}>
      {isLoading && <LoadingContainer />}
      <TableToolbar columns={props.columns} numSelected={selected.length} title={props.title} showToolbar={(_props$options2 = props.options) === null || _props$options2 === void 0 ? void 0 : _props$options2.toolbar} exportButton={(_props$options3 = props.options) === null || _props$options3 === void 0 ? void 0 : _props$options3.exportButton} exportAllData={(_props$options4 = props.options) === null || _props$options4 === void 0 ? void 0 : _props$options4.exportAllData} exportFileName={(_props$options5 = props.options) === null || _props$options5 === void 0 ? void 0 : _props$options5.exportFileName} onExportDataCSV={handleExportDataCSV} onExportAllDataCSV={handleExportAllDataCSV} onDeleteSelected={props.onDeleteSelected} />
      <_material.TableContainer>
        <_material.Table>
          <TableHeader numSelected={selected.length} order={order} orderBy={orderBy} search={search} searchBy={searchBy} onRequestSearch={handleRequestSearch} onSelectAllClick={handleSelectAllCLick} onRequestSort={handleRequestSort} rowCount={rows.length} actions={props.actions} columns={props.columns} rowSelection={(_props$options6 = props.options) === null || _props$options6 === void 0 ? void 0 : _props$options6.rowSelection} />
          <_material.TableBody ref={ref => {
          props.tableRef && (props.tableRef.current = _objectSpread({
            ref
          }, {
            handleChangePage,
            handleChangeRowsPerPage,
            handleRequestSort,
            handleRequestSearch,
            handleSelectAllCLick,
            fetchData,
            handleExportAllDataCSV,
            handleExportDataCSV
          }));
        }}>
            {rows.map((row, i) => {
            var _props$options7, _props$options8, _props$actions, _props$actions2;
            const isItemSelected = isSelected(row._id);
            const labelId = "enhanced-table-checkbox-".concat(i);
            return <_material.TableRow key={i} hover onClick={event => props.onRowClick && props.onRowClick(event, row)} role="checkbox" aria-checked={isItemSelected} tabIndex={-1} selected={isItemSelected} sx={props.onRowClick && {
              cursor: "pointer"
            }}>
                  {((_props$options7 = props.options) === null || _props$options7 === void 0 ? void 0 : _props$options7.rowSelection) == null || (_props$options8 = props.options) !== null && _props$options8 !== void 0 && _props$options8.rowSelection ? <_material.TableCell padding="checkbox">
                      <_material.Checkbox color="primary" checked={isItemSelected} onClick={event => {
                  event.stopPropagation();
                  handleClick(event, row._id);
                }} inputProps={{
                  "aria-labelledby": labelId
                }} />
                    </_material.TableCell> : null}

                  {((_props$actions = props.actions) === null || _props$actions === void 0 ? void 0 : _props$actions.length) > 0 ? <_material.TableCell className="flex">
                      {(_props$actions2 = props.actions) === null || _props$actions2 === void 0 ? void 0 : _props$actions2.map((action, j) => {
                  if (!action(row).hidden) {
                    return <_material.Tooltip title={action(row).tooltip} key={j}>
                                <_material.IconButton disabled={action(row).disabled} aria-label={action(row).tooltip} onClick={event => {
                        event.stopPropagation();
                        action(row).onClick(event, row);
                      }} {...action(row).iconProps}>
                                  {action(row).icon}
                                </_material.IconButton>
                              </_material.Tooltip>;
                  }
                })}
                    </_material.TableCell> : null}
                  {props.columns.map((column, j) => {
                if (column.render) {
                  return <_material.TableCell key={j}>{column.render(row, j)}</_material.TableCell>;
                } else {
                  return <_material.TableCell key={j}>{row["".concat(column.field)]}</_material.TableCell>;
                }
              })}
                </_material.TableRow>;
          })}
          </_material.TableBody>
        </_material.Table>
      </_material.TableContainer>
      {(((_props$options9 = props.options) === null || _props$options9 === void 0 ? void 0 : _props$options9.pagination) == null || ((_props$options10 = props.options) === null || _props$options10 === void 0 ? void 0 : _props$options10.pagination)) && <_material.TablePagination rowsPerPageOptions={(_props$options$pageSi = (_props$options11 = props.options) === null || _props$options11 === void 0 ? void 0 : _props$options11.pageSizeOptions) !== null && _props$options$pageSi !== void 0 ? _props$options$pageSi : [5, 10, 25]} component="div" count={rows.length} rowsPerPage={rowsPerPage} page={page} onPageChange={handleChangePage} onRowsPerPageChange={handleChangeRowsPerPage} />}

      {/* ==== EXPORT ==== */}
      <_reactCsv.CSVLink asyncOnClick={true} data={exportData} headers={props.columns.map(column => {
      return {
        label: column.title,
        key: column.field
      };
    })} filename="data.csv" className="hidden" ref={csvRef} target="_blank" />
    </_material.Box>;
};
var _default = exports.default = MyTable;