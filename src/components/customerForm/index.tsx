"use client";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { ArrowLeft, Upload, User, Camera } from "lucide-react";
import { Customer } from "../customerTable";
import Image from "next/image";

interface CustomerFormProps {
  customer?: Customer;
  onSave: (customer: Omit<Customer, "id">) => void;
  onCancel: () => void;
}

export const CustomerForm = ({
  customer,
  onSave,
  onCancel,
}: CustomerFormProps) => {
  const [formData, setFormData] = useState({
    name: customer?.name || "",
    orders: customer?.orders?.toString() || "",
    spend: customer?.spend?.toString() || "",
    gender: customer?.gender || "",
    phone: customer?.phone || "",
    city: customer?.city || "",
    image: customer?.image || "",
  });

  const [imagePreview, setImagePreview] = useState(customer?.image || "");
  const [showImageOptions, setShowImageOptions] = useState(false);

  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        const result = reader.result as string;
        setImagePreview(result);
        setFormData((prev) => ({ ...prev, image: result }));
        setShowImageOptions(false);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleCameraCapture = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        const result = reader.result as string;
        setImagePreview(result);
        setFormData((prev) => ({ ...prev, image: result }));
        setShowImageOptions(false);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSave({
      name: formData.name,
      orders: parseInt(formData.orders) || 0,
      spend: parseFloat(formData.spend) || 0,
      gender: formData.gender,
      phone: formData.phone,
      city: formData.city,
      image: formData.image,
    });
  };

  const isEditing = !!customer;

  return (
    <div className="max-w-2xl !mx-auto !space-y-6">
      <div className="flex items-center gap-4">
        <Button
          variant="outline"
          onClick={onCancel}
          size={"lg"}
          className="!p-2"
        >
          <ArrowLeft className="w-4 h-4" />
        </Button>
        <h1 className="text-2xl font-bold text-foreground">
          {isEditing ? "Edit Customer" : "Add Customer"}
        </h1>
      </div>

      <Card className="!p-6">
        <form onSubmit={handleSubmit} className="!space-y-6">
          {/* Image Upload */}
          <div className="text-center !space-y-4 flex items-center justify-center flex-col">
            <div
              className="mx-auto w-32 h-32 rounded-lg border-2 border-dashed border-border flex items-center justify-center overflow-hidden bg-muted cursor-pointer"
              onClick={() => setShowImageOptions(true)}
            >
              {imagePreview ? (
                <Image
                  src={imagePreview}
                  alt="Preview"
                  className="w-full h-full object-cover"
                />
              ) : (
                <div className="text-center">
                  <User className="w-8 h-8 mx-auto text-muted-foreground !mb-2" />
                </div>
              )}
            </div>
            <div>
              <span
                className="text-sm font-medium text-foreground cursor-pointer"
                onClick={() => setShowImageOptions(true)}
              >
                Upload Image
              </span>
            </div>

            <Input
              id="image-upload"
              type="file"
              accept="image/*"
              onChange={handleImageUpload}
              className="hidden"
            />
            <Input
              id="camera-capture"
              type="file"
              accept="image/*"
              capture="environment"
              onChange={handleCameraCapture}
              className="hidden"
            />
          </div>

          {showImageOptions && (
            <div
              className="fixed inset-0 bg-black/50 flex items-center justify-center z-50"
              onClick={() => setShowImageOptions(false)}
            >
              <div
                className="bg-background rounded-lg p-6 m-4 max-w-sm w-full"
                onClick={(e) => e.stopPropagation()}
              >
                <div className="grid grid-cols-2 gap-4 !p-6">
                  <div
                    className="flex flex-col items-center !p-6 border-2 border-dashed border-border rounded-lg cursor-pointer hover:bg-muted transition-colors"
                    onClick={() =>
                      document.getElementById("camera-capture")?.click()
                    }
                  >
                    <div className="w-16 h-16 bg-muted rounded-lg flex items-center justify-center mb-3">
                      <Camera className="w-8 h-8 text-muted-foreground" />
                    </div>
                    <span className="text-sm font-medium text-foreground">
                      capture image
                    </span>
                  </div>

                  <div
                    className="flex flex-col items-center !p-6 border-2 border-dashed border-border rounded-lg cursor-pointer hover:bg-muted transition-colors"
                    onClick={() =>
                      document.getElementById("image-upload")?.click()
                    }
                  >
                    <div className="w-16 h-16 bg-muted rounded-lg flex items-center justify-center !mb-3">
                      <Upload className="w-8 h-8 text-muted-foreground" />
                    </div>
                    <span className="text-sm font-medium text-foreground">
                      Select image
                    </span>
                  </div>
                </div>
              </div>
            </div>
          )}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="!space-y-2">
              <Label htmlFor="name">Full Name:</Label>
              <Input
                id="name"
                value={formData.name}
                onChange={(e) =>
                  setFormData((prev) => ({ ...prev, name: e.target.value }))
                }
                className="!p-2"
                required
                placeholder="Enter full name"
              />
            </div>

            <div className="!space-y-2">
              <Label htmlFor="orders">Total Orders:</Label>
              <Input
                id="orders"
                type="number"
                value={formData.orders}
                onChange={(e) =>
                  setFormData((prev) => ({ ...prev, orders: e.target.value }))
                }
                required
                className="!p-2"
                placeholder="Enter total orders"
              />
            </div>

            <div className="!space-y-2">
              <Label htmlFor="spend">Spend ($):</Label>
              <Input
                id="spend"
                type="number"
                step="0.01"
                value={formData.spend}
                onChange={(e) =>
                  setFormData((prev) => ({ ...prev, spend: e.target.value }))
                }
                required
                className="!p-2"
                placeholder="Enter total spend"
              />
            </div>

            <div className="!space-y-2">
              <Label htmlFor="gender">Gender:</Label>
              <Input
                id="gender"
                value={formData.gender}
                onChange={(e) =>
                  setFormData((prev) => ({ ...prev, gender: e.target.value }))
                }
                required
                className="!p-2"
                placeholder="Enter gender"
              />
            </div>

            <div className="!space-y-2">
              <Label htmlFor="phone">Phone Number:</Label>
              <Input
                id="phone"
                value={formData.phone}
                onChange={(e) =>
                  setFormData((prev) => ({ ...prev, phone: e.target.value }))
                }
                required
                className="!p-2"
                placeholder="Enter phone number"
              />
            </div>

            <div className="!space-y-2">
              <Label htmlFor="city">City:</Label>
              <Input
                id="city"
                value={formData.city}
                onChange={(e) =>
                  setFormData((prev) => ({ ...prev, city: e.target.value }))
                }
                placeholder="Enter city"
                className="!p-2"
              />
            </div>
          </div>

          <div className="flex justify-center !pt-4">
            <Button
              type="submit"
              className="bg-primary hover:bg-primary/90 !px-8"
            >
              {isEditing ? "Update Customer" : "Save Customer"}
            </Button>
          </div>
        </form>
      </Card>
    </div>
  );
};
