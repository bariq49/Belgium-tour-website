import { login, signup, forgotPassword, resetPassword, logout, logoutAllDevices, getActivities, me, updateProfile, changePassword } from "@/lib/api/auth";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import toast from "react-hot-toast";
import { useRouter } from "next/navigation";

export const AUTH_ME_QUERY_KEY = ["auth", "me"] as const;
type ApiError = { message?: string };

import { useSearchParams } from "next/navigation";

export const useAuthLogin = () => {
    const queryClient = useQueryClient();
    const searchParams = useSearchParams();
    const callbackUrl = searchParams.get("callbackUrl");

    return useMutation({
        mutationFn: login,
        onSuccess: async () => {
            toast.success("Logged in successfully!");
            void queryClient.invalidateQueries({ queryKey: AUTH_ME_QUERY_KEY });
            const redirectPath = callbackUrl || "/dashboard";
            window.location.assign(redirectPath);
        },
        onError: (error: ApiError) => {
            const message = error?.message || "Failed to log in. Please check your credentials.";
            toast.error(message);
        },
    });
};

export const useAuthSignup = () => {
    return useMutation({
        mutationFn: signup,
        onSuccess: () => {
            toast.success("Application submitted successfully! Our team will review it.");
        },
        onError: (error: ApiError) => {
            const message = error?.message || "Failed to submit application. Please try again.";
            toast.error(message);
        },
    });
};

export const useAuthForgotPassword = () => {
    return useMutation({
        mutationFn: forgotPassword,
        onSuccess: () => {
            toast.success("Reset link sent to your email!");
        },
        onError: (error: ApiError) => {
            const message = error?.message || "Failed to send reset link. Please try again.";
            toast.error(message);
        },
    });
};

export const useAuthResetPassword = () => {
    const router = useRouter();

    return useMutation({
        mutationFn: resetPassword,
        onSuccess: () => {
            toast.success("Password reset successfully! You can now log in.");
            router.push("/login");
        },
        onError: (error: ApiError) => {
            const message = error?.message || "Failed to reset password. Please try again.";
            toast.error(message);
        },
    });
};
export const useAuthLogout = () => {
    const queryClient = useQueryClient();
    const router = useRouter();

    return useMutation({
        mutationFn: logout,
        onSuccess: async () => {
            await queryClient.invalidateQueries({ queryKey: AUTH_ME_QUERY_KEY });
            toast.success("Logged out successfully.");
            router.push("/login");
        },
        onError: (error: ApiError) => {
            const message = error?.message || "Failed to log out. Please try again.";
            toast.error(message);
        },
    });
};

export const useAuthLogoutAllDevices = () => {
    const queryClient = useQueryClient();
    const router = useRouter();

    return useMutation({
        mutationFn: logoutAllDevices,
        onSuccess: async () => {
            await queryClient.invalidateQueries({ queryKey: AUTH_ME_QUERY_KEY });
            toast.success("Logged out from all devices.");
            router.push("/login");
        },
        onError: (error: ApiError) => {
            const message = error?.message || "Failed to log out from all devices. Please try again.";
            toast.error(message);
        },
    });
};

export const useAuthMe = () => {
    return useQuery({
        queryKey: AUTH_ME_QUERY_KEY,
        queryFn: me,
        staleTime: 1000 * 60 * 5, // 5 minutes
        retry: false,
    });
};

export const useAuthUpdateProfile = () => {
    const queryClient = useQueryClient();

    return useMutation({
        mutationFn: updateProfile,
        onSuccess: async () => {
            toast.success("Profile updated successfully!");
            void queryClient.invalidateQueries({ queryKey: AUTH_ME_QUERY_KEY });
        },
        onError: (error: ApiError) => {
            const message = error?.message || "Failed to update profile. Please try again.";
            toast.error(message);
        },
    });
};

export const useAuthChangePassword = () => {
    const router = useRouter();

    return useMutation({
        mutationFn: changePassword,
        onSuccess: () => {
            toast.success("Password changed successfully! Please log in again.");
            router.push("/login");
        },
        onError: (error: ApiError) => {
            const message = error?.message || "Failed to change password. Please check your current password.";
            toast.error(message);
        },
    });
};

export const useAuthActivities = () => {
    return useQuery({
        queryKey: ["auth", "activities"],
        queryFn: getActivities,
    });
};
