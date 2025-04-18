
import { TInvoice } from "@/types/types"
import { ColumnDef } from "@tanstack/react-table"
import { OrderAction } from "../order-action"


export const columns: ColumnDef<TInvoice>[] = [
  {
    accessorKey: "id",
    header: "Invoice No",
  },
  {
    accessorKey: "date",
    header: "Date",
  },
  {
    accessorKey: "staff_code",
    header: "Staff",
  },
//   {
//     accessorKey: "items",
//     header: "Staff",
//     cell: ({row}) => row.original.items.length
//   },

  {
    accessorKey: "payment_type",
    header: "Payment",
    
  },
  {
    accessorKey: "total_amount",
    header: "Amount",
    
  },

    {
        id: "action", // Use an `id` for non-accessor columns
        header: "Action",
        cell: ({ row }) => <OrderAction order={row.original}  />,
      },
  
]
