import ForgotPasswordForm from "@/components/forms/auth/forgot-password-form";

export async function generateMetadata() {
    return {
        title: `Forgot Password | Belgium Tour`,
        description: `Recover your account password for Belgium Tour.`,
        keywords: "Belgium Tour, Forgot Password, Belgium Tour Login",
    };
}

export default function ForgotPasswordPage() {
    return <ForgotPasswordForm />;
}
