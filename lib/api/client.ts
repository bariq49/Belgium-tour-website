import axios, { AxiosError } from "axios";
import API_ROUTES from "@/config/routes";

const baseURL = process.env.NEXT_PUBLIC_BACKEND_URL;

export const api = axios.create({
    baseURL,
    withCredentials: true,
    headers: {
        "Content-Type": "application/json",
    },
});

let isRefreshing = false;
let refreshPromise: Promise<unknown> | null = null;

type RetriableConfig = {
    _retry?: boolean;
};

api.interceptors.response.use(
    (response) => {
        return response.data;
    },
    async (error: AxiosError<{ error?: string; message?: string }>) => {
        const originalRequest = error.config as (typeof error.config & RetriableConfig) | undefined;

        if (error.response?.status === 401 && originalRequest && !originalRequest._retry) {
            originalRequest._retry = true;

            if (!isRefreshing) {
                isRefreshing = true;
                refreshPromise = axios.post(
                    `${baseURL}`,
                    {},
                    {
                        withCredentials: true,
                        headers: {
                            "Content-Type": "application/json",
                        },
                    }
                );
            }

            try {
                await refreshPromise;
                return api(originalRequest);
            } catch {
                // If refresh fails, fall through to normalized 401 error.
            } finally {
                isRefreshing = false;
                refreshPromise = null;
            }
        }

        const message =
            error.response?.data?.error ||
            error.response?.data?.message ||
            error.message ||
            "Something went wrong";
        return Promise.reject({
            message,
            status: error.response?.status,
        });
    }
);