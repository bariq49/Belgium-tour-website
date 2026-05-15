"use client";

import React, { useEffect } from "react";
import { useForm, FormProvider } from "react-hook-form";
import { Input } from "@/components/ui/Input";
import { Button } from "@/components/ui/button";
import { User, Camera, Save, Loader2, ShieldCheck, BadgeCheck } from "lucide-react";
import { useAuthUpdateProfile } from "@/hooks/queries/use-auth";
import { ImageUpload } from "@/components/upload/image-upload";
import { formatDate } from "@/lib/utils";

interface ProfileFormProps {
    defaultValues?: any;
    isLoading?: boolean;
}

const ProfileForm = ({ defaultValues, isLoading }: ProfileFormProps) => {
    const { mutate: updateProfile, isPending } = useAuthUpdateProfile();

    const methods = useForm({
        defaultValues: {
            firstName: "",
            lastName: "",
            email: "",
            phoneNumber: "",
            avatar: "",
        },
    });

    useEffect(() => {
        if (defaultValues) {
            methods.reset({
                firstName: defaultValues.firstName || "",
                lastName: defaultValues.lastName || "",
                email: defaultValues.email || "",
                phoneNumber: defaultValues.phoneNumber || "",
                avatar: defaultValues.avatar || "",
            });
        }
    }, [defaultValues, methods]);

    const onSubmit = (data: any) => {
        updateProfile(data);
    };
    return (
        <FormProvider {...methods}>
            <form onSubmit={methods.handleSubmit(onSubmit)} className="space-y-8">
                {/* Section 1: Public Profile Fields */}
                <div className="space-y-6">
                    <div className="group relative flex flex-col sm:flex-row items-center gap-6 p-6 bg-white rounded-md border border-gray-100 shadow-sm">
                        <div className="relative shrink-0 w-28 h-28">
                            <ImageUpload
                                variant="circle"
                                value={methods.watch("avatar")}
                                onChange={(url) => methods.setValue("avatar", url)}
                                onRemove={() => methods.setValue("avatar", "")}
                                label="Photo"
                            />
                        </div>
                        <div className="flex-1 space-y-3 text-center sm:text-left">
                            <div className="space-y-0.5">
                                <p className="text-sm font-bold text-secondary/70 uppercase tracking-widest flex items-center justify-center sm:justify-start gap-2">
                                    Partner Account
                                    <BadgeCheck size={16} className="text-emerald-500" />
                                </p>
                                <h4 className="text-2xl font-black text-primary tracking-tight">
                                    {defaultValues?.firstName} {defaultValues?.lastName}
                                </h4>
                                <p className="text-base font-medium text-paragraph">{defaultValues?.email}</p>
                            </div>
                        </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <Input
                            name="firstName"
                            label="First Name"
                            placeholder="e.g. John"
                            required
                            icon={<User size={16} className="text-gray-400" />}
                            className="w-full"
                        />
                        <Input
                            name="lastName"
                            label="Last Name"
                            placeholder="e.g. Doe"
                            required
                            icon={<User size={16} className="text-gray-400" />}
                            className="w-full"
                        />
                        <Input
                            name="email"
                            label="Email Address"
                            type="email"
                            placeholder="john@example.com"
                            required
                            disabled
                            icon={<User size={16} className="text-gray-400" />}
                            className="w-full opacity-70 bg-gray-50 cursor-not-allowed"
                        />
                        <Input
                            name="phoneNumber"
                            label="Phone Number"
                            type="phone"
                            placeholder="Enter phone number"
                            className="w-full"
                        />
                    </div>
                </div>

                <div className="pt-8 flex justify-end items-center gap-4 border-t border-gray-200">
                    <Button
                        type="submit"
                        loading={isPending}
                        loadingText={isPending}
                    >
                        <Save size={18} className="mr-2" />
                        Save Profile
                    </Button>
                </div>
            </form>
        </FormProvider>
    );
};

export default ProfileForm;

