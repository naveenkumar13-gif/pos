import Sidebar from "@/components/sidebar";
import React from "react";

interface LayoutProps {
  children: React.ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  return (
    <div className="min-h-screen bg-background max-w-5xl !mx-auto ">
      <Sidebar />
      <main className={` !px-10 max-sm:!p-0   `}>{children}</main>
    </div>
  );
}
