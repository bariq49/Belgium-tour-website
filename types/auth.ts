export interface LoginPayload {
    email: string;
    password: string;
    rememberMe: boolean;
}

export interface LoginPayload {
    email: string;
    password: string;
    rememberMe: boolean;
}

export interface AdminAccount {
    _id: string;
    firstName: string;
    lastName: string;
    email: string;
    phoneNumber?: string;
    avatar?: string;
    role: "admin";
    lastLogin?: string;
}

export interface AuthResponse {
    admin: AdminAccount;
    accessToken: string;
}

export interface ForgotPasswordPayload {
    email: string;
}

export interface ResetPasswordPayload {
    token: string;
    password: string;
}

export interface UpdatePasswordPayload {
    currentPassword: string;
    newPassword: string;
}

export interface Activity {
    _id: string;
    type: "login" | "logout" | "password_change" | "update_profile" | "logout_all";
    status: "success" | "failed";
    ipAddress: string;
    userAgent: string;
    device: string;
    browser?: string;
    os?: string;
    timestamp: string;
}

