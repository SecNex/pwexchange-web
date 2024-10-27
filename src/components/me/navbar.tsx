'use client';

import * as React from 'react';

import Link from 'next/link';
import { useRouter } from 'next/navigation';

import { cn } from '@/lib/utils';

import { IconMenu2, IconX } from '@tabler/icons-react';

import { ModeToggle } from '@/components/me/theme';
import { Logo } from '@/components/me/logo';
import { Button } from '@/components/ui/button';
import { Toggle } from '@/components/ui/toggle';
import {
    NavigationMenu,
    NavigationMenuContent,
    NavigationMenuIndicator,
    NavigationMenuItem,
    NavigationMenuLink,
    NavigationMenuList,
    NavigationMenuTrigger,
    NavigationMenuViewport,
} from '@/components/ui/navigation-menu';

export type CallToActionProps = {
    icon?: React.ReactNode;
    text: string;
    href: string;
    variant?:
    | 'default'
    | 'outline'
    | 'outlineSecondary'
    | 'callToAction'
    | 'none';
    show?: boolean;
    className?: string;
};

export type NavbarItem = {
    title: string;
    href: string;
};

export type NavbarProps = {
    showCallToAction?: boolean;
    themeToggle?: boolean;
};

export const CallToAction = (props: CallToActionProps) => {
    return (
        <Button variant={props.variant} className={props.className}>
            <Link href={props.href} className='flex flex-row space-x-2'>
                {props.icon}
                <span
                    className={cn('hidden md:block', props.show ? 'block' : 'hidden')}
                >
                    {props.text}
                </span>
            </Link>
        </Button>
    );
};

export const Navbar = (props: NavbarProps) => {
    const router = useRouter();
    const [open, setOpen] = React.useState(false);
    const [loggedIn, setLoggedIn] = React.useState(false);
    const close = (href: string) => {
        setOpen(false);
    }

    return (
        <>
            <div className='fixed flex w-full max-h-[70px] items-center px-5 bg-zinc-50 dark:bg-zinc-950 border-b border-zinc-200 dark:border-zinc-800 md:bg-opacity-60 backdrop-blur-md z-50'>
                <div className='flex flex-row space-x-5 w-full max-w-[80em] mx-auto justify-between items-center'>
                    <div className={cn()}>
                        <Logo href='/' />
                    </div>
                    <div className='hidden md:flex flex-row space-x-6 w-full text-sm px-5 text-zinc-600 hover:text-zinc-700 dark:text-zinc-300 dark:hover:text-zinc-200 translation-all'>
                        {/* <NavigationMenu>
                            <NavigationMenuList>
                                <NavigationMenuItem>
                                    <NavigationMenuTrigger className='bg-transparent'>
                                        Solutions
                                    </NavigationMenuTrigger>
                                    <NavigationMenuContent className='p-2'>
                                        <ul className='flex flex-col space-y-2 w-[400px]'>
                                            <li className='h-10 px-4 py-2'>
                                                <NavigationMenuLink asChild>
                                                    <Link href='/solutions/edgesight' className='flex w-full'>EdgeSight</Link>
                                                </NavigationMenuLink>
                                            </li>
                                            <li className='h-10 px-4 py-2'>
                                                <NavigationMenuLink asChild>
                                                    <Link href='/solutions/powerplatform' className='flex w-full'>Power Platform Solutions</Link>
                                                </NavigationMenuLink>
                                            </li>
                                            <li className='h-10 px-4 py-2'>
                                                <NavigationMenuLink asChild>
                                                    <Link href='/solutions/azure' className='flex w-full'>Identity Access Management</Link>
                                                </NavigationMenuLink>
                                            </li>
                                        </ul>
                                    </NavigationMenuContent>
                                </NavigationMenuItem>
                            </NavigationMenuList>
                        </NavigationMenu> */}
                    </div>
                    <div className='flex flex-row space-x-3 items-center'>
                        <div className='flex flex-row space-x-3'>
                            <CallToAction
                                text='Login'
                                href='/login'
                                variant='callToAction'
                                className='h-[35px]'
                                show
                            />
                        </div>
                        {props.themeToggle && <ModeToggle />}
                        <div className='md:hidden'>
                            <Toggle
                                pressed={open}
                                onPressedChange={setOpen}
                                variant={'navbar'}
                                size={'navbar'}
                            >
                                {open ? <IconX size={20} /> : <IconMenu2 size={20} />}
                            </Toggle>
                        </div>
                    </div>
                </div>
            </div>
            {open && (
                <div className='fixed top-0 left-0 right-0 w-full min-h-screen bg-zinc-50 dark:bg-zinc-950 text-zinc-900 dark:text-zinc-50 z-30 pt-[90px] p-6 py-10'>
                    <div className='flex flex-col space-y-10 w-full max-w-[90em] mx-auto'>
                        <div className='flex flex-col space-y-7'>
                        </div>
                        <div className='flex flex-col space-y-4'>
                            <CallToAction
                                text='Get Started'
                                href='/signup'
                                variant='callToAction'
                                className='w-full h-[50px]'
                                show
                            />
                        </div>
                    </div>
                </div>
            )}
        </>
    );
};
