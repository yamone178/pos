import { TCategory, TInvoice, TProduct, TStaff, } from '@/types/types';
import axios from 'axios'

const Base_URL = 'http://localhost:3000/'

const axiosInstance = axios.create({
    baseURL: Base_URL
})

export const getProducts = async () => {
    try {
      const response = await axiosInstance.get<TProduct[]>('/products');
      return response.data;
    } catch (error) {
      console.error('Error fetching products:', error);
      throw error; // Rethrow the error or handle it appropriately
    }
  };
  

export const getCategories = async () =>{
    const response = await axiosInstance.get<TCategory[]>('/categories');
    return response.data
}

export const getStaff = async () =>{
    const response = await axiosInstance.get<TStaff[]>('/staffs');
    return response.data
}

export const getOrders = async () => {
  const response = await axiosInstance.get<TInvoice[]>('/orders');
  return response.data
}

export const getInvoice = async (id : string) => {
  const response = await axiosInstance.get<TInvoice>(`/orders/${id}`);
  return response.data
}

export const createProduct = async (product: TProduct) => {


  try {
    const response = await axiosInstance.post<TProduct>('/products', product);
    return response.data
    
  } catch (error) {
    console.log(error);
    
  }

}

export const updateProduct = async (id: string, newProduct: TProduct) => {


  try {
    const response = await axiosInstance.put(`/products/${id}`, newProduct);
    return response.data
    
  } catch (error) {
    console.log(error);
    
  }

}



export const createOrder = async (order: TInvoice): Promise<TInvoice> => {


  try {
    const response = await axiosInstance.post<TInvoice>('/orders', order);
    return response.data
    
  } catch (error) {
    console.log(error);
    
  }

}
