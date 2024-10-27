import Link from 'next/link';

import { Announcement } from '@/components/me/announcements';
import { GradientHeader } from '@/components/me/headers';
import { HeroSection } from '@/components/me/hero';
import { Button } from '@/components/ui/button'

export const HomeHero = () => {
    const header = <GradientHeader title='Secure solution to exchange secrets' className='text-5xl lg:text-7xl' />;
    const announcement = <Announcement text='Management portal coming soon!' iconClassName='fill-yellow-500' />;
    const text = (
        <div className=''>
            <p className='text-center text-sm font-light'>
                <strong>Password Exchange</strong> by SecNex is a secure solution to exchange secrets with your friends, family, and colleagues.
            </p>
        </div>
    )
    const primaryButton = <Button variant={'default'} className='' asChild><Link href='/exchange'>Share a secret</Link></Button>;
    const secondaryButton = <Button variant={'outlineSecondary'} className='' asChild><Link href='https://docs.secnex.io'>Documentation</Link></Button>;
    return (
        <div className='flex'>
            <div className='flex w-full justify-center items-center'>
                <HeroSection title={header} announcement={announcement} text={text} primaryButton={primaryButton} secondaryButton={secondaryButton} />
            </div>
        </div>
    );
}