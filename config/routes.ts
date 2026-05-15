export const API_ROUTES = {

    //auth routes
    AUTH_LOGIN: "/auth/login",
    AUTH_SIGNUP: "/auth/register",
    AUTH_FORGOT_PASSWORD: "/auth/forgot-password",
    AUTH_RESET_PASSWORD: "/auth/reset-password",
    AUTH_REFRESH: "/auth/refresh",
    AUTH_LOGOUT: "/auth/logout",
    AUTH_LOGOUT_ALL: "/auth/logout-all",
    AUTH_ACTIVITIES: "/auth/activities",
    AUTH_ME: "/auth/me",
    AUTH_UPDATE_PROFILE: "/auth/update-profile",
    AUTH_CHANGE_PASSWORD: "/auth/change-password",

    CONTACT: `/contact`,
    UPLOAD_PUBLIC: `/upload`,
    CATEGORIES: `/categories`,
    TOURS: `/tours`,
    BOOKINGS: `/bookings`,
    CUSTOM_TOUR_REQUESTS: `/custom-tour-requests`,
} as const;
export default API_ROUTES;