'use client';

import * as React from 'react';
import { useToast } from "@/components/ui/use-toast";
import { z } from "zod";

import { Button } from '@/components/ui/button';
import {
    InputOTP,
    InputOTPGroup,
    InputOTPSeparator,
    InputOTPSlot,
} from '@/components/ui/input-otp';
import {
    Dialog,
    DialogClose,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from '@/components/ui/dialog';

import { REGEXP_ONLY_DIGITS } from 'input-otp';

type NewsletterOTPProps = {
    email: string;
}

export const NewsletterOTP = (props: NewsletterOTPProps) => {
    const { toast } = useToast();
    const [otp, setOTP] = React.useState('');
    const [open, setOpen] = React.useState(false);
    const [timeRetry, setTimeRetry] = React.useState(30);
    const intervalRef = React.useRef<NodeJS.Timeout | null>(null);

    const email = z.string().email();

    const handleOpen = () => {
        console.log(props.email);
        if (props.email.length < 1) {
            toast({
                title: 'Newsletter subscription',
                description: 'You need to enter an email address to subscribe to our newsletter.',
            });
            return null;
        }
        if (!email.safeParse(props.email).success) {
            toast({
                title: 'Newsletter subscription',
                description: 'The email address you entered is not valid. Please enter a valid email address.',
            });
            return null;
        }
        setOpen(true);
        startTimer();
    }

    const handleClose = () => {
        setOpen(false);
        stopTimer();
    }

    const checkOTP = async () => {
        console.log(otp);
        if (otp.length !== 6) {
            toast({
                title: 'Newsletter subscription',
                description: 'The code you entered is not valid. Please enter a 6-digit code.',
            });
            return null;
        }
        await toast({
            title: 'Newsletter subscription',
            description: 'You have successfully subscribed to our newsletter.',
        });
        handleClose();
    }

    const startTimer = () => {
        setTimeRetry(30);
        if (intervalRef.current) return;
        intervalRef.current = setInterval(() => {
            setTimeRetry((prevTime) => {
                if (prevTime > 1) {
                    return prevTime - 1;
                } else {
                    stopTimer();
                    return 0;
                }
            });
        }, 1000);
    };

    const stopTimer = () => {
        if (intervalRef.current) {
            clearInterval(intervalRef.current);
            intervalRef.current = null;
        }
    };

    const setOTPValue = (value: string) => {
        setOTP(value);
    }

    return (
        <Dialog open={open} onOpenChange={handleOpen}>
            <DialogTrigger asChild>
                <Button variant="default">
                    Subscribe
                </Button>
            </DialogTrigger>
            <DialogContent onCloseAutoFocus={() => { }} onInteractOutside={() => { }} hideClose>
                <DialogHeader>
                    <DialogTitle className='text-2xl'>Verify your newsletter subscription</DialogTitle>
                    <DialogDescription>
                        We have sent a code to your email {props.email}. Please check your inbox and enter the code below.
                    </DialogDescription>
                    <div className='flex w-full items-center justify-center py-5'>
                        <InputOTP maxLength={6} pattern={REGEXP_ONLY_DIGITS} value={otp} onChange={setOTPValue}>
                            <InputOTPGroup>
                                <InputOTPSlot index={0} />
                                <InputOTPSlot index={1} />
                                <InputOTPSlot index={2} />
                                <InputOTPSlot index={3} />
                                <InputOTPSlot index={4} />
                                <InputOTPSlot index={5} />
                            </InputOTPGroup>
                        </InputOTP>
                    </div>
                </DialogHeader>
                <DialogClose asChild>
                    <div className='flex justify-end flex-row space-x-3'>
                        <Button variant={"outlineSecondary"} disabled={timeRetry > 0} onClick={() => { if (timeRetry === 0) startTimer() }}>
                            {timeRetry > 0 ? `Resend code in ${timeRetry}s` : 'Resend code'}
                        </Button>
                        <Button variant="default" onClick={checkOTP}>
                            Verify
                        </Button>
                    </div>
                </DialogClose>
            </DialogContent>
        </Dialog>
    )
};
