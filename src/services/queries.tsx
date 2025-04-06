import { useQueries, useQuery } from "@tanstack/react-query";
import { getCategories, getProducts, getStaff } from "./api";


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