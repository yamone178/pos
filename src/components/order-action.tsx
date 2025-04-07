
import * as React from "react"

import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuLabel,

  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { DropdownMenuItem } from "@radix-ui/react-dropdown-menu"
import { ChevronDown, EyeIcon } from "lucide-react"
import { Link } from "react-router-dom"
import { TInvoice } from "@/types/types"



export function OrderAction({order}: {order: TInvoice}) {
  const [position, setPosition] = React.useState("bottom")

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <ChevronDown className=" w-4 h-4 m-auto" />
      </DropdownMenuTrigger>
      <DropdownMenuContent className=" w-35">
        <DropdownMenuLabel>Actions</DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuItem className="  px-2 cursor-pointer">
            <Link to={`/invoice/${order.id}`} className="flex items-center gap-3 text-[14px] ">
              <EyeIcon className=" w-4 h-4" /> View Invoice
            </Link>
            
            </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
