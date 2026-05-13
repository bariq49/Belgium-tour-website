import React from "react";
import { cn } from "@/lib/utils";

interface PageBannerProps {
    title: string;
    description?: string;
    className?: string;
}

export const PageBanner = ({
    title,
    description,
    className,
}: PageBannerProps) => {
    return (
        <section
            className={cn(
                "w-full bg-[#7D3C1F] py-16 md:py-24 flex items-center justify-center text-center px-4",
                className
            )}
        >
            <div className="max-w-4xl mx-auto space-y-4">
                <h1 className="text-white text-3xl md:text-5xl lg:text-6xl font-inria leading-tight">
                    {title}
                </h1>
                {description && (
                    <p className="text-white/80 text-sm md:text-base max-w-2xl mx-auto font-roboto font-light leading-relaxed">
                        {description}
                    </p>
                )}
            </div>
        </section>
    );
};
