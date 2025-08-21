import React from 'react';
import Header from '@/components/header';
import { useIsMobile } from '@/hooks/useMobile';
import Sidebar from '@/components/sidebar';

interface LayoutProps {
  children: React.ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  const isMobile = useIsMobile();
  
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <Sidebar />
      <main className={`pb-20 md:pb-0 ${!isMobile ? 'ml-20' : ''}`}>
        {children}
      </main>
    </div>
  );
}