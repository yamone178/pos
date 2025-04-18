
import { TCategory } from "@/types/types"
import { ColumnDef } from "@tanstack/react-table"
import ActionCell from "./action-cell"


export const columns: ColumnDef<TCategory>[] = [
  {
    accessorKey: "category_id",
    header: "Category Id",
  },
  {
    accessorKey: "category_name",
    header: "Category Name",
  },
 
   
    {
        id: "action", // Use an `id` for non-accessor columns
        header: "Action",
        cell: ({ row }) => <ActionCell key={row.original.id} row={row.original} />,
      },
  
]
