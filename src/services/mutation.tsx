import { TInvoice } from "@/types/types";
import { createOrder } from "./api";
import { useMutation, useQueryClient } from "@tanstack/react-query";

export function useCreateOrder() {
    const queryClient = useQueryClient();

    const mutation = useMutation({
       
        mutationFn: (data: TInvoice) => createOrder(data),

        // onMutate: asyn   c (newOrder) => {
        //     console.log('Mutate', newOrder);

        //     // Optional: Optimistically update the cache (if needed).
        //     await queryClient.cancelQueries(['orders']);
        //     const previousOrders = queryClient.getQueryData(['orders']);

        //     queryClient.setQueryData(['orders'], (oldData: any) => ({
        //         ...oldData,
        //         data: [...(oldData?.data || []), newOrder],
        //     }));

        //     return { previousOrders };
        // },

        onSuccess: () => {
           queryClient.invalidateQueries({ queryKey : ['orders']})
        },

        onError: (error) => {
            console.error('Error:', error);
        },

       
    });
}