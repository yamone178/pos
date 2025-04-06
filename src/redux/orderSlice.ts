import { generateInvoiceNumber, generateVoucherCode } from "@/hooks/use-autogenerate";
import { TInvoice, TProduct } from "@/types/types";
import { createSlice } from "@reduxjs/toolkit";


// export interface OrderItem extends TProduct {
//     quantity: number,
//     subtotal: number
// }

// interface OrderState{
//     items: OrderItem[],
//     date: string,
//     discount: number,
//     tax: number,
//     payment_type: string,
//     total_amount: number,
//     staff_code: string   
// }

const initialState : TInvoice = {
    id: "",
    invoice_id: generateInvoiceNumber(),
    voucher_no: generateVoucherCode(),
    items:[],
    date: new Date().toISOString(),
    discount: 0,
    tax: 0,
    payment_type: "Cash",
    total_amount: 0,
    staff_code: ""
}


export const orderSlice = createSlice({
    name: 'order',
    initialState,
    reducers: {
        addItem: (state, action) =>{

            const existingItem = state.items.findIndex(item => item.id === action.payload.id)

            if(existingItem >= 0){
                state.items[existingItem].quantity += 1
                state.items[existingItem].subtotal += action.payload.price
            }else{
                state.items.push({
                    ...action.payload,
                    quantity: 1,
                    subtotal: action.payload.price
                })
            }
            
            console.log(state);
            
        },
        addQuantity: (state, action) => {
            const itemIndex = state.items.findIndex(item => item.id === action.payload.id)

            if(itemIndex >= 0){
                state.items[itemIndex].quantity += 1
                state.items[itemIndex].subtotal += action.payload.price
            }
            
        },

        minusQuantity: (state, action) =>{
            const itemIndex = state.items.findIndex(item => item.id === action.payload.id)

            if(itemIndex >= 0){
                if(state.items[itemIndex].quantity > 1){
                    state.items[itemIndex].quantity -= 1
                    state.items[itemIndex].subtotal -= action.payload.price
                }else{
                    state.items.splice(itemIndex, 1)
                }
            }
        },

        removeItem: (state, action) => {
            const itemIndex = state.items.findIndex(item => item.id === action.payload.id)
                
                if(itemIndex >= 0){
                    state.items.splice(itemIndex, 1)
                }

        },
        setStaff:(state, action) =>{
            state.staff_code = action.payload
        },
      

    }
})

export const {addItem, addQuantity, minusQuantity, removeItem,  setStaff} = orderSlice.actions

export default orderSlice.reducer