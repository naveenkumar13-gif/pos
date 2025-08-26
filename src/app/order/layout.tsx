import React from 'react';
import Header from '@/components/header';

import Sidebar from '@/components/sidebar';

interface LayoutProps {
  children: React.ReactNode;
}

export default function Layout({ children }: LayoutProps) {

  
  return (
    <div className="min-h-screen bg-background">
      
      <Sidebar />
      <main className={`pb-20 md:pb-0`}>
        {children}
      </main>
    </div>
  );
}