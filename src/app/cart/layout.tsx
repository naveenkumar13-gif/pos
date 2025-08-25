import React from "react";
import Header from "@/components/header";

import Sidebar from "@/components/sidebar";

interface LayoutProps {
  children: React.ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  return (
    <div className="min-h-screen bg-background">
      <Sidebar />
      <main className={`!px-10 max-md:!p-8 max-sm:!p-4 max-w-4xl !mx-auto `}>
        {children}
      </main>
    </div>
  );
}
