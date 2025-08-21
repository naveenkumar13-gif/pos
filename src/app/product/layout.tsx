import Sidebar from "@/components/sidebar";
import React from "react";

interface LayoutProps {
  children: React.ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  return (
    <div className="min-h-screen bg-background">
      <Sidebar />
      <main className={` !px-10 max-sm:!p-0 max-w-5xl !mx-auto bg-red-50  `}>{children}</main>
    </div>
  );
}
