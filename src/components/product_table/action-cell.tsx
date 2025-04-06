import { addItem } from '@/redux/OrderSlice'
import { TProduct } from '@/types/types'
import { PlusCircle } from 'lucide-react'
import React from 'react'
import { useDispatch } from 'react-redux'

const ActionCell = ({row}: {row: TProduct}) => {

    const dispatch = useDispatch()  

  return (
    <button
            onClick={() => dispatch(addItem(row))}
            className="flex items-center gap-1 cursor-pointer"
          >
            <PlusCircle className="h-4 w-4" />
            Add
          </button>
  )
}

export default ActionCell
