import API_ROUTES from "@/config/routes";
import { api } from "./client";

export const getCategories = async (params: any) => {
    return api.get(API_ROUTES.CATEGORIES, { params });
};