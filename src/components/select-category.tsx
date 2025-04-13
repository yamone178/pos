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
import { useGetCategories } from "@/services/queries"


interface CategoryProps {
  value ?: string,
  onChange ?: (value: string) => void
}


export function SelectCategory({value, onChange} : CategoryProps) {

    const {isPending, data:  categories, error} = useGetCategories()
    

  return (
    <Select value={value} onValueChange={onChange}>
      <SelectTrigger className="w-[100%]">
        <SelectValue placeholder="Select a fruit" />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          <SelectLabel>Category</SelectLabel>
          {
            categories&& categories.length > 0 && categories.map((category) => (
                <SelectItem key={category.id} value={category.category_id}>{category.category_name}</SelectItem>

            ))
          }

        </SelectGroup>
      </SelectContent>
    </Select>
  )
}
