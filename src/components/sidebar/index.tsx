"use client";
import React, { useState } from "react";
import {
  Home,
  Package,
  ShoppingCart,
  Users,
  Settings,
  BarChart3,
  Menu,
  X,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { useIsMobile } from "@/hooks/useMobile";
import { usePathname, useRouter } from "next/navigation";

const navigationItems = [
  { icon: Home, label: "Home", path: "/" },
  { icon: Package, label: "Product", path: "/product" },
  { icon: ShoppingCart, label: "Orders", path: "/cart" },
  { icon: Users, label: "Customer", path: "/customer" },
  { icon: Settings, label: "Settings", path: "/settings" },
  { icon: BarChart3, label: "Dashboard", path: "/dashboard" },
];

export default function Sidebar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const path = usePathname();
  const router = useRouter();

  const isMobile = useIsMobile();

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const isActive = (link: string) => {
    if (link === "/") return path === "/";
    return path.startsWith(link);
  };

  return (
    <>
      {isMobile && (
        <Button
          variant="ghost"
          size="icon"
          onClick={toggleMobileMenu}
          className="fixed top-10 left-4 z-50 bg-white shadow-md hover:bg-gray-50  max-sm:top-3 max-sm:left-0  max-sm:!ml-2"
        >
          <Menu className="h-5 w-5 text-primary" />
        </Button>
      )}
      {isMobile && isMobileMenuOpen && (
        <div
          className="fixed inset-0 bg-black/50 z-40 "
          onClick={() => setIsMobileMenuOpen(false)}
        />
      )}

      {!isMobile && (
        <div className="fixed -left-2 top-0 h-full w-20 bg-pr shadow-xl z-30 transition-all duration-700 bg-primary ">
          <TooltipProvider>
            <div className="flex flex-col items-center justify-center h-full !space-y-6">
              {navigationItems.map((item) => {
                const Icon = item.icon;
                const active = isActive(item.path);

                return (
                  <Tooltip key={item.path}>
                    <TooltipTrigger asChild>
                      <Button
                        variant="ghost"
                        size="icon"
                        onClick={() => router.push(item.path)}
                        className={`w-12 h-12 rounded-xl transition-all duration-200   ${
                          active
                            ? "bg-white text-primary shadow-lg scale-110"
                            : "text-white hover:bg-white/20 hover:text-whi hover:scale-105"
                        }`}
                      >
                        <Icon className="h-6 w-6" />
                      </Button>
                    </TooltipTrigger>
                    <TooltipContent side="right" className="!ml-3">
                      <p className="font-medium !p-2 ">{item.label}</p>
                    </TooltipContent>
                  </Tooltip>
                );
              })}
            </div>
          </TooltipProvider>
        </div>
      )}
      {/* mobile */}
      {isMobile && (
        <div
          className={`fixed left-0 top-0 h-full w-72 bg-gradient-to-b from-primary to-primary/90 shadow-xl z-50 transform transition-transform duration-300 ease-in-out ${
            isMobileMenuOpen ? "translate-x-0" : "-translate-x-full"
          }`}
        >
          <div className="flex flex-col h-full">
            <div className="flex items-center justify-between !p-2 border-b border-white/20">
              <div className="flex items-center !p-4">
                <h2 className="text-xl font-bold text-white">
                  Bill <span className="text-red-100">Mate</span>
                </h2>
              </div>
              <Button
                variant="ghost"
                size="icon"
                onClick={() => setIsMobileMenuOpen(false)}
                className="text-white hover:bg-white/20"
              >
                <X className="h-6 w-6" />
              </Button>
            </div>

            <div className="flex-1 !p-6">
              <nav className="!space-y-3">
                {navigationItems.map((item) => {
                  const Icon = item.icon;
                  const active = isActive(item.path);

                  return (
                    <Button
                      key={item.path}
                      variant="ghost"
                      onClick={() => {
                        router.push(item.path);
                        setIsMobileMenuOpen(false);
                      }}
                      className={`w-full justify-start text-left !py-3 !px-4 rounded-xl transition-all duration-200 ${
                        active
                          ? "bg-white text-primary shadow-md"
                          : "text-white hover:bg-white/20 hover:translate-x-1"
                      }`}
                    >
                      <Icon className="h-6 w-6 !mr-4" />
                      <span className="font-medium">{item.label}</span>
                    </Button>
                  );
                })}
              </nav>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
