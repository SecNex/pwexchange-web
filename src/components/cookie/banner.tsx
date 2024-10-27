'use client';

import React, { useContext } from 'react';
import { CookiesContext } from '@/providers/cookies';

import { IconCookie, IconEdit, IconX } from '@tabler/icons-react';

import { Button } from '@/components/ui/button';
import { Logo } from '@/components/me/logo';

type CookiePreferences = {
    nessessary: boolean;
    analytics: boolean;
    statistics: boolean;
    marketing: boolean;
    thirdParty: boolean;
}

export const CookieBanner = () => {
    const { showBanner, acceptCookies, toggleBanner } = useContext(CookiesContext);
    const [showPreferences, setShowPreferences] = React.useState(false);
    const [cookiePreferences, setCookiePreferences] = React.useState<CookiePreferences>({
        nessessary: true,
        analytics: false,
        statistics: false,
        marketing: false,
        thirdParty: false
    });

    if (!showBanner) {
        return null;
    }

    return (
        <div className='fixed top-0 left-0 right-0 w-full min-h-screen bg-zinc-900 bg-opacity-80 backdrop-blur-lg z-50 flex justify-center items-center p-5'>
            <div className='relative inline-flex group flex-col bg-zinc-50 dark:bg-zinc-50 text-zinc-950 dark:text-zinc-50 max-w-[40em] w-full mx-auto rounded-xl border border-zinc-950'>
                <div className='absolute -inset-[2px] rounded-xl bg-gradient-to-r from-rose-400 via-fuchsia-500 to-indigo-500 opacity-100 blur transition duration-1000'></div>
                <div className='z-10 -inset-[1px] rounded-xl absolute bg-gradient-to-r from-rose-400 via-fuchsia-500 to-indigo-500 opacity-100 transition duration-1000 bg-clip-border'></div>
                <div className='flex flex-col w-full z-20 bg-zinc-50 rounded-xl'>
                    <div className='flex flex-col space-y-3 rounded-t-xl p-6 px-10 pb-10 text-zinc-50 dark:text-zinc-50 bg-zinc-900 dark:bg-zinc-950'>
                        <h1 className='text-xl'>
                            <Logo />
                        </h1>
                        <p className='text-md font-semibold'>
                            {
                                showPreferences ? (
                                    <span>
                                        Manage your cookie preferences
                                    </span>
                                ) : (
                                    <span>
                                        Are you okay with cookies?
                                    </span>
                                )
                            }
                        </p>
                    </div>
                    <div className='px-10 pt-8 pb-5'>
                        <p className='text-xs text-zinc-700'>
                            We use cookies to improve your experience on our site. By clicking accept, you agree to our use of cookies.
                        </p>
                    </div>
                    {showPreferences && (
                        <div className='px-10 text-zinc-700 pb-5'>
                            Test
                        </div>
                    )}
                    <div className='flex flex-col md:flex-row md:space-x-4 md:space-y-0 space-y-3 w-full pb-8 px-10'>
                        <Button variant={'outline'} className='flex-1 bg-transparent text-zinc-900 hover:text-zinc-900 border-zinc-200 hover:bg-zinc-100' onClick={() => setShowPreferences(!showPreferences)}>
                            <IconEdit size={18} className='mr-2' />
                            {showPreferences ? 'Back' : 'Preferences'}
                        </Button>
                        <Button variant={'default'} className='flex-1 bg-zinc-900 text-zinc-50 hover:bg-zinc-800' onClick={acceptCookies}>
                            Accept
                        </Button>
                    </div>
                    <div className='absolute top-5 right-5'>
                        <Button variant={'none'} size={'iconMini'} className='text-zinc-50' onClick={toggleBanner}>
                            <IconX size={20} />
                        </Button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export const CookieMenuButton = () => {
    const { showBanner, toggleBanner } = useContext(CookiesContext);

    if (showBanner) {
        return null;
    }

    return (
        <div className='z-30 fixed bottom-8 left-8'>
            <div className='relative inline-flex group'>
                <div className='absolute -inset-[2px] rounded-full bg-gradient-to-r from-rose-400 via-fuchsia-500 to-indigo-500 opacity-0 blur transition duration-1000 md:group-hover:opacity-100 group-focus-visible:opactiy-100'></div>
                <div className='z-40 -inset-[1px] rounded-full absolute bg-gradient-to-r from-rose-400 via-fuchsia-500 to-indigo-500 opacity-0 transition duration-1000 md:group-hover:opacity-100 group-focus-visible:opactiy-100 focus:border md:hover:border bg-clip-border'></div>
                <Button variant={'none'} className='flex w-10 h-10 z-50 border border-zinc-200 dark:border-zinc-800 bg-zinc-100 dark:bg-zinc-900 rounded-full items-center justify-center p-2' onClick={toggleBanner}>
                    <IconCookie size={20} className='text-zinc-800 dark:text-zinc-300' />
                </Button>
            </div>
        </div>
    )
}