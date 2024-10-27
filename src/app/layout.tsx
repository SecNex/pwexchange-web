import { Metadata } from 'next';
import { Inter } from 'next/font/google';
import Head from 'next/head';
import './globals.css';
import config from '@/assets/menu.json';
import type { NavbarProps } from '@/components/me/navbar';

import { cn } from '@/lib/utils';

import { Toaster } from "@/components/ui/toaster"
import { Page } from '@/components/page/pages';
import { CookieBanner, CookieMenuButton } from '@/components/cookie/banner';
import { CookiesProvider } from '@/providers/cookies';
import { ThemeProvider } from '@/providers/theme';
import { AnalyticsProvider } from '@/providers/analytics';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
    title: {
        template: '%s | SecNex',
        default: 'SecNex'
    },
    description: 'SecNex is a platform for security professionals, administrators, and developers to maximize their security posture.',
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang='en' className='bg-zinc-50 dark:bg-zinc-95'>
            <body className={cn('bg-zinc-50 dark:bg-zinc-950', inter.className)}>
                <AnalyticsProvider>
                    <ThemeProvider attribute='class' defaultTheme='system' enableSystem disableTransitionOnChange>
                        <CookiesProvider>
                            <Page navbar={config.navigation as NavbarProps}>{children}</Page>
                            <CookieBanner />
                            <CookieMenuButton />
                            <Toaster />
                            {/* <WebsiteStatus status='Online' /> */}
                        </CookiesProvider>
                    </ThemeProvider>
                </AnalyticsProvider>
            </body>
        </html>
    );
}
