import React, { useEffect, useState, useRef } from "react";
import {
  Box,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableContainer,
  TablePagination,
  TableRow,
  Checkbox,
  TableSortLabel,
  Toolbar,
  Typography,
  Tooltip,
  IconButton,
  Icon,
  TextField,
  InputAdornment,
  CircularProgress,
} from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import FilterListIcon from "@mui/icons-material/FilterList";
import { alpha } from "@mui/material/styles";
import { Download, Search } from "@mui/icons-material";
import { CSVLink } from "react-csv";

interface ActionProps {
  icon?: React.ReactNode;
  iconProps?: object;
  tooltip?: string;
  onClick: (event: React.MouseEvent<unknown>, rowData: any) => void;
  hidden?: boolean;
  disabled?: boolean;
}

interface OptionsProps {
  pageSizeOptions?: number[];
  pageSize?: number;
  pagination?: boolean;
  paginationType?: "normal" | "stepped";
  showFirstLastPageButtons?: boolean;
  search?: boolean;
  searchFieldAlignment?: "left" | "right";
  searchFieldStyle?: object;
  debounceInterval?: number;
  sorting?: boolean;
  toolbar?: boolean;
  rowSelection?: boolean;
  toolbarButtonAlignment?: "left" | "right";
  toolbarButtons?: ActionProps[];
  exportButton?: boolean;
  exportAllData?: boolean;
  exportDelimiter?: string;
  exportFileName?: string;
  addRowPosition?: "first" | "last";
  actionsColumnIndex?: number;
  actionsCellStyle?: object;
  actionsColumnHidden?: boolean;
  filtering?: boolean;
  header?: boolean;
  headerStyle?: object;
  padding?: "default" | "checkbox" | "none";
  tableLayout?: "auto" | "fixed";
  emptyRowsWhenPaging?: boolean;
  locale?: object;
  rowStyle?: object | ((data: any, index: number) => object);
  rowClassName?: string | ((data: any, index: number) => string);
  defaultExpanded?: boolean;
  defaultSort?: Order;
  defaultSortField?: string;
  defaultSortColumn?: object;
}

interface ColumnTypes {
  title: string;
  field?: string;
  render?: (rowData: any, i: number) => React.ReactNode;
  searchable?: boolean;
  sorting?: boolean;
  type?: string;
}

interface Props {
  title?: string;
  data: (query: any) => Promise<any>;
  actions?: Array<(rowData: any) => ActionProps>;
  options?: OptionsProps;
  columns: Array<ColumnTypes>;
  onRowClick?: (event: React.MouseEvent<unknown>, rowData: any) => void;
  onDeleteSelected?: () => void;
  tableRef?: any;
}

type Order = "asc" | "desc";

interface TableToolbarProps {
  columns?: Array<ColumnTypes>;
  title?: string;
  numSelected: number;
  showToolbar?: boolean;
  exportButton?: boolean;
  exportAllData?: boolean;
  exportFileName?: string;
  onExportDataCSV?: () => Promise<any>;
  onExportAllDataCSV?: () => Promise<any>;
  onDeleteSelected?: () => void;
}

function TableToolbar(props: TableToolbarProps) {
  const { numSelected, showToolbar } = props;
  const [isLoading, setLoading] = useState(false);

  if (showToolbar == null || showToolbar || numSelected > 0) {
    return (
      <Toolbar
        sx={{
          pl: { sm: 2 },
          pr: { xs: 1, sm: 1 },
          ...(numSelected > 0 && {
            bgcolor: (theme) =>
              alpha(
                theme.palette.primary.main,
                theme.palette.action.activatedOpacity
              ),
          }),
        }}
      >
        {numSelected > 0 ? (
          <Typography
            sx={{ flex: "1 1 100%" }}
            color="inherit"
            variant="subtitle1"
            component="div"
          >
            {numSelected} selected
          </Typography>
        ) : (
          <Typography
            sx={{ flex: "1 1 100%" }}
            variant="h6"
            id="tableTitle"
            component="div"
          >
            {props.title}
          </Typography>
        )}
        {numSelected > 0 ? (
          <Tooltip title="Delete">
            <IconButton onClick={() => {}}>
              <DeleteIcon />
            </IconButton>
          </Tooltip>
        ) : (
          <Tooltip title="Filter list">
            <IconButton>
              <FilterListIcon />
            </IconButton>
          </Tooltip>
        )}
        {props.exportButton && (
          <>
            <Tooltip title="Export">
              <IconButton
                onClick={async () => {
                  setLoading(true);
                  if (props.exportAllData) {
                    const response = await props.onExportAllDataCSV!();
                    if (response) setLoading(false);
                  } else {
                    const response = await props.onExportDataCSV!();
                    if (response) setLoading(false);
                  }
                }}
              >
                {isLoading ? <CircularProgress size={20} /> : <Download />}
              </IconButton>
            </Tooltip>
          </>
        )}
      </Toolbar>
    );
  } else {
    return null;
  }
}

