"use client";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Card } from "@/components/ui/card";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { ArrowLeft, Home, ImagePlus, Camera } from "lucide-react";
import { Toaster, toast } from "sonner";
import Aside from "@/components/aside";
import Image from "next/image";

import { useRouter } from "next/navigation";
interface ProductFormData {
  name: string;
  category: string;
  price: string;
  productId: string;
  actualPrice: string;
  quantity: string;
  status: string;
  type: string;
  description: string;
}

const ProductForm = () => {
  const [formData, setFormData] = useState<ProductFormData>({
    name: "",
    category: "",
    price: "",
    productId: "",
    actualPrice: "",
    quantity: "",
    status: "",
    type: "",
    description: "",
  });

  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [isImageDialogOpen, setIsImageDialogOpen] = useState(false);

  const route = useRouter();

  const handleInputChange = (field: keyof ProductFormData, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const handleImageUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => {
        setSelectedImage(e.target?.result as string);
      };
      reader.readAsDataURL(file);
    }
    setIsImageDialogOpen(false);
  };

  const handleCameraCapture = () => {
    const input = document.createElement("input");
    input.type = "file";
    input.accept = "image/*";
    input.capture = "environment";
    input.onchange = (e) => {
      const file = (e.target as HTMLInputElement).files?.[0];
      if (file) {
        const reader = new FileReader();
        reader.onload = (event) => {
          setSelectedImage(event.target?.result as string);
        };
        reader.readAsDataURL(file);
      }
    };
    input.click();
    setIsImageDialogOpen(false);
  };

  const handleSelectImage = () => {
    const input = document.createElement("input");
    input.type = "file";
    input.accept = "image/*";
    input.onchange = (e) => {
      const file = (e.target as HTMLInputElement).files?.[0];
      if (file) {
        const reader = new FileReader();
        reader.onload = (event) => {
          setSelectedImage(event.target?.result as string);
        };
        reader.readAsDataURL(file);
      }
    };
    input.click();
    setIsImageDialogOpen(false);
  };

  const handleSaveProduct = (e: React.FormEvent) => {
    if (
      !formData.name ||
      !formData.category ||
      !formData.price ||
      !formData.productId ||
      !formData.actualPrice ||
      !formData.quantity ||
      !formData.status ||
      !formData.type ||
      !formData.description
    ) {
      toast.error("Please fill the form — No data entered!");
      return;
    }
    toast.success("Product Saved — Your product has been successfully saved!");
    setFormData({
      name: "",
      category: "",
      price: "",
      productId: "",
      actualPrice: "",
      quantity: "",
      status: "",
      type: "",
      description: "",
    });
  };

  const handleBack = () => {
    route.push("/product");
    console.log("Navigate back");
  };

  const handleHome = () => {
    route.push("/");
    console.log("Navigate to home");
  };

  return (
    <div className=" bg-background flex gap-4 !p-4">
      <Toaster position="top-right" />
      <Aside />
      <div className="flex-1">
        <div className="flex items-center gap-4 !mb-6">
          <Button
            variant="destructive"
            size="icon"
            onClick={handleBack}
            className="shrink-0"
          >
            <ArrowLeft className="h-4 w-4" />
          </Button>
          <h1 className="text-2xl font-semibold text-foreground">Product</h1>
        </div>

        <Card className="!p-6">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-1">
              <div className="!space-y-4">
                <div className="relative">
                  <div
                    className="w-full h-64 bg-upload-bg border-2 border-dashed border-upload-border rounded-lg flex items-center justify-center cursor-pointer hover:bg-muted/50 transition-colors"
                    onClick={() => setIsImageDialogOpen(true)}
                  >
                    {selectedImage ? (
                      <Image
                        src={selectedImage}
                        alt="Product preview"
                        className="w-full h-full object-cover rounded-lg"
                      />
                    ) : (
                      <div className="text-center">
                        <ImagePlus className="h-12 w-12 text-muted-foreground mx-auto !mb-2" />
                        <p className="text-sm text-muted-foreground">
                          Click to upload image
                        </p>
                      </div>
                    )}
                  </div>
                </div>
                <h3 className="text-lg font-bold text-foreground text-center">
                  Upload Image
                </h3>
              </div>
            </div>

            <div className="lg:col-span-2">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="!space-y-2">
                  <Label htmlFor="product-name">Product Name:</Label>
                  <Input
                    id="product-name"
                    value={formData.name}
                    onChange={(e) => handleInputChange("name", e.target.value)}
                    className="w-full !p-2"
                  />
                </div>

                <div className="!space-y-2">
                  <Label htmlFor="category">Category:</Label>
                  <Input
                    id="category"
                    value={formData.category}
                    onChange={(e) =>
                      handleInputChange("category", e.target.value)
                    }
                    className="w-full !p-2"
                  />
                </div>

                <div className="!space-y-2">
                  <Label htmlFor="price">Price:</Label>
                  <Input
                    id="price"
                    value={formData.price}
                    onChange={(e) => handleInputChange("price", e.target.value)}
                    className="w-full !p-2"
                  />
                </div>

                <div className="!space-y-2">
                  <Label htmlFor="product-id">Product ID:</Label>
                  <Input
                    id="product-id"
                    value={formData.productId}
                    onChange={(e) =>
                      handleInputChange("productId", e.target.value)
                    }
                    className="w-full !p-2"
                  />
                </div>

                <div className="!space-y-2">
                  <Label htmlFor="actual-price">Actual Price:</Label>
                  <Input
                    id="actual-price"
                    value={formData.actualPrice}
                    onChange={(e) =>
                      handleInputChange("actualPrice", e.target.value)
                    }
                    className="w-full !p-2"
                  />
                </div>

                <div className="!space-y-2">
                  <Label htmlFor="quantity">Product Quantity:</Label>
                  <Input
                    id="quantity"
                    value={formData.quantity}
                    onChange={(e) =>
                      handleInputChange("quantity", e.target.value)
                    }
                    className="w-full !p-2"
                  />
                </div>

                <div className="!space-y-2">
                  <Label htmlFor="status">Status:</Label>
                  <Input
                    id="status"
                    value={formData.status}
                    onChange={(e) =>
                      handleInputChange("status", e.target.value)
                    }
                    className="w-full !p-2"
                  />
                </div>

                <div className="!space-y-2">
                  <Label htmlFor="type">Type:</Label>
                  <Input
                    id="type"
                    value={formData.type}
                    onChange={(e) => handleInputChange("type", e.target.value)}
                    className="w-full !p-2"
                  />
                </div>

                <div className="md:col-span-2 !space-y-2">
                  <Label htmlFor="description">Description:</Label>
                  <Textarea
                    id="description"
                    value={formData.description}
                    onChange={(e) =>
                      handleInputChange("description", e.target.value)
                    }
                    className="w-full min-h-[120px] resize-none !p-3"
                    placeholder="Enter product description..."
                  />
                </div>
              </div>

              <div className="!mt-8 flex justify-center">
                <Button
                  onClick={handleSaveProduct}
                  className="!px-8 !py-3 text-lg font-medium"
                  size="lg"
                >
                  Save Product
                </Button>
              </div>
            </div>
          </div>
        </Card>

        <div className="fixed bottom-6 left-6">
          <Button
            variant="destructive"
            size="icon"
            onClick={handleHome}
            className="h-12 w-12 rounded-xl shadow-lg"
          >
            <Home className="h-6 w-6" />
          </Button>
        </div>

        {/* Image Upload Dialog */}
        <Dialog open={isImageDialogOpen} onOpenChange={setIsImageDialogOpen}>
          <DialogContent className="sm:max-w-md">
            <DialogHeader>
              <DialogTitle className="text-center">Upload Image</DialogTitle>
            </DialogHeader>
            <div className="grid grid-cols-2 gap-4 py-4">
              <Button
                onClick={handleCameraCapture}
                variant="outline"
                className="h-32 flex-col gap-3"
              >
                <Camera className="h-8 w-8 text-muted-foreground" />
                <span>Capture Image</span>
              </Button>
              <Button
                onClick={handleSelectImage}
                variant="outline"
                className="h-32 flex-col gap-3"
              >
                <Image className="h-8 w-8 text-muted-foreground" />
                <span>Select Image</span>
              </Button>
            </div>
          </DialogContent>
        </Dialog>
      </div>
    </div>
  );
};

export default ProductForm;
