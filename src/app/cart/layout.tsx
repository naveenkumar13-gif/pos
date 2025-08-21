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
      <main className={`!px-20 max-md:!px-0 max-w-3xl !mx-auto `}>{children}</main>
    </div>
  );
}
