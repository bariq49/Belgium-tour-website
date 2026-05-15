"use client";

import { useForm, FormProvider, SubmitHandler } from 'react-hook-form';
import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import { Mail, ArrowLeft, ArrowRight } from "lucide-react";
import { useAuthForgotPassword } from "@/hooks/queries/use-auth";
import { Input } from '@/components/ui/Input';
import { IMAGES } from "@/constants/image-constants";
import { Logo } from '@/layout/header/logo';

const ForgotPasswordForm = () => {
    const { mutate: forgotPassword, isPending: isLoading } = useAuthForgotPassword();

    const methods = useForm({
        defaultValues: {
            email: "",
        },
    });

    const onSubmit = async (data: any) => {
        forgotPassword(data);
    };

    return (
        <div className="flex min-h-screen w-full bg-white">
            <div className="flex w-full flex-col justify-center px-6 py-12 lg:w-1/2 lg:px-16 xl:px-24">
                <div className="mx-auto w-full max-w-md">
                    <div className="mb-6 flex justify-start">
                        <Logo variant="dark" />
                    </div>

                    <div className="mb-10 text-left">
                        <h1 className="text-4xl font-extrabold tracking-tight text-gray-900 sm:text-5xl">
                            Forgot Password?
                        </h1>
                        <p className="mt-4 text-lg text-gray-600">
                            Enter your email address and we'll send you a link to reset your password.
                        </p>
                    </div>

                    <FormProvider {...methods}>
                        <form onSubmit={methods.handleSubmit(onSubmit)} className="space-y-6">
                            <Input
                                name="email"
                                type="email"
                                label="Email Address"
                                placeholder="Enter your email"
                                required
                                icon={<Mail size={20} className="text-gray-400" />}
                                className="w-full text-left"
                            />

                            <Button
                                type="submit"
                                loading={isLoading}
                                className="w-full py-7 text-lg font-bold transition-all duration-300 hover:shadow-lg active:scale-[0.98]"
                            >
                                Send Reset Link
                                <ArrowRight size={20} className="ml-2" />
                            </Button>
                        </form>
                    </FormProvider>

                    <div className="mt-8 text-center">
                        <Link
                            href="/login"
                            className="inline-flex items-center font-bold text-primary hover:text-primary-600 transition-colors"
                        >
                            <ArrowLeft size={18} className="mr-2" />
                            Back to Login
                        </Link>
                    </div>
                </div>
            </div>

            <div className="hidden lg:relative lg:flex lg:w-1/2 bg-gray-900 overflow-hidden">
                <Image
                    src={IMAGES.auth.forgotPassword}
                    alt="Belgium Tour"
                    fill
                    className="absolute inset-0 h-full w-full object-cover opacity-80"
                    priority
                />

                <div className="absolute inset-0 bg-gradient-to-tr from-black/80 via-black/40 to-transparent" />

                <div className="relative flex h-full w-full flex-col justify-end p-16 text-white">
                    <div className="max-w-xl">
                        <blockquote className="space-y-6">
                            <p className="text-3xl font-light italic leading-relaxed text-gray-100">
                                &ldquo;Your security is our top priority. We make account recovery simple so you can focus on your next adventure.&rdquo;
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

export default ForgotPasswordForm;
