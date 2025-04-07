import { useQueries, useQuery } from "@tanstack/react-query";
import { getCategories, getInvoice, getOrders, getProducts, getStaff } from "./api";


export function useGetCategories(){
    return useQuery({
        queryKey: ["categories"],
        queryFn: getCategories
    })
}

export function useGetProducts(){
    return useQuery({
        queryKey: ["products"],
        queryFn: getProducts
    })
}

export function useGetStaffs()
{
    return useQuery({
        queryKey: ["staffs"],
        queryFn: getStaff
    })
}

export function useGetOrders()
{
    return useQuery({
        queryKey: ["orders"],
        queryFn: getOrders
    })
}

export function useGetInvoice(id : string)
{
    return useQuery({
        queryKey: ["invoice", id],
        queryFn: () => getInvoice(id!)  
    })
}