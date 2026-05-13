import { useQuery } from "@tanstack/react-query";
import { getTours, getTour, getCustomTours } from "@/lib/api/tours";

export const useTours = (params: any) => {
    return useQuery({
        queryKey: ["tours", params],
        queryFn: () => getTours(params),
    });
};

export const useCustomTours = (params?: any) => {
    return useQuery({
        queryKey: ["tours", "custom", params],
        queryFn: () => getCustomTours(params),
    });
};


export const useTour = (id: string | undefined) => {
    return useQuery({
        queryKey: ["tours", "detail", id],
        queryFn: () => getTour(id!),
        enabled: Boolean(id),
    });
};