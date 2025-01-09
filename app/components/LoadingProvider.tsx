'use client';

import React, { createContext, useContext, useState, useEffect } from 'react';
import { usePathname } from 'next/navigation';
import LoadingSpinner from './LoadingSpinner';

const LoadingContext = createContext({
  isLoading: true,
  setIsLoading: (loading: boolean) => {},
});

export const useLoading = () => useContext(LoadingContext);

export default function LoadingProvider({ children }: { children: React.ReactNode }) {
  const [isLoading, setIsLoading] = useState(true);
  const pathname = usePathname();

  useEffect(() => {
    // Show loading for minimum 1 second on initial load
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    // Show loading for minimum 1 second on page transitions
    setIsLoading(true);
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1000);

    return () => clearTimeout(timer);
  }, [pathname]);

  return (
    <LoadingContext.Provider value={{ isLoading, setIsLoading }}>
      {isLoading && <LoadingSpinner />}
      <div className={isLoading ? 'hidden' : ''}>
        {children}
      </div>
    </LoadingContext.Provider>
  );
}
