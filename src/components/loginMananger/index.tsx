import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { message } from "antd";
import { Textarea } from "../ui/textarea";

const LoginPage = () => {
  const [formData, setFormData] = useState({
    username: "Naveen",
    password: "",
    email: "naveen@gmail.com",
    phoneNumber: "+91 7568695210",
    description:
      "As a manager, Soul Man oversees team operations and ensures service standards are consistently met. He supports strategic planning, encourages collaboration, and drives performance. His leadership fosters a productive work environment focused on growth and efficiency.",
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSaveChanges = () => {
    message.success("Changes saved successfully!");
  };

  return (
    <div className="min-h-screen bg-background flex">
      
      <div className="flex-1 ">
        <div className="max-w-2xl">
          <h2 className="text-2xl font-bold !mb-4">Login & Password</h2>
          <Textarea
            value={formData.description}
            onChange={(e: React.ChangeEvent<HTMLTextAreaElement>) =>
              handleInputChange({
                target: { name: "description", value: e.target.value },
              } as React.ChangeEvent<HTMLInputElement>)
            }
            className="!mb-6 min-h-[100px] resize-none !p-2"
            placeholder="Description..."
          />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 !mb-8">
            <div className="!space-y-2">
              <Label htmlFor="username">Username</Label>
              <Input
                id="username"
                name="username"
                value={formData.username}
                onChange={handleInputChange}
                placeholder="Enter username"
                className="!p-2"
              />
            </div>

            <div className="!space-y-2">
              <Label htmlFor="password">Password</Label>
              <Input
                className="!p-2"
                id="password"
                name="password"
                type="password"
                value={formData.password}
                onChange={handleInputChange}
                placeholder="••••••••••••••••••"
              />
            </div>

            <div className="!space-y-2">
              <Label htmlFor="email">Email</Label>
              <Input
                className="!p-2"
                id="email"
                name="email"
                type="email"
                value={formData.email}
                onChange={handleInputChange}
                placeholder="Enter email"
              />
            </div>

            <div className="!space-y-2">
              <Label htmlFor="phoneNumber">Phone Number</Label>
              <Input
                className="!p-2"
                id="phoneNumber"
                name="phoneNumber"
                value={formData.phoneNumber}
                onChange={handleInputChange}
                placeholder="Enter phone number"
              />
            </div>
          </div>

          <Button
            onClick={handleSaveChanges}
            className="w-full bg-primary hover:bg-primary/90 text-primary-foreground h-12 text-base font-medium"
          >
            Save Changes
          </Button>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
