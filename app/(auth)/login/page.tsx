import LoginForm from "@/components/forms/auth/login-form";
import { Suspense } from "react";

export async function generateMetadata() {
    return {
        title: `Login | Belgium Tour`,
        description: `Login to your account to manage your Belgium Tour.`,
        keywords: "Belgium Tour, Belgium Tour Login",
    };
}

export default function LoginPage() {
    return (
        <Suspense fallback={<div className="min-h-screen w-full bg-white" />}>
            <LoginForm />
        </Suspense>
    );
}