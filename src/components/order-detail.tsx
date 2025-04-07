import {  addQuantity,  minusQuantity, removeItem, resetState } from "@/redux/OrderSlice";
import { RootState } from "@/redux/store"
import { DeleteIcon, MinusCircle, PlusCircle } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux"
import { SelectPayment } from "./select-payment";
import { useCreateOrder } from "@/services/mutation";
import { TInvoice } from "@/types/types";
import { generateInvoiceNumber, generateVoucherCode } from "@/hooks/use-autogenerate";
import { useNavigate } from "react-router-dom";
import { toast } from "sonner"




const OrderDetail = () => {
     const createOrderMutation = useCreateOrder();

   

    const items = useSelector((state: RootState) => state.order.items);
    const staff_code = useSelector((state: RootState) => state.order.staff_code);

    const [sutotal, setsubTotal] = useState<number>(0);
    const [discount, setDiscount] = useState<number>(0);
    const [payment, setPayment] = useState<string>("cash");
   
    const [tax, setTax] = useState<number>(0);
    const [change, setChange] = useState<number>(0);

    const receivedRef = useRef<HTMLInputElement>(null);
    const taxRef = useRef<HTMLInputElement>(null);
    const discountRef = useRef<HTMLInputElement>(null);

    const dispatch = useDispatch();
    const navigate = useNavigate()

    useEffect(() => {
        const subtotal = items.reduce((acc, item) => acc + item.subtotal, 0);
        setsubTotal(subtotal);
    }, [items]);

    const cacTax = () => {
        const tax = taxRef.current?.value ? parseFloat(taxRef.current?.value) : 0;
        setTax((sutotal * tax) / 100);
    };

    const cacDiscount = () => {
        const discount = discountRef.current?.value ? parseFloat(discountRef.current?.value) : 0;
        setDiscount((sutotal * discount) / 100);
    };

    const cacChange = () => {
        const received = receivedRef.current?.value ? parseFloat(receivedRef.current?.value) : 0;
        setChange(received - (sutotal - discount + tax));
    };

    
   
    const handleCreateOrder = async (e: React.FormEvent) => {
         e.preventDefault(); // Prevent default behavior

        console.log('hello');
        
        const orderData: TInvoice = {
          
            id: generateInvoiceNumber(),
            voucher_no: generateVoucherCode(),
            items: items,
            date: new Date().toISOString(),
            total_amount: sutotal - discount + tax,
            discount: discount,
            tax: tax,
            payment_type: payment,
            staff_code: staff_code,
        };

        try {
            createOrderMutation.mutate(orderData);
            toast("Order has been created.")
            dispatch(resetState())
            navigate('/orders')
          } catch (error) {
            console.error('Mutation failed:', error);
          }
    };

    return (
        <form onSubmit={handleCreateOrder}>
            <div>
                <h2 className="text-2xl font-bold">Order Summary</h2>

                {items.map((item) => (
                    <div key={item.id}>
                        <div className="flex justify-between mt-5">
                            <h3 className="text-[15px] font-semibold">{item.product_name}</h3>

                            <div className="flex gap-5 items-center justify-between">
                                <MinusCircle className="h-4 w-4" onClick={() => dispatch(minusQuantity(item))} />
                                <span className="text-sm">{item.quantity}</span>
                                <PlusCircle className="h-4 w-4" onClick={() => dispatch(addQuantity(item))} />
                            </div>
                            <h3 className="text-[15px] font-semibold">${item.subtotal}</h3>
                        </div>
                        <p className="flex justify-between text-sm text-gray-500">
                            <span>
                                ${item.price} x {item.quantity}
                            </span>
                            <DeleteIcon
                                onClick={() => dispatch(removeItem(item))}
                                className="h-5 w-5 text-red-500"
                            />
                        </p>

                        <hr className="bg-gray-500 my-2" />
                    </div>
                ))}

                <div className="flex justify-between mt-5">
                    <h3>Subtotal</h3>
                    <p>{sutotal}</p>
                </div>

                <div className="flex justify-between mt-2">
                    <h3 className="flex gap-2 items-center">
                        <span>Discount</span>
                        <input
                            type="number"
                            onChange={cacDiscount}
                            ref={discountRef}
                            className="pl-2 border border-gray-500 w-[80px] rounded-md"
                        />
                    </h3>
                    <p>${discount}</p>
                </div>

                <div className="flex justify-between mt-2">
                    <h3 className="flex gap-2 items-center">
                        <span>Tax (%)</span>
                        <input
                            type="number"
                            onChange={cacTax}
                            ref={taxRef}
                            className="pl-2 border border-gray-500 w-[80px] rounded-md"
                        />
                    </h3>
                    <p>${tax}</p>
                </div>

                <hr className="bg-gray-500 my-2" />

                <div className="flex justify-between mt-2 font-bold text-xl">
                    <h3>Total</h3>
                    <p>${sutotal - discount + tax}</p>
                </div>

                <hr className="bg-gray-500 my-3" />

                <SelectPayment payment={payment} setPayment={setPayment} />

                <div className="flex justify-between mt-4">
                    <h3 className="flex gap-2 items-center font-semibold">
                        <span>Received Amount:</span>
                    </h3>
                    <input
                        type="number"
                        onChange={cacChange}
                        ref={receivedRef}
                        className="px-2 py-2 border border-gray-400 w-[120px] rounded-md"
                    />
                </div>

                <div className="flex justify-between mt-2 font-semibold">
                    <h3>Change</h3>
                    <p>${change}</p>
                </div>

                <hr className="bg-gray-500 my-3" />
            </div>

            <input
                type="submit"
                value="complete order"
                //  onClick={handleCreateOrder}
                className="bg-gray-600 cursor-pointer text-white px-4 py-2 rounded-md w-full mt-3"
           />
               
           
        </form>
    );
};

export default OrderDetail;