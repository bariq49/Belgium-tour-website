"use client";
import React from "react";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import { usePathname } from "next/navigation";

const DashboardLayout = ({ children }: { children: React.ReactNode }) => {
    const location = usePathname();
    return (
        <div className="min-h-screen bg-gray-100 font-roboto">
            <div className="page-min-height-semibox px-4 pb-8 pt-6 sm:pt-8 xl:pt-10">
                <div className="semibox-content-wrapper">
                    <LayoutWrapper
                        location={location}
                    >
                        {children}
                    </LayoutWrapper>
                </div>
            </div>
        </div>
    );
};

export default DashboardLayout;

const LayoutWrapper = ({
    children,
    location
}: {
    children: React.ReactNode,
    location: string
}) => {
    return (
        <motion.div
            key={location}
            initial="pageInitial"
            animate="pageAnimate"
            exit="pageExit"
            variants={{
                pageInitial: {
                    opacity: 0,
                    y: 50,
                },
                pageAnimate: {
                    opacity: 1,
                    y: 0,
                },
                pageExit: {
                    opacity: 0,
                    y: -50,
                },
            }}
            transition={{
                type: "tween",
                ease: "easeInOut",
                duration: 0.5,
            }}
        >
            <main>{children}</main>
        </motion.div>
    );
};
