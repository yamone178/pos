import * as React from "react"

import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { useGetStaffs } from "@/services/queries"
import { useDispatch } from "react-redux"
import { setStaff, setStaffName } from "@/redux/OrderSlice"

export function SelectStaff() {

    const {isPending, data: staffs, error} = useGetStaffs()
    const dispatch = useDispatch()

    const handleStaff = (value: string) =>{    
     
      const staffName =  staffs?.find((staff)=> staff.staff_code === value)?.staff_name
      console.log(staffName);
      dispatch(setStaff(value))
      dispatch(setStaffName(staffName))
    }

  return (
    <Select onValueChange={handleStaff}>
      <SelectTrigger className="w-[100%]">
        <SelectValue placeholder="Select Staff" />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          <SelectLabel>Staff</SelectLabel>
          {
            staffs && staffs.length > 0 && staffs.map((staff)=>(
                <SelectItem key={staff.id} value={staff.staff_code}>{staff.staff_name}</SelectItem>
            ))
          }
         
        </SelectGroup>
      </SelectContent>
    </Select>
  )
}
