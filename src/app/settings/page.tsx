"use client";
import { useState } from "react";
import SettingsSidebar from "@/components/settingsidebar";
import PersonalInformation from "@/components/personalInformation";
import EmployeesManagement from "@/components/employeeManage";
import OpeningHours from "@/components/openingHours";
import PhotoEditor from "@/components/photoEditor";
import LoginPage from "@/components/loginMananger";

const Index = () => {
  const [activeSection, setActiveSection] = useState("personal");
  const [isPhotoEditorOpen, setIsPhotoEditorOpen] = useState(false);

  const renderContent = () => {
    switch (activeSection) {
      case "personal":
        return <PersonalInformation />;
      case "employees":
        return <EmployeesManagement />;
      case "hours":
        return <OpeningHours />;
      case "login":
        return <LoginPage />;

      default:
        return <PersonalInformation />;
    }
  };

  return (
    <div className="min-h-screen bg-background flex max-sm:flex-col ">
      <SettingsSidebar
        activeSection={activeSection}
        onSectionChange={setActiveSection}
        onPhotoEdit={() => setIsPhotoEditorOpen(true)}
      />
      <div className="flex-1 !p-6 max-sm:!p-3">{renderContent()}</div>
      <PhotoEditor
        isOpen={isPhotoEditorOpen}
        onClose={() => setIsPhotoEditorOpen(false)}
      />
    </div>
  );
};

export default Index;
