import { DatePicker } from "./date-picker"
import ProductTable from "./product_table/page"
// import { SearchCommand } from "./search-command"
import { SelectCategory } from "./select-category"
import { SelectStaff } from "./select-staff"
import { Input } from "./ui/input"

const OrderForm = () => {


  return (
    <div>
        <h2 className=" py-4 text-2xl font-bold"> Create New Order</h2>

        <div className=" grid grid-cols-6 space-x-2  space-y-3">
            <div className=" col-span-3 ">
                <SelectStaff />

            </div>

            <div className="col-span-3">
                 <DatePicker />

            </div>

            <div className="col-span-4">
               <Input type="text" placeholder="Search" />
            </div>

            <div className="col-span-2">
                <SelectCategory />
            </div>
            
        </div>

        <ProductTable />

    </div>
  )
}

export default OrderForm
