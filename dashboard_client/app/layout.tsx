"use client";

import { fonts } from './fonts';
import { Providers } from './providers';
import './globals.css';
import { usePathname } from "next/navigation"
import {disableNavWithFooter} from "@/app/utils/disableNavWithFooter";
import Layout from "@/app/components/NavBar/Layout";
export default function RootLayout({ children }: { children: React.ReactNode }) {
    const path = usePathname()
    return (
        <html lang='en' className={fonts.rubik.variable}>
        <body>
        <Providers>
            {!disableNavWithFooter.includes(path) && (
                <Layout/>
            )}
                    {children}
        </Providers>
        </body>
        </html>
    );
}