interface TableHeaderProps {
  numSelected: number;
  onRequestSearch: (search: string, searchBy: string) => void;
  onRequestSort: (event: React.MouseEvent<unknown>, property: any) => void;
  onSelectAllClick: (event: React.ChangeEvent<HTMLInputElement>) => void;
  order: Order;
  orderBy: string;
  search: string;
  searchBy: string;
  rowCount: number;
  columns: Array<ColumnTypes>;
  actions?: Array<(rowData: any) => ActionProps>;
  rowSelection?: boolean;
}

function TableHeader(props: TableHeaderProps) {
  const {
    onSelectAllClick,
    order,
    orderBy,
    numSelected,
    rowCount,
    onRequestSort,
    columns,
  } = props;
  const createSortHandler =
    (property: any) => (event: React.MouseEvent<unknown>) => {
      onRequestSort(event, property);
    };

  return (
    <TableHead>
      <TableRow>
        {(props.rowSelection || props.rowSelection == null) && (
          <TableCell padding="checkbox">
            <Checkbox
              color="primary"
              indeterminate={numSelected > 0 && numSelected < rowCount}
              checked={rowCount > 0 && numSelected === rowCount}
              onChange={onSelectAllClick}
              inputProps={{
                "aria-label": "select all",
              }}
            />
          </TableCell>
        )}
        {props.actions && props.actions!.length > 0 && (
          <TableCell>Actions</TableCell>
        )}
        {columns.map((column, i) => (
          <TableCell key={i}>
            {column.sorting == null || column.sorting ? (
              <TableSortLabel
                active={orderBy === column.field}
                direction={orderBy === column.field ? order : "asc"}
                onClick={createSortHandler(column.field)}
              >
                {column.title}
              </TableSortLabel>
            ) : (
              column.title
            )}
            <br />
            {column.searchable && (
              <TextField
                size="small"
                sx={{
                  ".MuiInputBase-root": {
                    fontSize: "12px !important",
                    paddingLeft: "10px !important",
                    ".MuiInputBase-input": {
                      padding: "5px !important",
                    },
                  },
                }}
                type={column.type ?? "text"}
                onChange={(event: any) => {
                  if (column.type === "date") {
                    props.onRequestSearch(event.target.value!, column.field!);
                  }
                }}
                onKeyDown={(event: any) => {
                  if (event.key === "Enter") {
                    props.onRequestSearch(event.target.value!, column.field!);
                  }
                }}
                // variant="standard"
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <Search sx={{ width: "17px" }} />
                    </InputAdornment>
                  ),
                }}
              ></TextField>
            )}
          </TableCell>
        ))}
      </TableRow>
    </TableHead>
  );
}

