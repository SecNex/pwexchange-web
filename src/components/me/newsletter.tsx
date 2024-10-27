'use client';

import * as React from "react";

import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

import { NewsletterOTP } from '@/components/me/otp';
import { title } from "process";

export const NewsletterFooter = () => {
    const [email, setEmail] = React.useState('');

    const handleEmail = (e: React.ChangeEvent<HTMLInputElement>) => {
        setEmail(e.target.value);
    } 

    return (
        <div className="flex flex-col space-y-3 md:col-span-2 md:pr-10">
            <h1 className="text-xl font-semibold">Subscribe to our newsletter</h1>
            <p className="text-xs font-light text-zinc-600 dark:text-zinc-300">
                Stay updated with the latest news and updates from SecNex.
            </p>
            <div className="flex lg:flex-row lg:space-x-3 flex-col lg:space-y-0 space-y-3">
                <Input placeholder="Enter your email" type="email" id="email" value={email} onChange={handleEmail} />
                <NewsletterOTP email={email} />
            </div>
        </div>
    );
};
