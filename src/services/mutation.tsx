import { TInvoice, TProduct } from "@/types/types";
import { createOrder, createProduct, updateProduct } from "./api";
import { useMutation, useQueryClient } from "@tanstack/react-query";

export function useCreateOrder() {
    const queryClient = useQueryClient();

    return useMutation({
       
        mutationFn: (data: TInvoice) => createOrder(data),

        onSuccess: () => {
           queryClient.invalidateQueries({ queryKey : ['orders']})
        },

        onError: (error) => {
            console.error('Error:', error);
        },

       
    });
}

export function useCreateProduct() {
    const queryClient = useQueryClient();

    return useMutation({
       
        mutationFn: (data: TProduct) => createProduct(data),

        onSuccess: () => {
           queryClient.invalidateQueries({ queryKey : ['products']})
        },

        onError: (error) => {
            console.error('Error:', error);
        },
     
    });
}

export function useUpdateProduct() {
    const queryClient = useQueryClient();

    return useMutation({
       
        mutationFn: ({id, newProduct}:{id: string, newProduct : TProduct}) => updateProduct(id, newProduct),

        onSuccess: () => {
           queryClient.invalidateQueries({ queryKey : ['products']})
        },

        onError: (error) => {
            console.error('Error:', error);
        },
     
    });
}