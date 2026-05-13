import { useMutation, useQuery } from "@tanstack/react-query";
import { createCustomTourRequest, getCustomTourRequest, getCustomTourRequests } from "@/lib/api/custom-tour-requests";
import toast from "react-hot-toast";

export const useCreateCustomTourRequest = () => {
    return useMutation({
        mutationFn: async ({ data, step1, step2, step3, step4 }: { data: any, step1: any, step2: any, step3: any, step4: any }) => {
            const payload = {
                tourId: step1?.tour?._id,
                ...step2,
                ...step3,
                ...step4,
                ...data,
            };
            const response = await createCustomTourRequest(payload);
            return response.data;
        },
        onSuccess: () => {
            toast.success("Your dream trip request has been submitted!");
        },
        onError: (error: any) => {
            const errorMessage = error?.response?.data?.error || error?.message || "Something went wrong";
            toast.error(errorMessage);
        },
    });
};

export const useCustomTourRequests = (params: any) => {
    return useQuery({
        queryKey: ["custom-tour-requests", params],
        queryFn: async () => {
            const res = await getCustomTourRequests(params);
            return res;
        },
    });
};

export const useCustomTourRequest = (id: string) => {
    return useQuery({
        queryKey: ["custom-tour-requests", id],
        queryFn: async () => {
            const res = await getCustomTourRequest(id);
            return res.data;
        },
        enabled: !!id,
    });
};
