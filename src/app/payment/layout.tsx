import Header from "@/components/header";
import React from "react";

interface LayoutProps {
  children: React.ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  return (
    <div className="min-h-screen bg-background">
      <main className="!px-10 max-md:!p-8 max-sm:!p-4 max-w-4xl !mx-auto">{children}</main>
    </div>
  );
}
