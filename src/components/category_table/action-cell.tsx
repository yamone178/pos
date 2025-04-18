
import { setUpdateCategoryValue } from '@/redux/OrderSlice'
import { TCategory } from '@/types/types'
import { Edit } from 'lucide-react'

import { useDispatch } from 'react-redux'




const ActionCell = ({row}: {row: TCategory}) => {

    const dispatch = useDispatch()  



  return (
          
          <>
          <div className=' flex gap-1'>
                                              <button
                                                  onClick={() => dispatch(setUpdateCategoryValue(row))}
                                                  className="flex items-center gap-1 cursor-pointer"
                                              >
                                                  <Edit className="h-4 w-4 text-yellow-600" />
          
                                              </button>
          {/* 
                                              <button
                                                  className="flex items-center gap-1 cursor-pointer"
                                              >
                                                  <Trash className="h-4 w-4 text-red-500" />
          
                                              </button> */}
                                          </div>

        
          </>
         
  )
}

export default ActionCell
