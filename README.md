### Building from Source

1. Clone the repository:

```bash
git clone https://github.com/uddipan/mui-datatable.git
cd mui-datatable
```

2. Install dependencies:

```bash
npm install
```

3. Build the package:

```bash
npm run build
```

## Required Dependencies

Make sure you have these peer dependencies installed in your project:

```bash
npm install https://github.com/uddipan32/mui-datatable.git
```

```json
{
  "@emotion/react": "^11.x",
  "@emotion/styled": "^11.x",
  "@mui/material": "^5.x",
  "@mui/icons-material": "^5.x",
  "react": "^18.x",
  "react-dom": "^18.x",
  "moment": "^2.x",
  "react-csv": "^2.x",
  "mui-datatable": "github:uddipan32/mui-datatable"
}
```

## Basic Usage

```jsx
import { MyDataTable } from "mui-datatable";

function YourComponent() {
  const columns = [
    {
      field: "name",
      title: "Name",
      searchable: true,
      sorting: true,
    },
    {
      field: "email",
      title: "Email",
      searchable: true,
    },
  ];

  const data = [
    { _id: "1", name: "John Doe", email: "john@example.com" },
    { _id: "2", name: "Jane Smith", email: "jane@example.com" },
  ];

  return (
    <MyDataTable
      title="Users"
      subtitle="Manage users"
      columns={columns}
      data={data}
      options={{
        pageSize: 50,
        exportButton: true,
        refreshButton: true,
      }}
    />
  );
}
```

## Props

### Required Props

| Prop    | Type           | Description                                     |
| ------- | -------------- | ----------------------------------------------- |
| columns | Array          | Column definitions                              |
| data    | Array/Function | Data array or function for server-side fetching |

### Column Definition

```typescript
{
  field: string;          // Data field name
  title: string;          // Column header text
  searchable?: boolean;   // Enable search for this column
  sorting?: boolean;      // Enable sorting
  align?: 'left' | 'center' | 'right';
  render?: (row: any) => ReactNode;  // Custom render function
  export?: boolean;       // Include in CSV export
}
```

### Options

```typescript
{
  pageSize?: number;              // Default: 50
  pageSizeOptions?: number[];     // Default: [50, 100, 150]
  exportButton?: boolean;         // Enable CSV export
  refreshButton?: boolean;        // Enable refresh button
  rowSelection?: boolean;         // Enable row selection
  pagination?: boolean;           // Enable pagination
  tableContainerStyle?: object;   // Custom styles
  tableHeaderStyle?: object;
  rowStyle?: object;
  cellStyle?: object;
}
```

## Server-side Data Fetching

For server-side operations, pass a function as the data prop:

```jsx
function YourComponent() {
  const fetchData = async (params) => {
    const { page, pageSize, orderBy, order, search, searchBy, filter } = params;

    const response = await fetch(
      "/api/data?" +
        new URLSearchParams({
          page,
          pageSize,
          // ... other params
        })
    );

    const data = await response.json();
    return {
      data: data.items,
      totalCount: data.total,
    };
  };

  return (
    <MyDataTable
      columns={columns}
      data={fetchData}
      // ... other props
    />
  );
}
```

```jsx
import MyDataTable, { MyTableToolButton } from "mui-datatable";
<MyDataTable
  tableRef={tableRef}
  title="Users"
  columns={[
    {
      title: "Avatar",
      field: "image",
      exportValue: (rowData) => rowData.image,
      render: (rowData) => (
        <img
          style={{ width: 100, maxHeight: 50 }}
          src={rowData.image}
          alt={rowData.name}
        />
      ),
    },
    { title: "Name", field: "name", type: "text", searchable: true },
    {
      title: "Email",
      field: "email",
      type: "text",
      searchable: true,
      render: (rowData) => rowData.email,
    },
  ]}
  data={(query) =>
    new Promise((resolve, reject) => {
      getUsers(query)
        .then((response) => response.data)
        .then((result) => {
          resolve({
            data: result.data,
            page: result.page,
            totalCount: result.total,
          });
        })
        .catch((err) => {
          reject(err);
        });
    })
  }
  tools={[
    {
      title: "Delete",
      render: (selected) => {
        return (
          <MyTableToolButton
            startIcon={<Iconify icon="fluent:delete-12-regular" />}
            sx={{ mr: 1 }}
            onClick={() => {
              if (selected.length > 0) {
                setAction("MULTIPLE-DELETE");
                setAlertTitle("Delete Banks");
                setAlertMessage(
                  `Are you sure you want to delete ${
                    selected.length == 1
                      ? "the user"
                      : `${selected.length} users`
                  }  ?`
                );
                setSelectedData(selected);
                setOpenAlertDialog(true);
              } else {
                storeHooks.handleOpenSnackBar(
                  "Select a user to delete",
                  "warning"
                );
              }
            }}
          >
            Delete
          </MyTableToolButton>
        );
      },
    },
    {
      title: "Add",
      render: (selected) => {
        return (
          <MyTableToolButton
            startIcon={<Iconify icon="basil:add-outline" />}
            sx={{ mr: 1 }}
            onClick={() => setOpenDrawer(true)}
          >
            Add
          </MyTableToolButton>
        );
      },
    },
  ]}
  onRowClick={(event, rowData) => handleClickOpenDrawer(rowData)}
  options={{
    refreshButton: true,
    exportButton: true,
  }}
/>;
```

## Development

### Directory Structure

```
mui-datatable/
├── src/
│   └── lib/
│       ├── components/
│       │   └── Table.jsx
│       └── index.js
├── dist/           # Built files
├── babel.config.json
└── package.json
```

### Scripts

- `npm run build` - Builds the package for production
- `npm run dev` - Runs development server

## License

MIT
