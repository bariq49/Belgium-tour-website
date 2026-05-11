import API_ROUTES from "@/config/routes";
import { api } from "./client";

export interface ContactFormData {
    firstName: string;
    lastName: string;
    email: string;
    phone: string;
    cartType?: string;
    rentalDates?: string;
    message: string;
    subject?: string;
}

export const submitContactForm = async (data: ContactFormData) => {
    return api.post(API_ROUTES.CONTACT, data);
};
