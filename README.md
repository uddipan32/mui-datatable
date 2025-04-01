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
