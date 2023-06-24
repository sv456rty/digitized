"use client";

import React, { useMemo } from "react";
import { HydrationProvider, Client } from "react-hydration-provider";
import { MaterialReactTable, type MRT_ColumnDef } from "material-react-table";

interface Person {
  firstName: string;
  lastName: string;
  address: string;
  city: string;
  state: string;
}

const Example = (props: any) => {
  const dataz = props.data as Person[];
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
          data={dataz}
          enableColumnOrdering
        />
      </Client>
    </HydrationProvider>
  );
};

export default Example;
