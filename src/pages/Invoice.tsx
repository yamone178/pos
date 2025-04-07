import { RootState } from "@/redux/store"
import { useGetInvoice, useGetStaffs } from "@/services/queries"
import { ArrowLeft, Download } from "lucide-react"
import { Link, useParams } from "react-router-dom"
import {
    Table,
    TableBody,
    TableCaption,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
  } from "@/components/ui/table"
import { useEffect, useState } from "react"
import { OrderItem } from "@/types/types"

const Invoice = () => {

    const params = useParams()
    const [subtoal, setSubtotal] = useState(0)



    const { data : order } = useGetInvoice(params.invoice_id!)

    const {data: staffs} = useGetStaffs()
    const staff_name = staffs?.find((staff)=>staff.staff_code === order?.staff_code)?.staff_name

  


    useEffect(() => {
        if (order?.items) {
          handleSubTotal()
        }
      }, [order?.items]);

    
  
      if (order == undefined) {
        return <div>No order yet!</div>
    }


    const handleSubTotal = () =>  {    
        const newsubtoal : number =    order?.items.reduce((acc, item) => acc + item.subtotal, 0)
        setSubtotal(newsubtoal)
        return newsubtoal
    }

  
    
  return (
    <>
      <div className=" p-5 w-[900px] mx-auto">
      <div className=" flex justify-between items-center">
             <h2 className=" text-2xl font-bold flex gap-4 items-center mb-8 ">
               <Link to="/create-order"><ArrowLeft className=" w-10 h-10 border border-gray-300 rounded-md p-2 text-gray-800" /></Link> 
                {order?.id}
            </h2>

            <button className=" flex text-sm gap-2  p-2 rounded-md bg-black text-white">
                <Download className=" w-5 h-5 " /> <span> Download Invoice</span>
            </button>
      </div>
        

     

        <div className=" border border-gray-300 mt-3 p-8  rounded-md">

        <div className=" flex justify-between">
            <h3 className=" text-xl" ><span className=" font-semibold">Staff Name -</span> {staff_name}</h3>
            <div className="">
                <p><span className=" font-semibold">Invoice Number  -</span> {order?.id}</p>
                <p className=" mt-2"><span className=" font-semibold">Date - </span> {order?.date}</p>
            </div>
        </div>

            <div className=" mt-5">
            <Table >
            <TableHeader>
                <TableRow>
                <TableHead>Product Code</TableHead>
                <TableHead>Name</TableHead>
                <TableHead>Quantity</TableHead>
                <TableHead>Unit Price</TableHead>

                <TableHead className="text-right">Amount</TableHead>
                </TableRow>
            </TableHeader>
            <TableBody>
            
                
                        {
                            order?.items.map((item)=> (
                                <TableRow key={order?.id}>
                                <TableCell className=" font-semibold">{item?.product_code}</TableCell>
                                <TableCell>{item?.product_name}</TableCell>
                                
                                <TableCell>{item?.quantity}</TableCell>
                                <TableCell>${item?.price}</TableCell>
                                <TableCell className="text-right">${item?.subtotal}</TableCell>
                            
                                </TableRow>
                            ))
                        
                
            }
                
            </TableBody>
            </Table>
            <div className=" mr-0 ml-auto w-[250px] p-4">
                <p className=" flex justify-between">
                    <span className=" font-semibold">Subtotal: </span>
                    <span>${subtoal}</span>
                </p>
                <p className=" flex justify-between">
                    <span className=" font-semibold">Tax ({order?.tax}%): </span>
                    <span>${(subtoal*order.tax) / 100}</span>
                </p>
                <p className=" flex justify-between">
                    <span className=" font-semibold">Discount ({order?.discount}%): </span>
                    <span>${(subtoal*order.discount) / 100}</span>
                </p>
                <hr className=" bg-gray-300 my-3" />
                <p className=" flex justify-between">
                    <span className=" font-semibold text-lg">Total: </span>
                    <span>${subtoal - ((subtoal*order.discount) / 100) + ((subtoal*order.tax) / 100) }</span>
                </p>
            </div>
            </div>

        </div>
    </div>
    </>
  )
}

export default Invoice
