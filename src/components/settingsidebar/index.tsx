"use client";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { ChevronRight, Edit, Home } from "lucide-react";
import { cn } from "@/lib/utils";

interface SettingsSidebarProps {
  activeSection: string;
  onSectionChange: (section: string) => void;
  onPhotoEdit: () => void;
}

export default function SettingsSidebar({
  activeSection,
  onSectionChange,
  onPhotoEdit,
}: SettingsSidebarProps) {
  const sections = [
    { id: "personal", label: "Personal Information" },
    { id: "employees", label: "Employees Management" },
    { id: "hours", label: "Opening Hours" },
    { id: "login", label: "Login & Password" },
  ];

  return (
    <div className="w-80 bg-background border-r min-h-screen !p-6 ">
      <h1 className="text-2xl font-bold !mb-8">Settings</h1>

      <Card className="!p-6 !mb-6 text-center  flex flex-col items-center ">
        <div className="relative inline-block !mb-4">
          <Avatar className="w-24 h-24 ">
            <AvatarImage src={""} alt="Soul Man" />
            <AvatarFallback>SM</AvatarFallback>
          </Avatar>
          <Button
            size="icon"
            variant="destructive"
            className="absolute -top-1 -right-8 w-6 h-6 rounded-full"
            onClick={onPhotoEdit}
          >
            <Edit className="w-3 h-3" />
          </Button>
        </div>
        <h3 className="font-semibold text-lg">Soul Man</h3>
        <p className="text-muted-foreground">Manager</p>
      </Card>

      <div className="!space-y-2">
        {sections.map((section) => (
          <Button
            key={section.id}
            variant={activeSection === section.id ? "default" : "ghost"}
            className={cn(
              "w-full justify-between !p-4",
              activeSection === section.id &&
                "bg-primary text-primary-foreground"
            )}
            onClick={() => onSectionChange(section.id)}
          >
            {section.label}
            <ChevronRight className="w-4 h-4" />
          </Button>
        ))}
      </div>

      <div className="!mt-8">
        <Button
          variant="ghost"
          className="text-destructive hover:text-destructive"
        >
          Logout
        </Button>
      </div>
    </div>
  );
}
