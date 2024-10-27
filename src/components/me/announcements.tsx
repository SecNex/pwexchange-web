import * as React from 'react';

import { cn } from '@/lib/utils';

import { IconPointFilled } from '@tabler/icons-react';

export type AnnouncementProps = {
    icon?: React.ReactNode;
    text: React.ReactNode;
    iconClassName?: string;
    textClassName?: string;
}

export const Announcement = (props: AnnouncementProps) => {
    return (
        <div className='flex flex-row space-x-2 max-w-[90em] mx-auto items-center border border-zinc-200 dark:border-zinc-700 text-zinc-800 dark:text-zinc-300 rounded-full p-1 px-3 pr-5'>
            <div className={cn('', props.iconClassName)}>
                {props.icon ?? <IconPointFilled size={10} className={cn('animate-pulse', props.iconClassName)} />}
            </div>
            <div className={cn('text-xs', props.textClassName)}>{props.text}</div>
        </div>
    )
}