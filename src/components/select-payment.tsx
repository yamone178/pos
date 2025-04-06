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
import { Label } from "./ui/label"

interface PaymentProps {
  payment: string,
  setPayment: (value: string) => void

}

export function SelectPayment({payment, setPayment} : PaymentProps) {

  const handleSelect = (value: string) => {
    setPayment(value)
    
  }

  return (
    <>
    <Label className="text-sm font-semibold mb-1">Payment Method</Label>
    <Select onValueChange={handleSelect} defaultValue={payment} >
      <SelectTrigger className="w-[100%]">
        <SelectValue placeholder="Select Payment" />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          <SelectLabel >Payment Method</SelectLabel>
           <SelectItem value="cash">Cash</SelectItem>
           <SelectItem value="card">Card</SelectItem>         
        </SelectGroup>
      </SelectContent>
    </Select>
    </>
  )
}
