import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { getReviewsByTour, createReview } from "@/lib/api/reviews";
import { toast } from "react-hot-toast";

export const useReviewsByTour = (tourId: string | undefined) => {
    return useQuery({
        queryKey: ["reviews", "tour", tourId],
        queryFn: () => getReviewsByTour(tourId!),
        enabled: Boolean(tourId),
    });
};

export const useCreateReview = () => {
    const queryClient = useQueryClient();
    return useMutation({
        mutationFn: createReview,
        onSuccess: () => {
            toast.success("Review submitted! It will be visible after approval.");
            queryClient.invalidateQueries({ queryKey: ["reviews"] });
        },
        onError: (error: any) => {
            toast.error(error?.response?.data?.message || "Failed to submit review");
        },
    });
};
