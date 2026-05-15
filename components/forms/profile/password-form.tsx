"use client";

import React from "react";
import { useForm, FormProvider } from "react-hook-form";
import { Input } from "@/components/ui/Input";
import { Button } from "@/components/ui/button";
import { Lock, ShieldCheck, RefreshCcw, Save, AlertCircle } from "lucide-react";
import { useAuthChangePassword } from "@/hooks/queries/use-auth";

const PasswordForm = () => {
    const { mutate: changePassword, isPending } = useAuthChangePassword();

    const methods = useForm({
        defaultValues: {
            currentPassword: "",
            newPassword: "",
            confirmPassword: "",
        },
    });

    const onSubmit = (data: any) => {
        changePassword(data);
    };

    return (
        <FormProvider {...methods}>
            <form onSubmit={methods.handleSubmit(onSubmit)} className="space-y-8">
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                    <div>
                        <h3 className="text-lg font-bold text-foreground mb-1">Change Password</h3>
                        <p className="text-sm text-paragraph font-medium leading-relaxed">
                            Ensure your account is using a long, random password to stay secure.
                        </p>
                    </div>

                    <div className="lg:col-span-2 space-y-4">
                        <div className="grid grid-cols-1 gap-4">
                            <Input
                                name="currentPassword"
                                label="Current Password"
                                type="password"
                                placeholder="Enter your current password"
                                required
                                icon={<Lock size={16} className="text-gray-400" />}
                                className="w-full"
                            />
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                <Input
                                    name="newPassword"
                                    label="New Password"
                                    type="password"
                                    placeholder="Create a new password"
                                    required
                                    icon={<RefreshCcw size={16} className="text-gray-400" />}
                                    className="w-full"
                                />

                                <Input
                                    name="confirmPassword"
                                    label="Confirm New Password"
                                    type="password"
                                    placeholder="Repeat your new password"
                                    required
                                    icon={<ShieldCheck size={16} className="text-gray-400" />}
                                    className="w-full"
                                />
                            </div>
                        </div>
                    </div>
                </div>

                <div className="pt-8 flex justify-end items-center gap-4 border-t border-gray-200">
                    <Button
                        type="submit"
                        loading={isPending}
                        loadingText={isPending}
                    >
                        <Save size={18} className="mr-2" />
                        Update Password
                    </Button>
                </div>
            </form>
        </FormProvider>
    );
};

export default PasswordForm;

