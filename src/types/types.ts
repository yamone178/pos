export interface TProduct {
    id: string
    product_code: string,
    category_id: string,
    product_name: string,
    price: number
}

export interface TCategory {
   id: string,
   category_id: string,
   category_name: string
}

export interface TStaff{
    id: string,
    staff_id: string,
    staff_code: string
    staff_name:string
}

export interface OrderItem extends TProduct {
    quantity: number,
    subtotal: number
}

export interface TInvoice{
    id: string,
    voucher_no: string,
    items: OrderItem[],
    date: string,
    total_amount: number,
    discount: number,
    tax: number,
    payment_type: string,
    staff_code: string,    
}