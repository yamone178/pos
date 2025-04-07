
import OrderTable from '@/components/order-table'
import React from 'react'



const Orders = () => {

  

  return (
   <>
    <div className=" border border-gray-300 p-8 rounded-2xl mt-5">
      <h2 className=' text-2xl font-bold mb-5'>Orders</h2>
      <OrderTable />
    </div>
   
   </>
  )
}

export default Orders

