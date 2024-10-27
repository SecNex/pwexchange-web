import Link from 'next/link';

import { Logo } from '@/components/me/logo';
import { NewsletterFooter } from '@/components/me/newsletter';

import { IconBrandInstagram, IconBrandTiktok, IconBrandX, IconBrandGithub } from '@tabler/icons-react';

export const Copyright = () => {
    return (
        <div className='flex flex-col md:flex-row md:space-y-0 md:space-x-5 space-y-5 w-full max-w-[80em] mx-auto px-5 md:justify-between dark:text-zinc-200'>
            <p className='text-xs'>&copy; 2024 by SecNex. All rights reserved.</p>
            <div className='flex flex-row md:space-x-5 sm:space-x-5 space-x-3 text-xs'>
                <Link href='/privacy' className='hover:text-zinc-800 dark:hover:text-zinc-200 hover:underline-offset-4 hover:underline transition-all duration-500'>Privacy Policy</Link>
                <Link href='/terms' className='hover:text-zinc-800 dark:hover:text-zinc-200 hover:underline-offset-4 hover:underline transition-all duration-500'>Terms of Service</Link>
                <Link href='/legal/cookie-policy' className='hover:text-zinc-800 dark:hover:text-zinc-200 hover:underline-offset-4 hover:underline transition-all duration-500'>Cookie Policy</Link>
                <Link href='/legal/imprint' className='hover:text-zinc-800 dark:hover:text-zinc-200 hover:underline-offset-4 hover:underline transition-all duration-500'>Imprint</Link>
                <Link href='/contact' className='hover:text-zinc-800 dark:hover:text-zinc-200 hover:underline-offset-4 hover:underline transition-all duration-500'>Contact</Link>
            </div>
        </div>
    )
}

export const SocialMedia = () => {
    return (
        <div className='flex flex-row space-x-5 w-full max-w-[80em] mx-auto px-5'>
            <Link href='https://instagram.com/secnex.io'>
                <IconBrandInstagram size={20} />
            </Link>
            <Link href='https://tiktok.com/@secnex.io'>
                <IconBrandTiktok size={20} />
            </Link>
            <Link href='https://x.com/secnex_io'>
                <IconBrandX size={20} />
            </Link>
            <Link href='https://github.com/SecNex'>
                <IconBrandGithub size={20} />
            </Link>
        </div>
    )
}

export const Footer = () => {
    return (
        <div className='flex flex-col w-full dark:bg-zinc-950 pt-10'>
            <div className='flex w-full max-w-[80em] mx-auto px-5 pt-10'>
                <div className='flex flex-col space-y-5 md:grid md:grid-cols-5 md:gap-5 md:space-y-0 w-full'>
                    <NewsletterFooter />
                    <div className='flex flex-col space-y-4 md:space-y-5 text-zinc-600 dark:text-zinc-300'>
                        <h1 className='text-lg font-semibold'>
                            About us
                        </h1>
                        <div className='flex flex-col space-y-3 text-xs font-light'>
                            <Link href='/about' className='hover:text-zinc-800 dark:hover:text-zinc-200 hover:underline-offset-4 hover:underline transition-all duration-500'>About</Link>
                            <Link href='/story' className='hover:text-zinc-800 dark:hover:text-zinc-200 hover:underline-offset-4 hover:underline transition-all duration-500'>Our Story</Link>
                            <Link href='/blog' className='hover:text-zinc-800 dark:hover:text-zinc-200 hover:underline-offset-4 hover:underline transition-all duration-500'>Blog</Link>
                            <Link href='/contact' className='hover:text-zinc-800 dark:hover:text-zinc-200 hover:underline-offset-4 hover:underline transition-all duration-500'>Contact</Link>
                        </div>
                    </div>
                    <div className='flex flex-col space-y-4 md:space-y-5'>
                        <h1 className='text-lg font-semibold'>
                            <Link href='/solutions'>Solutions</Link>
                        </h1>
                        <div className='flex flex-col space-y-3 text-xs font-light'>
                            <Link href='/solutions/infrastructure' className='hover:text-zinc-800 dark:hover:text-zinc-200 hover:underline-offset-4 hover:underline transition-all duration-500'>Infrastructure</Link>
                            <Link href='/solutions/monitoring' className='hover:text-zinc-800 dark:hover:text-zinc-200 hover:underline-offset-4 hover:underline transition-all duration-500'>Monitoring</Link>
                            <Link href='/solutions/security' className='hover:text-zinc-800 dark:hover:text-zinc-200 hover:underline-offset-4 hover:underline transition-all duration-500'>Security</Link>
                            <Link href='/solutions/automation' className='hover:text-zinc-800 dark:hover:text-zinc-200 hover:underline-offset-4 hover:underline transition-all duration-500'>Automation</Link>
                            <Link href='/solutions/digitalsignage' className='hover:text-zinc-800 dark:hover:text-zinc-200 hover:underline-offset-4 hover:underline transition-all duration-500'>Digital Signage (EdgeSight)</Link>
                        </div>
                    </div>
                    <div className='flex flex-col space-y-4 md:space-y-5'>
                        <h1 className='text-lg font-semibold'>
                            <Link href='/pricing'>Resources</Link>
                        </h1>
                        <div className='flex flex-col space-y-3 text-xs font-light'>
                            <Link href='/pricing' className='hover:text-zinc-800 dark:hover:text-zinc-200 hover:underline-offset-4 hover:underline transition-all duration-500'>Pricing</Link>
                            <Link href='/docs' className='hover:text-zinc-800 dark:hover:text-zinc-200 hover:underline-offset-4 hover:underline transition-all duration-500'>Documentation</Link>
                            <Link href='/api' className='hover:text-zinc-800 dark:hover:text-zinc-200 hover:underline-offset-4 hover:underline transition-all duration-500'>API</Link>
                            <Link href='/status' className='hover:text-zinc-800 dark:hover:text-zinc-200 hover:underline-offset-4 hover:underline transition-all duration-500'>Status</Link>
                            <Link href='/blog' className='hover:text-zinc-800 dark:hover:text-zinc-200 hover:underline-offset-4 hover:underline transition-all duration-500'>Blog</Link>
                        </div>
                    </div>
                    <div className='flex flex-row space-x-4 col-span-5 md:col-span-1'>
                        <div className='flex flex-col'>
                            <Logo />
                        </div>
                    </div>
                </div>
            </div>
            <div className='flex flex-col space-y-10 py-10'>
                <SocialMedia />
                <Copyright />
            </div>
        </div>
    )
}