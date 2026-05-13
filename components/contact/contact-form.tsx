import React from "react";
import { useForm } from "react-hook-form";
import { Send, User, Mail, Phone, MessageSquare, ClipboardList } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Form } from "@/components/ui/form";
import { Input } from "@/components/ui/Input";
import toast from "react-hot-toast";

const INQUIRY_OPTIONS = [
    { label: "General Inquiry", value: "general" },
    { label: "Booking Request", value: "booking" },
    { label: "Custom Tour Planning", value: "custom" },
    { label: "Partnership", value: "partnership" },
];

import { useSubmitContact } from "@/hooks/queries/use-contact";

export const ContactForm = () => {
    const { mutateAsync: submitContact, isPending } = useSubmitContact();

    const form = useForm({
        defaultValues: {
            fullName: "",
            email: "",
            phone: "",
            inquiryType: "",
            message: "",
        },
    });

    const onSubmit = async (values: any) => {
        await submitContact(values);
        form.reset();
    };

    return (
        <Card className="border-none shadow-sm rounded-sm bg-white overflow-hidden">
            <CardContent className="p-8 space-y-6">
                <h3 className="text-3xl font-bold font-inria text-foreground">Send Us a Message</h3>

                <Form {...form}>
                    <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div className="md:col-span-2">
                                <Input
                                    name="fullName"
                                    label="Your Name *"
                                    placeholder="John Doe"
                                    required
                                    icon={<User className="w-5 h-5" />}
                                />
                            </div>

                            <Input
                                name="email"
                                type="email"
                                label="Email Address *"
                                placeholder="john@example.com"
                                required
                                icon={<Mail className="w-5 h-5" />}
                            />

                            <Input
                                name="phone"
                                type="phone"
                                label="Phone Number (Optional)"
                                placeholder="+32 XXX XXX XXX"
                            />

                            <div className="md:col-span-2">
                                <Input
                                    name="inquiryType"
                                    type="select"
                                    label="Inquiry Type *"
                                    placeholder="Select inquiry type"
                                    selectOptions={INQUIRY_OPTIONS}
                                    required
                                    icon={<ClipboardList className="w-5 h-5" />}
                                />
                            </div>

                            <div className="md:col-span-2">
                                <Input
                                    name="message"
                                    type="textarea"
                                    label="Your Message *"
                                    placeholder="Tell us about your travel plans, questions, or special requests..."
                                    required
                                    rows={5}
                                    icon={<MessageSquare className="w-5 h-5" />}
                                />
                            </div>
                        </div>

                        <Button
                            type="submit"
                            disabled={isPending}
                            loading={isPending}
                            className="w-full"
                        >
                            <Send className="w-4 h-4 mr-4" />
                            Send Message
                        </Button>
                    </form>
                </Form>
            </CardContent>
        </Card>
    );
};
