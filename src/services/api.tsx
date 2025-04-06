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

export const createOrder = async (order: TInvoice): Promise<TInvoice> => {

  console.log(order);

  const api = axios.create({
    baseURL: 'http://localhost:3000/',
    headers : {
      "Content-Type": "application/json",
      Accept: "application/json"
    }
  })

  try {
    const response = await api.post('/orders', order);
    console.log(response);
    
  } catch (error) {
    console.log(error);
    
  }

   
  
  // try {
  //   const response = await axiosInstance.post<TInvoice>('/orders', order);
  //   return response.data;
  // } catch (error: any) {
  //   // Optional: add custom logging or error formatting here
  //   if (axios.isAxiosError(error)) {
  //     throw new Error(error.response?.data?.message || 'Failed to create order');
  //   } else {
  //     throw new Error('An unexpected error occurred while creating the order');
  //   }
  // }
}
