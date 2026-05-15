import ResetPasswordForm from "@/components/forms/auth/reset-password-form";
import { Suspense } from "react";

export async function generateMetadata() {
    return {
        title: `Reset Password | Belgium Tour`,
        description: `Set a new password for your Belgium Tour account.`,
        keywords: "Belgium Tour, Reset Password,Belgium Tour Login",
    };
}

export default function ResetPasswordPage() {
    return (
        <Suspense fallback={<div className="min-h-screen w-full bg-white" />}>
            <ResetPasswordForm />
        </Suspense>
    );
}
