import type {Metadata} from "next";
import {Poppins} from "next/font/google";
import {ClerkProvider} from "@clerk/nextjs"

import "./globals.css";
import {cn} from "@/lib/utils";
import React from "react";

const poppins = Poppins({
    weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
    subsets: ["latin"],
});

export const metadata: Metadata = {
    title: "Regionaliza+",
};

export default function RootLayout({ children }: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <ClerkProvider>
            <html lang="en">
            <body className={cn("overflow-x-hidden", poppins.className)}>{children}</body>
            </html>
        </ClerkProvider>
    );
}
