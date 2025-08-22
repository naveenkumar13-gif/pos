"use client";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card } from "@/components/ui/card";
import { ChevronLeft } from "lucide-react";
import { message } from "antd";

interface DaySchedule {
  day: string;
  hours: string;
  isOpen: boolean;
}

export default function OpeningHours() {
  const [messageApi, contextHolder] = message.useMessage();
  const [isEditing, setIsEditing] = useState(false);
  const [schedule, setSchedule] = useState<DaySchedule[]>([
    { day: "Monday", hours: "08:00 am-08:00 pm", isOpen: true },
    { day: "Tuesday", hours: "08:00 am-08:00 pm", isOpen: true },
    { day: "Wednesday", hours: "08:00 am-08:00 pm", isOpen: true },
    { day: "Thursday", hours: "08:00 am-08:00 pm", isOpen: true },
    { day: "Friday", hours: "08:00 am-08:00 pm", isOpen: true },
    { day: "Saturday", hours: "08:00 am-08:00 pm", isOpen: true },
    { day: "Sunday", hours: "08:00 am-08:00 pm", isOpen: true },
  ]);

  const handleHoursChange = (index: number, newHours: string) => {
    setSchedule((prev) =>
      prev.map((item, i) => (i === index ? { ...item, hours: newHours } : item))
    );
  };

  const handleSave = () => {
    setIsEditing(false);
    messageApi.success("Your opening hours have been saved successfully.");
  };

  if (isEditing) {
    return (
      <div className="max-w-2xl ">
        <div className="flex items-center gap-4 !mb-6 justify-between max-sm:w-full bg-red-50">
          <div className="flex items-center gap-4">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsEditing(false)}
            >
              <ChevronLeft className="w-4 h-4" />
            </Button>
            <h2 className="text-2xl font-bold">Opening Hours</h2>
          </div>
          <Button
            variant="ghost"
            className="ml-auto text-destructive hover:text-destructive"
            onClick={handleSave}
          >
            Save
          </Button>
        </div>

        <div className="!space-y-4">
          {schedule.map((item, index) => (
            <div key={item.day}>
              <Label htmlFor={`hours-${item.day}`} className="block !mb-2">
                {item.day}
              </Label>
              <Input
                id={`hours-${item.day}`}
                value={item.hours}
                onChange={(e) => handleHoursChange(index, e.target.value)}
                placeholder="08:00 am-08:00 pm"
                className="!p-2"
              />
            </div>
          ))}
        </div>
      </div>
    );
  }

  return (
    <>
      {contextHolder}
      <div className="max-w-2xl">
        <div className="flex justify-between items-center !mb-6">
          <h2 className="text-2xl font-bold">Opening Hours</h2>
          <Button
            variant="ghost"
            className="text-destructive hover:text-destructive"
            onClick={() => setIsEditing(true)}
          >
            Edit
          </Button>
        </div>

        <Card className="!p-6">
          <div className="!space-y-4">
            {schedule.map((item) => (
              <div key={item.day} className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-3 h-3 bg-destructive rounded-full"></div>
                  <span className="font-medium">{item.day}</span>
                </div>
                <span className="text-muted-foreground">{item.hours}</span>
              </div>
            ))}
          </div>
        </Card>
      </div>
    </>
  );
}
