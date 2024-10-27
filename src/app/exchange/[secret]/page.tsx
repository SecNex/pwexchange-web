'use client';

import * as React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import { useRouter } from 'next/navigation';

import { useToast } from "@/components/ui/use-toast"
import { Button } from '@/components/ui/button';
import { Toggle } from '@/components/ui/toggle';
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
import { IconEye, IconEyeClosed } from '@tabler/icons-react';
import { Input } from '@/components/ui/input';

import { StoreSecret, GetSecret } from '@/services/exchange';
import { Loadable } from 'next/dist/server/future/route-modules/app-page/vendored/contexts/entrypoints';
import { Label } from '@/components/ui/label';

type DecryptResponse = {
    password: string;
}

type ExchangeProps = {
    params: {
        secret: string;
    };
};

export default function Exchange({ params }: ExchangeProps) {
    const router = useRouter();
    const { toast } = useToast();
    const [secret, setSecret] = React.useState('');
    const [processing, setProcessing] = React.useState(false);
    const [response, setResponse] = React.useState<DecryptResponse | null>(null);
    const [inputType, setInputType] = React.useState('password');

    const handleEncryption = async ({ id, secretKey }: { id: string; secretKey: string }) => {
        try {
            setProcessing(true);
            const response = await GetSecret({ id, secretKey });
            setResponse(response);
            setProcessing(false);
            console.log('The secret has been decrypted successfully.');
            toast({
                title: 'Secret decrypted',
                description: 'Your secret has been decrypted successfully.',
            });
        }
        catch (error) {
            console.error('The secret could not be decrypted. Please try again.');
            toast({
                title: 'Secret decryption failed',
                description: 'The secret could not be decrypted. Please try again.',
            });
            setProcessing(false);
            setResponse(null);
        }
        setSecret('');
    }

    const handleRefresh = () => {
        router.refresh();
    }

    const handleCopySecret = (id: string) => {
        navigator.clipboard.writeText(response?.password as string);
        toast({
            title: 'Secret copied',
            description: 'The secret has been copied to your clipboard.',
        });
    }

    return (
        <>
            <div className='py-10 2xl:px-0 px-5'>
                <div className='flex flex-col space-y-8 max-w-[80em] mx-auto py-5'>
                    <div className='flex flex-col space-y-5'>
                        <h1 className='flex flex-row space-x-2 md:text-3xl text-xl font-light items-center'>
                            Show your encrypted secret
                        </h1>
                        <p className='text-sm font-light'>
                            <strong>Share a secret now!</strong> With <strong>AES-256</strong> and two key encryption, your secret is safe with us. We are open-source and transparent. We store your secrets only for 24 hours and not persistently - only in memory. We can&apos;t read your secrets, and we don&apos;t want to. We are here to help you exchange secrets securely.
                        </p>
                    </div>
                    <div className='flex flex-col space-y-5'>
                        <div className='flex flex-col md:flex-row space-y-5 md:space-y-0 space-x-0 md:space-x-5 d:w-auto w-full'>
                            <Input placeholder='Enter your secret' type='password' id='secret' name='secret' value={secret} onChange={(e) => setSecret(e.target.value)} />
                            <Button variant={'default'} className='mt-2' onClick={() => handleEncryption({ secretKey: secret, id: params.secret })} disabled={processing}>
                                {processing ? 'Processing' : 'Decrypt secret'}
                            </Button>
                        </div>
                    </div>
                </div>
            </div>
            <Dialog open={response !== null} onOpenChange={() => setResponse(null)}>
                <DialogContent onCloseAutoFocus={() => { handleRefresh() }} onInteractOutside={() => { handleRefresh() }} hideClose>
                    <DialogHeader>
                        <DialogTitle className='text-2xl'>Your secret has been decrypted</DialogTitle>
                        <DialogDescription>
                            Your secret has been stored as successfully. You can share the following secret with your friends, family, and colleagues. Remember, this secret is only available for 24 hours.
                        </DialogDescription>
                        <div className='flex flex-col space-y-5 pt-5'>
                            <div className='flex flex-col space-y-2'>
                                <Label>Encryption key</Label>
                                <div className='flex flex-row space-x-2'>
                                    <Input type={inputType} id='secret' name='secret' value={response?.password} onChange={(e) => setSecret(e.target.value)} readOnly />
                                    <Toggle onClick={() => setInputType(inputType === 'password' ? 'text' : 'password')}>
                                        {inputType === 'password' ? <IconEye size={20} /> : <IconEyeClosed size={20} />}
                                    </Toggle>
                                </div>
                            </div>
                        </div>
                        <div className='flex flex-col space-y-2 pt-5'>
                            <Button variant={'default'} onClick={() => handleCopySecret(params.secret)}>
                                Copy link
                            </Button>
                        </div>
                    </DialogHeader>
                    <DialogClose asChild>
                        {/* <div className='flex justify-end flex-row space-x-3'>
                            <Button variant={'default'} onClick={() => handleClear()}>
                                Close
                            </Button>
                        </div> */}
                    </DialogClose>
                </DialogContent>
            </Dialog>
        </>
    );
}