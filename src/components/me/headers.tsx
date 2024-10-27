import { cn } from '@/lib/utils';

export type HeaderProps = {
    title: string;
    className?: string;
}

export const GradientHeader = (props: HeaderProps) => {
    return (
        <div className={cn('text-5xl lg:text-7xl font-black p-3 bg-clip-text text-transparent bg-gradient-to-b from-zinc-950 to-zinc-600 dark:from-zinc-100 dark:to-zinc-400 text-center', props.className)}>
            <h1>{props.title}</h1>
        </div>
    );
}