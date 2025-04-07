import OrderDetail from "@/components/order-detail"
import OrderForm from "@/components/order-form"


const  CreateOrder = () => {
  return (
    <div>

        <div className=" grid grid-cols-7 gap-4 mt-5">
            <div className=" col-span-4 border border-gray-200 p-4 rounded-lg">
                <OrderForm />
            </div>

            <div className=" col-span-3 border border-gray-200 p-5 rounded-lg">
                <OrderDetail />
            </div>
        </div>
      
    </div>
  )
}

export default CreateOrder

