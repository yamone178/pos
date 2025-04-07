import { TInvoice } from "@/types/types";
import { createOrder } from "./api";
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