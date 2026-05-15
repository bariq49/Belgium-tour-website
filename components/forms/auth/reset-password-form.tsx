"use client";

import { useForm, FormProvider, SubmitHandler } from 'react-hook-form';
import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { Lock, ArrowRight, CheckCircle2 } from "lucide-react";
import toast from "react-hot-toast";
import { useAuthResetPassword } from "@/hooks/queries/use-auth";
import { Input } from '@/components/ui/Input';
import { Logo } from '@/layout/header/logo';
import { IMAGES } from '@/constants/image-constants';


const ResetPasswordForm = () => {
    const searchParams = useSearchParams();
    const token = searchParams.get("token");
    const { mutate: resetPassword, isPending: isLoading } = useAuthResetPassword();
    const methods = useForm({
        defaultValues: {
            password: '',
            confirmPassword: '',
        },
    });

    const onSubmit = async (data: any) => {
        if (!token) {
            toast.error("Reset token is missing. Please check your email link.");
            return;
        }
        resetPassword({ token, password: data.password });
    };

    return (
        <div className="flex min-h-screen w-full bg-white">
            <div className="flex w-full flex-col justify-center px-6 py-12 lg:w-1/2 lg:px-16 xl:px-24">
                <div className="mx-auto w-full max-w-md">
                    <div className="mb-12 flex justify-start">
                        <Logo variant="dark" />
                    </div>

                    <div className="mb-10 text-start">
                        <h1 className="text-4xl font-extrabold tracking-tight text-gray-900 sm:text-5xl">
                            Reset Password
                        </h1>
                        <p className="mt-4 text-lg text-gray-600">
                            Please enter your new password below to secure your account.
                        </p>
                    </div>

                    <FormProvider {...methods}>
                        <form onSubmit={methods.handleSubmit(onSubmit)} className="space-y-6">
                            <div className="space-y-4">
                                <Input
                                    name="password"
                                    type="password"
                                    label="New Password"
                                    placeholder="••••••••"
                                    required
                                    icon={<Lock size={20} className="text-gray-400" />}
                                    className="w-full text-left"
                                />

                                <Input
                                    name="confirmPassword"
                                    type="password"
                                    label="Confirm New Password"
                                    placeholder="••••••••"
                                    required
                                    icon={<Lock size={20} className="text-gray-400" />}
                                    className="w-full text-left"
                                />
                            </div>

                            <Button
                                type="submit"
                                loading={isLoading}
                                className="w-full py-7 text-lg font-bold transition-all duration-300 hover:shadow-lg active:scale-[0.98]"
                            >
                                Reset Password
                                <ArrowRight size={20} className="ml-2" />
                            </Button>
                        </form>
                    </FormProvider>

                    <div className="mt-12 flex justify-center text-sm text-gray-500">
                        <Link href="/contact-us" className="hover:text-gray-700 transition-colors">
                            Need help? Contact support
                        </Link>
                    </div>
                </div>
            </div>

            <div className="hidden lg:relative lg:flex lg:w-1/2 bg-gray-900 overflow-hidden">
                <Image
                    src={IMAGES.auth.passwordReset}
                    alt="Belgium Tour"
                    fill
                    className="absolute inset-0 h-full w-full object-cover opacity-80"
                    priority
                />

                <div className="absolute inset-0 bg-gradient-to-tr from-black/80 via-black/40 to-transparent" />

                <div className="relative flex h-full w-full flex-col justify-end p-16 text-white">
                    <div className="max-w-xl">
                        <div className="mb-6 inline-flex h-12 w-12 items-center justify-center rounded-full bg-primary/20 backdrop-blur-sm">
                            <CheckCircle2 className="h-6 w-6 text-primary" />
                        </div>
                        <blockquote className="space-y-6">
                            <p className="text-3xl font-light italic leading-relaxed text-gray-100">
                                &ldquo;Restoring access to your account is simple and secure. We ensure your journey with us remains protected.&rdquo;
                            </p>
                            <footer className="mt-4">
                                <div className="text-xl font-bold">Secure Account Recovery</div>
                            </footer>
                        </blockquote>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ResetPasswordForm;
