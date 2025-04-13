import {
    Table,
    TableBody,
    TableCaption,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
  } from "@/components/ui/table"
import { useGetOrders } from "@/services/queries"
import { OrderAction } from "./order-action"
import { useReactTable } from "@tanstack/react-table";


 

const OrderTable = () => {

    const {data, isPending, error} = useGetOrders()

  return (
    <>
   
    <Table>
  <TableCaption>A list of your recent invoices.</TableCaption>
  <TableHeader>
    <TableRow>
    <TableHead>Invoice No</TableHead>
      <TableHead >Date</TableHead>

      <TableHead>Staff</TableHead>
      <TableHead>Items</TableHead>
      <TableHead>Payment</TableHead>
      <TableHead className="text-right">Amount</TableHead>
      <TableHead>Action</TableHead>
    </TableRow>
  </TableHeader>
  <TableBody>
    {
       data && data.map((order)=> (
            <TableRow key={order.id}>
                <TableCell className=" font-semibold">{order.id}</TableCell>
                 <TableCell>{order.date}</TableCell>
                
                <TableCell>{order.staff_code}</TableCell>
                <TableCell>{order.items.length}</TableCell>
                <TableCell>{order.payment_type}</TableCell>
                <TableCell className="text-right">{order.total_amount}</TableCell>
                <TableCell>
                    <OrderAction order={order}  />
                </TableCell>
                </TableRow>
        ))
    }
    
  </TableBody>
</Table>

</>
  )
}

export default OrderTable
