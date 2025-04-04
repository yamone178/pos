export interface TPRODUCT {
    id: string
    product_id: string,
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

export interface TInvoice{
    id: string,
    invoice_id: string,
    voucher_no: string,
    date_time: string,
    total_amount: number,
    discount: number,
    tax: number,
    payment_type: string,
    payment_amount: number,
    receive_amount: number,
    change: number,
    staff_code: string    
}