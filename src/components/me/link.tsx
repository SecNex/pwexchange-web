import NextLink from 'next/link';

import { cn } from '@/lib/utils';

export type LinkProps = {
    href: string;
    children: React.ReactNode;
    className?: string;
};

const className = 'hover:text-zinc-800 dark:hover:text-zinc-200 hover:underline-offset-4 hover:underline transition-all duration-500';

export const Link = (props: LinkProps) => {
    return (
        <NextLink href={props.href} className={cn(className, props.className)}>
            {props.children}
        </NextLink>
    );
}