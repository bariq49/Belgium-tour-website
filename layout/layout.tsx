'use client';

import { Footer } from "@/layout/footer/footer";
import Header from "./header/Header";

export default function DefaultLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <div className="flex flex-col min-h-screen">
            <Header />
            <main
                className="relative"
                style={{
                    WebkitOverflowScrolling: 'touch',
                }}
            >
                {children}
                <Footer />
            </main>
        </div>
    );
}
