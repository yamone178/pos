import { addItem, setUpdateProductValue } from '@/redux/OrderSlice'
import { useDeleteProduct } from '@/services/mutation'
import { TInvoice } from '@/types/types'
import { Delete, Edit, PlusCircle, Trash } from 'lucide-react'
import React from 'react'
import { Row } from 'react-day-picker'
import { useDispatch } from 'react-redux'
import { useLocation } from 'react-router-dom'



const ActionCell = ({row}: {row: TInvoice}) => {

    const dispatch = useDispatch()  
    const location = useLocation()
    const deleteProductMutation = useDeleteProduct()


  return (
          
          <>
          {
            location.pathname === '/products' ?
            <div className=' flex gap-1'>
               <button
                  onClick={() => dispatch(setUpdateProductValue(row))}
                  className="flex items-center gap-1 cursor-pointer"
                >
                  <Edit className="h-4 w-4 text-yellow-600" />
                 
                </button>
               
                <button
                  onClick={() => deleteProductMutation.mutate(row.id)}
                  className="flex items-center gap-1 cursor-pointer"
                >
                  <Trash className="h-4 w-4 text-red-500" />
                 
                </button>
            </div>
            : 
            <button
            onClick={() => dispatch(addItem(row))}
            className="flex items-center gap-1 cursor-pointer"
          >
            <PlusCircle className="h-4 w-4" />
            Add
          </button>
          }

        
          </>
         
  )
}

export default ActionCell
