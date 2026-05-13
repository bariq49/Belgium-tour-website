import { useMutation, useQuery } from "@tanstack/react-query";
import { createBooking, getBooking, downloadBookingReceipt } from "@/lib/api/bookings";
import toast from "react-hot-toast";

export const useCreateBooking = () => {
    return useMutation({
        mutationFn: async ({ data, tourData }: { data: any, tourData: any }) => {
            const basePrice = tourData?.data?.price || 650;
            const totalPrice = basePrice * (data.travelersCount || 1);

            const payload = {
                ...data,
                tourName: tourData?.data?.title || "",
                priceBreakdown: {
                    basePrice,
                    totalPrice
                },
                customer: {
                    fullName: data.fullName,
                    email: data.email,
                    phone: data.phone,
                    hotelName: data.hotelName,
                    hotelAddress: data.hotelAddress,
                    specialRequests: data.specialRequests
                }
            };

            const response = await createBooking(payload);
            const result = response.data;
            console.log("Booking result:", result);

            if (result?.checkoutUrl) {
                window.location.href = result.checkoutUrl;
            }

            return result;
        },
        onSuccess: () => {
            toast.success("Booking created! Redirecting to payment...");
        },
        onError: (error: any) => {
            const errorMessage = error?.response?.data?.error || error?.message || "Something went wrong";
            toast.error(errorMessage);
        },
    });
};

export const useBooking = (orderNumber: string) => {
    return useQuery({
        queryKey: ["bookings", orderNumber],
        queryFn: async () => {
            const res = await getBooking(orderNumber);
            return res.data;
        },
        enabled: !!orderNumber,
    });
};

export const useDownloadBookingReceipt = () => {
    return useMutation({
        mutationFn: (orderNumber: string) => downloadBookingReceipt(orderNumber),
        onSuccess: () => {
            toast.success("Receipt downloaded successfully!");
        },
        onError: () => {
            toast.error("Failed to download receipt.");
        },
    });
};
