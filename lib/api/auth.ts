import API_ROUTES from "@/config/routes";
import { api } from "./client";

export const login = async (payload: any) => {
    return api.post(API_ROUTES.AUTH_LOGIN, payload);
};


export const logout = async () => {
    return api.post(API_ROUTES.AUTH_LOGOUT);
};

export const logoutAllDevices = async () => {
    return api.post(API_ROUTES.AUTH_LOGOUT_ALL);
};

export const forgotPassword = async (payload: any) => {
    return api.post(API_ROUTES.AUTH_FORGOT_PASSWORD, payload);
};

export const resetPassword = async (payload: any) => {
    return api.post(API_ROUTES.AUTH_RESET_PASSWORD, payload);
};

export const signup = async (payload: any) => {
    return api.post(API_ROUTES.AUTH_SIGNUP, payload);
};

export const refreshToken = async () => {
    return api.post(API_ROUTES.AUTH_REFRESH, {});
};

export const getActivities = async () => {
    return api.get(API_ROUTES.AUTH_ACTIVITIES);
};

export const me = async () => {
    return api.get(API_ROUTES.AUTH_ME);
};

export const updateProfile = async (payload: any) => {
    return api.post(API_ROUTES.AUTH_UPDATE_PROFILE, payload);
};

export const changePassword = async (payload: any) => {
    return api.post(API_ROUTES.AUTH_CHANGE_PASSWORD, payload);
};
