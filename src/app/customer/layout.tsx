import React from 'react';
import Header from '@/components/header';
import { useIsMobile } from '@/hooks/useMobile';
import Sidebar from '@/components/sidebar';

interface LayoutProps {
  children: React.ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  ;
  
  return (
    <div className="min-h-screen bg-background">
    
      <Sidebar />
      <main className={`!px-20 md:pb-0 max-w-5xl !mx-auto `}>
        {children}
      </main>
    </div>
  )
}