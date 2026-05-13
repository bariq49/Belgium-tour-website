import API_ROUTES from "@/config/routes";
import { api } from "./client";

export const getTours = async (params: any) => {
    return api.get(API_ROUTES.TOURS, { params });
};

export const getCustomTours = async (params?: any) => {
    return api.get(`${API_ROUTES.TOURS}/custom`, { params });
};

export const getTour = async (id: string) => {
    return api.get(`${API_ROUTES.TOURS}/${id}`);
};
