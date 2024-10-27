'use client';

import React, { createContext, useContext, ReactNode } from 'react';
import Head from 'next/head';

const AnalyticsContext = createContext({});

interface AnalyticsProviderProps {
    children: ReactNode;
}

export const AnalyticsProvider: React.FC<AnalyticsProviderProps> = ({ children }) => {
    return (
        <AnalyticsContext.Provider value={{}}>
            <script
                defer
                src='https://analytics.secnex.io/script.js'
                data-website-id='87aec224-5a60-4664-bcf4-c5fb268ebe91'>
            </script>
            {children}
        </AnalyticsContext.Provider>
    );
};

export const useAnalytics = () => useContext(AnalyticsContext);
