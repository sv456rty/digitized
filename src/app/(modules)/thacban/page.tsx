"use client";

import React, { useMemo } from "react";
import { HydrationProvider, Server, Client } from "react-hydration-provider";
import { MaterialReactTable, type MRT_ColumnDef } from "material-react-table";
import { data, type Person } from "./makeData";

const Example = () => {
  const columns = useMemo<MRT_ColumnDef<Person>[]>(
    () => [
      {
        accessorKey: "firstName",
        header: "First Name",
      },
      {
        accessorKey: "lastName",
        header: "Last Name",
      },
      //column definitions...
      {
        accessorKey: "address",
        header: "Address",
      },
      {
        accessorKey: "city",
        header: "City",
      },
      //end
      {
        accessorKey: "state",
        enableColumnOrdering: false, //disable column ordering for this column,
        header: "State",
      },
    ],
    []
  );

  return (
    <HydrationProvider>
      <Client>
        <MaterialReactTable
          columns={columns}
          data={data}
          enableColumnOrdering
        />
      </Client>
    </HydrationProvider>
  );
};

export default Example;
