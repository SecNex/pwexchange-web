'use client';

import * as React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';

import { useToast } from "@/components/ui/use-toast"
import { Button } from '@/components/ui/button';
import {
    Dialog,
    DialogClose,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from '@/components/ui/dialog';
import { HomeHero } from '@/components/hero/start';
import { GradientHeader } from '@/components/me/headers';
import { IconArrowUpRight } from '@tabler/icons-react';
import { Input } from '@/components/ui/input';

import { StoreSecret } from '@/services/exchange';
import { Label } from '@/components/ui/label';

type StoreResponse = {
    id: string;
    secret: string;
    expires_at: string;
};

export default function Exchange() {
    const { toast } = useToast();
    const [secret, setSecret] = React.useState('');
    const [processing, setProcessing] = React.useState(false);
    const [response, setResponse] = React.useState<StoreResponse | null>(null)

    const handleExchange = async (secret: string) => {
        try {
            setProcessing(true);
            const response = await StoreSecret({ secret });
            setResponse(response);
            setProcessing(false);
            console.log('The secret has been stored successfully.');
            toast({
                title: 'Secret stored',
                description: 'Your secret has been stored successfully.',
            });
        } catch (error) {
            console.error('The secret could not be stored. Please try again.');
            setProcessing(false);
        }
        setSecret('');
    }

    const handleClear = () => {
        setSecret('');
        setResponse(null);
    }

    const handleCopyLink = (id: string) => {
        navigator.clipboard.writeText(`${window.location.origin}/exchange/${id}`);
        toast({
            title: 'Link copied',
            description: 'The link has been copied to your clipboard.',
        });
    }

    return (
        <>
            <div className='py-10 2xl:px-0 px-5'>
                <div className='flex flex-col space-y-8 max-w-[80em] mx-auto py-5'>
                    <div className='flex flex-col space-y-5'>
                        <h1 className='flex flex-row space-x-2 md:text-3xl text-xl font-light items-center'>
                            Exchange Secrets
                        </h1>
                        <p className='text-sm font-light'>
                            <strong>Share a secret now!</strong> With <strong>AES-256</strong> and two key encryption, your secret is safe with us. We are open-source and transparent. We store your secrets only for 24 hours and not persistently - only in memory. We can&apos;t read your secrets, and we don&apos;t want to. We are here to help you exchange secrets securely.
                        </p>
                    </div>
                    <div className='flex flex-row space-x-5 w-full'>
                        <div className='flex flex-col md:flex-row space-y-5 md:space-y-0 space-x-0 md:space-x-5 d:w-auto w-full'>
                            <Input placeholder='Enter your secret' type='password' id='secret' name='secret' value={secret} onChange={(e) => setSecret(e.target.value)} />
                            <Button variant={'default'} className='mt-2' onClick={() => handleExchange(secret)} disabled={processing}>
                                {processing ? 'Processing' : 'Share secret'}
                            </Button>
                        </div>
                    </div>
                </div>
            </div>
            <Dialog open={response !== null} onOpenChange={() => setResponse(null)}>
                <DialogContent onCloseAutoFocus={() => { handleClear() }} onInteractOutside={() => { handleClear() }} hideClose>
                    <DialogHeader>
                        <DialogTitle className='text-2xl'>Secret stored</DialogTitle>
                        <DialogDescription>
                            Your secret has been stored as successfully. You can share the following secret with your friends, family, and colleagues. Remember, this secret is only available for 24 hours.
                        </DialogDescription>
                        <div className='flex flex-col space-y-5 pt-5'>
                            <div className='flex flex-col space-y-2'>
                                <Label>Secret ID</Label>
                                <Input value={response?.id} readOnly />
                            </div>
                            <div className='flex flex-col space-y-2'>
                                <Label>Encryption key</Label>
                                <Input value={response?.secret} readOnly />
                            </div>
                        </div>
                        <div className='flex flex-col space-y-2 pt-5'>
                            <Button variant={'default'} onClick={() => handleCopyLink(response?.id as string)}>
                                Copy link
                            </Button>
                        </div>
                    </DialogHeader>
                    <DialogClose asChild>
                        <div className='flex justify-end flex-row space-x-3'>
                            <Button variant={'default'} onClick={() => handleClear()}>
                                Close
                            </Button>
                        </div>
                    </DialogClose>
                </DialogContent>
            </Dialog>
        </>
    );
}