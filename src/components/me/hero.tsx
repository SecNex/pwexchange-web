import * as React from 'react';

export type HeroProps = {
    announcement?: React.ReactNode;
    title: React.ReactNode;
    text?: React.ReactNode;
    primaryButton?: React.ReactNode;
    secondaryButton?: React.ReactNode;
}

export const HeroSection = (props: HeroProps) => {
    return (
        <div className='flex flex-col space-y-12 lg:space-y-16 w-full justify-center items-center p-10 py-20'>
            <div className='flex flex-col space-y-14 lg:space-y-20 w-full mx-auto justify-center items-center'>
                {props.announcement}
                {props.title}
                {props.text}
            </div>
            {(props.primaryButton || props.secondaryButton) && (
                    <div className='flex flex-row space-x-4'>
                        {props.primaryButton}
                        {props.secondaryButton}
                    </div>
                )}
        </div>
    )
}