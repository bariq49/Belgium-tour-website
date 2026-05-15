"use client";

import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useAuthMe, useAuthActivities, useAuthLogoutAllDevices } from "@/hooks/queries/use-auth";
import ProfileForm from "@/components/forms/profile/profile-form";
import PasswordForm from "@/components/forms/profile/password-form";
import { User, Lock, ShieldCheck, BadgeCheck, Settings2, History, Monitor, Smartphone, LogOut, Trash2 } from "lucide-react";
import { cn, formatDate } from "@/lib/utils";
import { Button } from "@/components/ui/button";

const ProfilePage = () => {
    const [activeTab, setActiveTab] = React.useState("profile");
    const [visibleActivities, setVisibleActivities] = React.useState(3);
    const { data: userData, isLoading } = useAuthMe();
    const { data: activitiesData } = useAuthActivities();
    const { mutate: logoutAll, isPending: isLoggingOutAll } = useAuthLogoutAllDevices();

    const admin = userData?.data?.user;
    const activities = activitiesData?.data || [];

    const getActivityIcon = (type: string) => {
        switch (type) {
            case "login": return <div className="p-1.5 bg-emerald-50 rounded-md text-emerald-600"><Lock size={14} /></div>;
            case "logout": return <div className="p-1.5 bg-gray-100 rounded-md text-paragraph"><LogOut size={14} /></div>;
            case "password_change": return <div className="p-1.5 bg-primary/10 rounded-md text-primary"><ShieldCheck size={14} /></div>;
            case "update_profile": return <div className="p-1.5 bg-blue-50 rounded-md text-blue-600"><Settings2 size={14} /></div>;
            default: return <div className="p-1.5 bg-gray-100 rounded-md text-paragraph"><History size={14} /></div>;
        }
    };

    return (
        <div className="min-h-screen pb-20 font-roboto">
            {/* Premium Header */}
            <div className="relative bg-black pt-16 pb-32 overflow-hidden rounded-t-md">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,var(--primary),transparent)] opacity-20" />
                <div className="absolute inset-0 bg-gradient-to-b from-transparent to-[#0a0504]/50" />
                <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-primary/20 rounded-full blur-[120px] opacity-50" />

                <div className="container mx-auto px-6 relative z-10">
                    <div className="flex flex-col md:flex-row md:items-end justify-between gap-8">
                        <div className="space-y-2">
                            <h1 className="text-4xl font-black tracking-tight text-white mb-3">
                                Account Settings
                            </h1>
                            <p className="text-gray-300/80 text-lg font-medium max-w-xl leading-relaxed">
                                Manage your personal identity, security preferences, and monitor your account activity across all platforms.
                            </p>
                        </div>

                    </div>
                </div>
            </div>

            <div className="container mx-auto px-4 sm:px-6 -mt-16 relative z-20">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
                    {/* Floating Navigation Sidebar */}
                    <div className="lg:col-span-3 space-y-6 lg:sticky lg:top-8">
                        <Card className="border-0 shadow-2xl shadow-slate-200/60 rounded-md overflow-hidden p-1.5 bg-white">
                            <nav className="flex lg:flex-col gap-1 overflow-x-auto lg:overflow-x-visible no-scrollbar pb-1 lg:pb-0">
                                {[
                                    { id: "profile", label: "Profile Details", icon: User, desc: "Personal information" },
                                    { id: "security", label: "Login & Security", icon: Lock, desc: "Passwords & sessions" },
                                    { id: "activities", label: "Security Log", icon: History, desc: "Recent account activity" },
                                ].map((tab) => (
                                    <button
                                        key={tab.id}
                                        onClick={() => setActiveTab(tab.id)}
                                        className={cn(
                                            "group flex items-center gap-3 sm:gap-4 px-3 py-2.5 sm:py-3 rounded-md transition-all duration-300 text-left cursor-pointer whitespace-nowrap shrink-0",
                                            activeTab === tab.id
                                                ? "bg-primary text-white shadow-lg shadow-primary/20"
                                                : "text-paragraph hover:bg-gray-50 hover:text-foreground"
                                        )}
                                    >
                                        <div className={cn(
                                            "h-9 w-9 rounded-md flex items-center justify-center transition-all duration-300",
                                            activeTab === tab.id ? "bg-white/10 text-white" : "bg-gray-50 text-gray-400 group-hover:bg-white group-hover:text-primary group-hover:shadow-sm"
                                        )}>
                                            <tab.icon size={18} />
                                        </div>
                                        <div>
                                            <p className="font-bold text-sm sm:text-base leading-tight">{tab.label}</p>
                                            <p className={cn(
                                                "text-[10px] sm:text-sm font-medium leading-tight mt-0.5 hidden sm:block",
                                                activeTab === tab.id ? "text-gray-400" : "text-gray-400 group-hover:text-paragraph"
                                            )}>{tab.desc}</p>
                                        </div>
                                    </button>
                                ))}
                            </nav>
                        </Card>

                        {/* Logout Section */}
                        <Card className="border-0 shadow-2xl shadow-slate-200/60 rounded-md overflow-hidden bg-white p-5">
                            <div className="flex items-center gap-3 mb-4">
                                <div className="h-10 w-10 rounded-md bg-red-50 flex items-center justify-center text-red-500">
                                    <LogOut size={20} />
                                </div>
                                <h4 className="font-bold text-foreground text-base">Session Control</h4>
                            </div>
                            <p className="text-sm text-paragraph font-medium mb-6">
                                Log out from all other active devices if you notice any suspicious activity.
                            </p>
                            <Button
                                onClick={() => logoutAll()}
                                disabled={isLoggingOutAll}
                                className="w-full"
                            >
                                <Trash2 size={14} className="mr-2" />
                                Terminate Sessions
                            </Button>
                        </Card>
                    </div>

                    {/* Main Content Area */}
                    <div className="lg:col-span-9 animate-in fade-in slide-in-from-right-4 duration-500">
                        <Card className="border-0 shadow-2xl shadow-slate-200/60 rounded-md overflow-hidden bg-white">
                            <CardContent className="p-6 md:p-8">
                                {activeTab === "profile" && (
                                    <div className="space-y-8">
                                        <div className="flex items-center gap-4 pb-6 border-b border-gray-200">
                                            <div className="h-12 w-12 rounded-md bg-primary/10 flex items-center justify-center text-primary">
                                                <User size={24} />
                                            </div>
                                            <div>
                                                <h2 className="text-2xl font-black text-foreground">Personal Information</h2>
                                                <p className="text-sm text-paragraph font-medium">Update your profile data and account preferences.</p>
                                            </div>
                                        </div>
                                        <ProfileForm defaultValues={admin} isLoading={isLoading} />
                                    </div>
                                )}

                                {activeTab === "security" && (
                                    <div className="space-y-8">
                                        <div className="flex items-center gap-4 pb-6 border-b border-gray-200">
                                            <div className="h-12 w-12 rounded-md bg-emerald-50 flex items-center justify-center text-emerald-500">
                                                <Lock size={24} />
                                            </div>
                                            <div>
                                                <h2 className="text-2xl font-black text-foreground">Login & Password</h2>
                                                <p className="text-sm text-paragraph font-medium">Change your password and manage authentication settings.</p>
                                            </div>
                                        </div>
                                        <PasswordForm />
                                    </div>
                                )}

                                {activeTab === "activities" && (
                                    <div className="space-y-8">
                                        <div className="flex items-center gap-4 pb-6 border-b border-gray-200">
                                            <div className="h-12 w-12 rounded-md bg-blue-50 flex items-center justify-center text-blue-500">
                                                <History size={24} />
                                            </div>
                                            <div>
                                                <h2 className="text-2xl font-black text-foreground">Security Audit Log</h2>
                                                <p className="text-sm text-paragraph font-medium">Detailed history of recent actions on your account.</p>
                                            </div>
                                        </div>

                                        <div className="space-y-3">
                                            {activities.slice(0, visibleActivities).map((activity: any) => (
                                                <div key={activity._id} className="group relative flex gap-4 items-center p-4 rounded-md border border-gray-100 hover:border-primary/10 hover:bg-gray-50/50 transition-all duration-300">
                                                    <div className="shrink-0">
                                                        {getActivityIcon(activity.type)}
                                                    </div>
                                                    <div className="flex-1 flex flex-col md:flex-row md:items-center justify-between gap-4">
                                                        <div className="space-y-1">
                                                            <div className="flex items-center gap-2">
                                                                <h5 className="font-bold text-foreground text-base capitalize">
                                                                    {activity.type.replace(/_/g, " ")}
                                                                </h5>
                                                                <span className={cn(
                                                                    "text-[10px] font-black uppercase tracking-tight px-2 py-0.5 rounded-sm",
                                                                    activity.status === "success" ? "bg-emerald-50 text-emerald-600 border border-emerald-100" : "bg-red-50 text-red-600 border border-red-100"
                                                                )}>
                                                                    {activity.status || "success"}
                                                                </span>
                                                            </div>
                                                            <p className="text-xs font-medium text-gray-400">
                                                                {activity.timestamp ? formatDate(activity.timestamp, "MMM dd, h:mm a") : "Just now"}
                                                            </p>
                                                        </div>

                                                        <div className="flex items-center gap-3">
                                                            <div className="flex items-center gap-2 px-3 py-1.5 rounded-md bg-gray-50 border border-gray-100">
                                                                <Monitor size={12} className="text-gray-400" />
                                                                <span className="text-xs font-bold text-slate-600">{activity.browser || "Chrome"}</span>
                                                                <span className="text-xs font-bold text-slate-600 opacity-40">{activity.os || "OS"}</span>
                                                            </div>
                                                            <div className="flex items-center gap-2 px-3 py-1.5 rounded-md bg-gray-50 border border-gray-100">
                                                                <div className="h-1.5 w-1.5 rounded-full bg-emerald-500" />
                                                                <span className="text-xs font-bold text-slate-600">IP: {activity.ipAddress === "::1" ? "127.0.0.1" : activity.ipAddress}</span>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            ))}

                                            {activities.length === 0 && (
                                                <div className="text-center py-20">
                                                    <div className="h-24 w-24 bg-gray-50 rounded-full flex items-center justify-center mx-auto mb-6">
                                                        <History size={40} className="text-slate-200" />
                                                    </div>
                                                    <h3 className="text-2xl font-black text-foreground mb-2">No History Recorded</h3>
                                                    <p className="text-paragraph text-base font-medium max-w-sm mx-auto">Your account is fresh! Activities will start appearing here as you use the platform.</p>
                                                </div>
                                            )}

                                            {activities.length > visibleActivities && (
                                                <div className="pt-6 flex justify-center border-t border-gray-100">
                                                    <Button
                                                        variant="outline"
                                                        onClick={() => setVisibleActivities(prev => prev + 5)}
                                                        className="w-full md:w-auto px-10 h-11 text-xs font-black uppercase tracking-widest"
                                                    >
                                                        Load More Activities
                                                    </Button>
                                                </div>
                                            )}
                                        </div>
                                    </div>
                                )}
                            </CardContent>
                        </Card>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProfilePage;

