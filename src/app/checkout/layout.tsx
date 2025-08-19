
import React from "react";

interface LayoutProps {
  children: React.ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  return (
    <div className="min-h-screen bg-background">
    
      <main className="!pb-20 md:!pb-0">{children}</main>
    </div>
  );
}
