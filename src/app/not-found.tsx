'use client';

import * as React from 'react';

import { useRouter } from 'next/navigation';

import { GradientHeader } from '@/components/me/headers';
import { Button } from '@/components/ui/button';
export default function NotFound() {
    const router = useRouter();
    return (
        <div className='flex w-full p-10 py-[100px] items-center justify-center'>
            <div className='flex flex-col space-y-5 justify-center text-center'>
                <span className='text-xs font-light text-zinc-600 dark:text-zinc-200'>404 - Not Found</span>
                <div className='flex flex-row space-x-2 items-center justify-center'>
                    <span className='text-5xl lg:text-7xl'>🫠</span>
                    <GradientHeader title='Oops!' className='text-5xl lg:text-7xl' />
                </div>
                <p className='text-md font-light text-zinc-600 dark:text-zinc-200'>The page you&apos;re looking for doesn&apos;t exist. But you can find plenty of other things on our homepage.</p>
                <p className='text-xs font-light text-zinc-600 dark:text-zinc-200'>If you think this is a mistake, please contact us.</p> 
                <div className='flex flex-row space-x-3 py-5 justify-center'>
                    <Button variant='default' className='' onClick={() => router.push('/')}>Go Home</Button>
                    <Button variant='outline' className='' onClick={() => router.back()}>Go Back</Button>
                </div>
            </div>
        </div>
    );
}