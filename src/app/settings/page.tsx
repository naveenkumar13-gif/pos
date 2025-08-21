import { useState } from "react";
import SettingsSidebar from "@/components/settingsidebar";
import PersonalInformation from "@/components/personalInformation";
import EmployeesManagement from "@/components/employeeManage";
import OpeningHours from "@/components/openingHours";
import PhotoEditor from "@/components/photoEditor";

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
        return (
          <div className="max-w-2xl">
            <h2 className="text-2xl font-bold mb-6">Login & Password</h2>
            <p className="text-muted-foreground">Login and password settings will be available here.</p>
          </div>
        );
      default:
        return <PersonalInformation />;
    }
  };

  return (
    <div className="min-h-screen bg-background flex">
      <SettingsSidebar
        activeSection={activeSection}
        onSectionChange={setActiveSection}
        onPhotoEdit={() => setIsPhotoEditorOpen(true)}
      />
      <div className="flex-1 p-8">
        {renderContent()}
      </div>
      <PhotoEditor
        isOpen={isPhotoEditorOpen}
        onClose={() => setIsPhotoEditorOpen(false)}
      />
    </div>
  );
};

export default Index;