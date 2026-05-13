import React from "react";
import Link from "next/link";

export const InvalidAccessNotice = () => (
    <div className="min-h-[60vh] flex items-center justify-center p-4">
        <div className="bg-red-50 p-6 rounded-2xl text-center max-w-md border border-red-100">
            <h1 className="text-2xl font-bold text-red-600 mb-2">Invalid Access</h1>
            <p className="text-gray-600 mb-6">
                We couldn&apos;t find an order number for this session.
            </p>
            <Link
                href="/"
                className="inline-flex items-center gap-2 bg-primary text-white px-6 py-3 rounded-xl font-bold hover:bg-primary/90 transition-all"
            >
                Return Home
            </Link>
        </div>
    </div>
);
