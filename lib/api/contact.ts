import API_ROUTES from "@/config/routes";
import { api } from "./client";

export interface ContactFormData {
    fullName: string;
    email: string;
    phone?: string;
    inquiryType: string;
    message: string;
}

export const submitContactForm = async (data: ContactFormData) => {
    return api.post(API_ROUTES.CONTACT, data);
};
