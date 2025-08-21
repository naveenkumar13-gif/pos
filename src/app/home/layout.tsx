import Header from "@/components/header";
import Sidebar from "@/components/sidebar";
import { useIsMobile } from "@/hooks/useMobile";
import React from "react";

interface LayoutProps {
  children: React.ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  const isMobile = useIsMobile();

  return (
    <div className="min-h-screen bg-background">
      <Sidebar />
      <main className={`!px-10 max-sm:!p-8 ${!isMobile ? "!ml-20" : ""}`}>
        {children}
      </main>
    </div>
  );
}
