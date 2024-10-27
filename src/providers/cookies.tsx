'use client';

import * as React from 'react';
import { useCookies } from 'react-cookie';

export const CookiesContext = React.createContext({
    showBanner: false,
    acceptCookies: () => {},
    toggleBanner: () => {},
});

export const CookiesProvider = ({ children }: { children: React.ReactNode }) => {
  const [cookies, setCookie] = useCookies(['cookieConsent']);
  const [showBanner, setShowBanner] = React.useState(false);

  React.useEffect(() => {
    if (!cookies.cookieConsent) {
      setShowBanner(true);
    }
  }, [cookies]);

  const acceptCookies = () => {
    setCookie('cookieConsent', 'true', { path: '/', maxAge: 31536000 });
    setShowBanner(false);
  };

  const toggleBanner = () => {
    console.log('toggle');
    setShowBanner(!showBanner);
  }

  return (
    <CookiesContext.Provider value={{ showBanner, acceptCookies, toggleBanner }}>
      {children}
    </CookiesContext.Provider>
  );
};