function LoadingContainer() {
  return (
    <Box
      position="absolute"
      sx={{
        zIndex: "10",
        height: "100%",
        width: "100%",
        backgroundColor: alpha("#000", 0.2),
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <CircularProgress />
    </Box>
  );
}

const MyTable = (props: Props) => {
  const csvRef = useRef<any>(null);
  const [isLoading, setLoading] = useState(false);
  const [order, setOrder] = useState<Order>("asc");
  const [orderBy, setOrderBy] = useState<string>("");
  const [search, setSearch] = useState<string>("");
  const [searchBy, setSearchBy] = useState<string>("");
  const [selected, setSelected] = useState<string[]>([]);
  const [page, setPage] = useState<number>(0);
  const [rowsPerPage, setRowsPerPage] = useState<number>(
    props.options?.pageSize! ?? 5
  );
  const [rows, setRows] = useState<any[]>([]);
  const [exportData, setExportData] = useState<any[]>([]);

  const handleChangePage = (event: unknown, newPage: number) => {
    setPage(newPage);
  };
  const handleChangeRowsPerPage = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  const handleRequestSort = (
    event: React.MouseEvent<unknown>,
    property: any
  ) => {
    const isAsc = orderBy === property && order === "asc";
    setOrder(isAsc ? "desc" : "asc");
    setOrderBy(property);
  };

  const handleRequestSearch = (search: string, searchBy: string) => {
    setSearch(search);
    setSearchBy(searchBy);
  };

  const handleSelectAllCLick = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.checked) {
      const newSelecteds = rows.map((n: any) => n._id);
      setSelected(newSelecteds);
      return;
    }
    setSelected([]);
  };

  const handleClick = (event: React.MouseEvent<unknown>, name: string) => {
    const selectedIndex = selected.indexOf(name);
    let newSelected: string[] = [];

    if (selectedIndex === -1) {
      newSelected = newSelected.concat(selected, name);
    } else if (selectedIndex === 0) {
      newSelected = newSelected.concat(selected.slice(1));
    } else if (selectedIndex === selected.length - 1) {
      newSelected = newSelected.concat(selected.slice(0, -1));
    } else if (selectedIndex > 0) {
      newSelected = newSelected.concat(
        selected.slice(0, selectedIndex),
        selected.slice(selectedIndex + 1)
      );
    }

    setSelected(newSelected);
  };

  const isSelected = (name: string) => selected.indexOf(name) !== -1;

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
      order: order,
    });
    console.log(response);
    setExportData(response.rows);
    return response.rows;
  };

  useEffect(() => {
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
      order: order,
    });
    if (response) {
      setLoading(false);
    }
    setRows(response.rows);
  };
  useEffect(() => {
    fetchData();
  }, [page, search, searchBy, orderBy, order, rowsPerPage]);

  return (
    <Box sx={{ width: "100%", position: "relative" }}>
      {isLoading && <LoadingContainer />}
      <TableToolbar
        columns={props.columns}
        numSelected={selected.length}
        title={props.title!}
        showToolbar={props.options?.toolbar}
        exportButton={props.options?.exportButton}
        exportAllData={props.options?.exportAllData}
        exportFileName={props.options?.exportFileName}
        onExportDataCSV={handleExportDataCSV}
        onExportAllDataCSV={handleExportAllDataCSV}
        onDeleteSelected={props.onDeleteSelected}
      />
      <TableContainer>
        <Table>
          <TableHeader
            numSelected={selected.length}
            order={order}
            orderBy={orderBy}
            search={search}
            searchBy={searchBy}
            onRequestSearch={handleRequestSearch}
            onSelectAllClick={handleSelectAllCLick}
            onRequestSort={handleRequestSort}
            rowCount={rows.length}
            actions={props.actions}
            columns={props.columns}
            rowSelection={props.options?.rowSelection}
          />
          <TableBody
            ref={(ref) => {
              props.tableRef &&
                (props.tableRef.current = {
                  ref,
                  ...{
                    handleChangePage,
                    handleChangeRowsPerPage,
                    handleRequestSort,
                    handleRequestSearch,
                    handleSelectAllCLick,
                    fetchData,
                    handleExportAllDataCSV,
                    handleExportDataCSV,
                  },
                });
            }}
          >
            {rows.map((row: any, i: number) => {
              const isItemSelected = isSelected(row._id);
              const labelId = `enhanced-table-checkbox-${i}`;

              return (
                <TableRow
                  key={i}
                  hover
                  onClick={(event) =>
                    props.onRowClick && props.onRowClick(event, row)
                  }
                  role="checkbox"
                  aria-checked={isItemSelected}
                  tabIndex={-1}
                  selected={isItemSelected}
                  sx={props.onRowClick && { cursor: "pointer" }}
                >
                  {props.options?.rowSelection == null ||
                  props.options?.rowSelection ? (
                    <TableCell padding="checkbox">
                      <Checkbox
                        color="primary"
                        checked={isItemSelected}
                        onClick={(event) => {
                          event.stopPropagation();
                          handleClick(event, row._id);
                        }}
                        inputProps={{
                          "aria-labelledby": labelId,
                        }}
                      />
                    </TableCell>
                  ) : null}

                  {props.actions?.length! > 0 ? (
                    <TableCell className="flex">
                      {props.actions?.map(
                        (action: (rowData: any) => ActionProps, j: number) => {
                          if (!action(row).hidden) {
                            return (
                              <Tooltip title={action(row).tooltip} key={j}>
                                <IconButton
                                  disabled={action(row).disabled}
                                  aria-label={action(row).tooltip}
                                  onClick={(event) => {
                                    event.stopPropagation();
                                    action(row).onClick(event, row);
                                  }}
                                  {...action(row).iconProps}
                                >
                                  {action(row).icon}
                                </IconButton>
                              </Tooltip>
                            );
                          }
                        }
                      )}
                    </TableCell>
                  ) : null}
                  {props.columns.map((column: ColumnTypes, j: number) => {
                    if (column.render) {
                      return (
                        <TableCell key={j}>{column.render(row, j)}</TableCell>
                      );
                    } else {
                      return (
                        <TableCell key={j}>{row[`${column.field}`]}</TableCell>
                      );
                    }
                  })}
                </TableRow>
              );
            })}
          </TableBody>
        </Table>
      </TableContainer>
      {(props.options?.pagination == null || props.options?.pagination) && (
        <TablePagination
          rowsPerPageOptions={props.options?.pageSizeOptions ?? [5, 10, 25]}
          component="div"
          count={rows.length}
          rowsPerPage={rowsPerPage}
          page={page}
          onPageChange={handleChangePage}
          onRowsPerPageChange={handleChangeRowsPerPage}
        />
      )}

      {/* ==== EXPORT ==== */}
      <CSVLink
        asyncOnClick={true}
        data={exportData}
        headers={props.columns!.map((column) => {
          return { label: column.title, key: column.field! };
        })}
        filename="data.csv"
        className="hidden"
        ref={csvRef}
        target="_blank"
      />
    </Box>
  );
};
export default MyTable;
