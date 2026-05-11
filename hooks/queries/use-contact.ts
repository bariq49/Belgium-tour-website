import { useMutation } from "@tanstack/react-query";
import { submitContactForm, ContactFormData } from "@/lib/api/contact";
import toast from "react-hot-toast";

export const useSubmitContact = () => {
    return useMutation({
        mutationFn: (data: ContactFormData) => submitContactForm(data),
        onSuccess: () => {
            toast.success("Message sent successfully! We'll get back to you soon.");
        },
        onError: (error: any) => {
            toast.error(error?.response?.data?.message || "Failed to send message. Please try again.");
        },
    });
};
