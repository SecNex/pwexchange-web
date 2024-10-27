import * as React from 'react';

import { Navbar } from '@/components/me/navbar';
import type { NavbarProps } from '@/components/me/navbar';
import { Footer } from '@/components/me/footer';

type PageProps = {
    navbar: NavbarProps;
    children: React.ReactNode;
}

export const Page = (props: PageProps) => {
    return (
        <div className=''>
            <Navbar showCallToAction={true} themeToggle />
            <div className='pt-[60px]'>
                {props.children}
            </div>
            <Footer />
        </div>
    )
}