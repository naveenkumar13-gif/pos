import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { ArrowLeft, Upload, User } from "lucide-react";
import { Customer } from "../customerTable";
import Image from "next/image";


interface CustomerFormProps {
  customer?: Customer;
  onSave: (customer: Omit<Customer, 'id'>) => void;
  onCancel: () => void;
}

export const CustomerForm = ({ customer, onSave, onCancel }: CustomerFormProps) => {
  const [formData, setFormData] = useState({
    name: customer?.name || "",
    orders: customer?.orders?.toString() || "",
    spend: customer?.spend?.toString() || "",
    gender: customer?.gender || "",
    phone: customer?.phone || "",
    city: customer?.city || "",
    image: customer?.image || ""
  });

  const [imagePreview, setImagePreview] = useState(customer?.image || "");

  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        const result = reader.result as string;
        setImagePreview(result);
        setFormData(prev => ({ ...prev, image: result }));
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
      image: formData.image
    });
  };

  const isEditing = !!customer;

  return (
    <div className="max-w-2xl !mx-auto !space-y-6">
      {/* Header */}
      <div className="flex items-center gap-4">
        <Button variant="outline" onClick={onCancel} size="sm" className="!p-2">
          <ArrowLeft className="w-4 h-4" />
        </Button>
        <h1 className="text-2xl font-bold text-foreground">
          {isEditing ? 'Edit Customer' : 'Add Customer'}
        </h1>
      </div>

      {/* Form */}
      <Card className="!p-6">
        <form onSubmit={handleSubmit} className="!space-y-6">
          {/* Image Upload */}
          <div className="text-center space-y-4">
            <div className="!mx-auto w-32 h-32 rounded-lg border-2 border-dashed border-border flex items-center justify-center overflow-hidden bg-muted">
              {imagePreview ? (
                <Image
                  src={imagePreview} 
                  alt="Preview" 
                  className="w-full h-full object-cover"
                />
              ) : (
                <div className="text-center">
                  <User className="w-8 h-8 mx-auto text-muted-foreground !mb-2" />
                  <Upload className="w-4 h-4 mx-auto text-muted-foreground" />
                </div>
              )}
            </div>
            <div>
              <Label htmlFor="image-upload" className="cursor-pointer">
                <span className="text-sm font-medium text-foreground">Upload Image</span>
                <Input
                  id="image-upload"
                  type="file"
                  accept="image/*"
                  onChange={handleImageUpload}
                  className="hidden"
                />
              </Label>
            </div>
          </div>

          {/* Form Fields */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="!space-y-2">
              <Label htmlFor="name">Full Name:</Label>
              <Input
                id="name"
                value={formData.name}
                onChange={(e) => setFormData(prev => ({ ...prev, name: e.target.value }))}
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
                onChange={(e) => setFormData(prev => ({ ...prev, orders: e.target.value }))}
                required
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
                onChange={(e) => setFormData(prev => ({ ...prev, spend: e.target.value }))}
                required
                placeholder="Enter total spend"
              />
            </div>

            <div className="!space-y-2">
              <Label htmlFor="gender">Gender:</Label>
              <Input
                id="gender"
                value={formData.gender}
                onChange={(e) => setFormData(prev => ({ ...prev, gender: e.target.value }))}
                required
                placeholder="Enter gender"
              />
            </div>

            <div className="!space-y-2">
              <Label htmlFor="phone">Phone Number:</Label>
              <Input
                id="phone"
                value={formData.phone}
                onChange={(e) => setFormData(prev => ({ ...prev, phone: e.target.value }))}
                required
                placeholder="Enter phone number"
              />
            </div>

            <div className="!space-y-2">
              <Label htmlFor="city">City:</Label>
              <Input
                id="city"
                value={formData.city}
                onChange={(e) => setFormData(prev => ({ ...prev, city: e.target.value }))}
                placeholder="Enter city"
              />
            </div>
          </div>

          {/* Submit Button */}
          <div className="flex justify-center !pt-4">
            <Button type="submit" className="bg-primary hover:bg-primary/90 !px-8">
              {isEditing ? 'Update Customer' : 'Save Customer'}
            </Button>
          </div>
        </form>
      </Card>
    </div>
  );
};