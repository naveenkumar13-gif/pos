"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { message } from "antd";

export default function PersonalInformation() {
  const [formData, setFormData] = useState({
    firstName: "Soul",
    lastName: "Man",
    email: "soulman@gmail.com",
    phone: "+91 7568695210",
    dateOfBirth: "23/05/1989",
    position: "Manager",
    description:
      "As a manager, Soul Man oversees team operations and ensures service standards are consistently met. He supports strategic planning, encourages collaboration, and drives performance. His leadership fosters a productive work environment focused on growth and efficiency.",
  });

  const [messageApi, contextHolder] = message.useMessage();
  const handleInputChange = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const handleSave = () => {
    messageApi.success("Personal Information saved successfully!");
  };

  return (
  <>
  {contextHolder}
    <div className="max-w-4xl   ">
      <h2 className="text-2xl font-bold !mb-2">Personal Information</h2>
      <Textarea
        value={formData.description}
        onChange={(e) => handleInputChange("description", e.target.value)}
        className="!mb-6 min-h-[100px] resize-none !p-2"
        placeholder="Description..."
      />

      <div className="grid grid-cols-2 gap-6 !mb-6">
        <div className="!space-y-2">
          <Label htmlFor="firstName">First Name</Label>
          <Input
            id="firstName"
            placeholder="First Name"
            value={formData.firstName}
            onChange={(e) => handleInputChange("firstName", e.target.value)}
            className="!p-2"
          />
        </div>
        <div className="!space-y-2">
          <Label htmlFor="lastName">Last Name</Label>
          <Input
            className="!p-2"
            id="lastName"
            placeholder="Last Name"
            value={formData.lastName}
            onChange={(e) => handleInputChange("lastName", e.target.value)}
          />
        </div>
      </div>

      <div className="grid grid-cols-2 gap-6 !mb-6">
        <div className="!space-y-2">
          <Label htmlFor="email">Email</Label>
          <Input
            className="!p-2"
            id="email"
            type="email"
            value={formData.email}
            onChange={(e) => handleInputChange("email", e.target.value)}
            placeholder="Email"
          />
        </div>
        <div className="!space-y-2">
          <Label htmlFor="phone">Phone Number</Label>
          <Input
            className="!p-2"
            id="phone"
            value={formData.phone}
            onChange={(e) => handleInputChange("phone", e.target.value)}
            placeholder="Phone Number"
          />
        </div>
      </div>

      <div className="grid grid-cols-2 gap-6 !mb-8">
        <div className="!space-y-2">
          <Label htmlFor="dateOfBirth">Date Of Birth</Label>
          <Input
            className="!p-2"
            id="dateOfBirth"
            value={formData.dateOfBirth}
            onChange={(e) => handleInputChange("dateOfBirth", e.target.value)}
            placeholder="Date Of Birth"
          />
        </div>
        <div className="!space-y-2">
          <Label htmlFor="position">Position</Label>
          <Input
            className="!p-2"
            id="position"
            value={formData.position}
            onChange={(e) => handleInputChange("position", e.target.value)}
            placeholder="Position"
          />
        </div>
      </div>

      <Button onClick={handleSave} className="w-full">
        Save Changes
      </Button>
    </div>
  </>
  );
}
