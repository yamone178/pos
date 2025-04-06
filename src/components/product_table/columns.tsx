
import { TProduct } from "@/types/types"
import { ColumnDef } from "@tanstack/react-table"
import { PlusCircle } from "lucide-react"
import { useDispatch } from "react-redux"
import ActionCell from "./action-cell"



export const columns: ColumnDef<TProduct>[] = [
  {
    accessorKey: "product_code",
    header: "product Code",
  },
  {
    accessorKey: "product_name",
    header: "Product Name",
  },
  {
    accessorKey: "price",
    header: "Price",
  },

  
    {
        id: "action", // Use an `id` for non-accessor columns
        header: "Action",
        cell: ({ row }) => <ActionCell key={row.original.id} row={row.original} />,
      },
  
]
