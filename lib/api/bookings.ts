import API_ROUTES from "@/config/routes";
import { api } from "./client";

export const createBooking = async (data: any) => {
    return api.post(API_ROUTES.BOOKINGS, data);
};

export const getBooking = async (orderNumber: string) => {
    return api.get(`${API_ROUTES.BOOKINGS}/${orderNumber}`);
};

export const downloadBookingReceipt = async (orderNumber: string) => {
    return api.get(`${API_ROUTES.BOOKINGS}/${orderNumber}/receipt`, {
        responseType: "blob",
    });
};
