import API_ROUTES from "@/config/routes";
import { api } from "./client";

export const createCustomTourRequest = async (data: any) => {
    return api.post(API_ROUTES.CUSTOM_TOUR_REQUESTS, data);
};

export const getCustomTourRequests = async (params: any) => {
    return api.get(API_ROUTES.CUSTOM_TOUR_REQUESTS, { params });
};

export const getCustomTourRequest = async (id: string) => {
    return api.get(`${API_ROUTES.CUSTOM_TOUR_REQUESTS}/${id}`);
};
