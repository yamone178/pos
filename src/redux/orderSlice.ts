import { OrderItem, TProduct,} from "@/types/types";
import { createSlice } from "@reduxjs/toolkit";


// export interface OrderItem extends TProduct {
//     quantity: number,
//     subtotal: number
// }

interface OrderState{
    items: OrderItem[],
    staff_code: string,
    staff_name: string
    update_product: TProduct | null
}

const initialState : OrderState  = {   
    items:[],  
    staff_code: "",
    staff_name: "",
    update_product: null
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
        setStaffName: (state, action) => {
            console.log(action.payload);
            
            state.staff_name = action.payload

            console.log(state.staff_name);
            
        },
        resetState : (state) =>{
            state.items = []
            state.staff_code = ""
            state.staff_name = ""
        },
        setUpdateProductValue : (state, action) => {
          
            
            state.update_product = action.payload
        }
      

    }
})

export const {addItem, addQuantity, minusQuantity, removeItem,  setStaff, setStaffName, resetState , setUpdateProductValue} = orderSlice.actions

export default orderSlice.reducer