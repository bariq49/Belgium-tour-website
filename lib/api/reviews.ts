import { api } from "./client";

export const getReviewsByTour = async (tourId: string) => {
    return api.get(`/reviews/tour/${tourId}`);
};

export const createReview = async (data: any) => {
    return api.post("/reviews", data);
};
