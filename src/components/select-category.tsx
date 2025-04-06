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



export function SelectCategory() {

    const {isPending, data:  categories, error} = useGetCategories()
    

  return (
    <Select>
      <SelectTrigger className="w-[100%]">
        <SelectValue placeholder="Select a fruit" />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          <SelectLabel>Category</SelectLabel>
          {
            categories&& categories.length > 0 && categories.map((category) => (
                <SelectItem key={category.id} value={category.category_name}>{category.category_name}</SelectItem>

            ))
          }

        </SelectGroup>
      </SelectContent>
    </Select>
  )
}
