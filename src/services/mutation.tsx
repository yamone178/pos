import { TCategory, TInvoice, TProduct } from "@/types/types";
import { createCategory, createOrder, createProduct, deleteProduct, updateCategory, updateProduct } from "./api";
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

export function useCreateCategory() {
    const queryClient = useQueryClient();

    return useMutation({
       
        mutationFn: (data: TCategory) => createCategory(data),

        onSuccess: () => {
           queryClient.invalidateQueries({ queryKey : ['categories']})
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

export function useUpdateCategory() {
    const queryClient = useQueryClient();

    return useMutation({
       
        mutationFn: ({id, newCategory}:{id: string, newCategory : TCategory}) => updateCategory(id, newCategory),

        onSuccess: () => {
           queryClient.invalidateQueries({ queryKey : ['categories']})
        },

        onError: (error) => {
            console.error('Error:', error);
        },
     
    });
}

export function useDeleteProduct() {
    const queryClient = useQueryClient();

    return useMutation({
       
        mutationFn: (id : string) => deleteProduct(id),

        onSuccess: () => {
           queryClient.invalidateQueries({ queryKey : ['products']})
        },

        onError: (error) => {
            console.error('Error:', error);
        },
     
    });
}