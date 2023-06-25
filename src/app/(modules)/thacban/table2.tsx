"use client";

import { MaterialReactTable } from "material-react-table";

const Table = (props: any) => {
  const dataz = props.data;
  const columns = props.columns;

  return (
    <MaterialReactTable columns={columns} data={dataz} enableColumnOrdering />
  );
};

export default Table;
