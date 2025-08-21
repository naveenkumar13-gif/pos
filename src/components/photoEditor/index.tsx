"use client";
import { useState, useRef } from "react";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Upload, Camera, Trash2, RotateCw, ZoomIn, ZoomOut } from "lucide-react";
import { message } from "antd";

interface PhotoEditorProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function PhotoEditor({ isOpen, onClose }: PhotoEditorProps) {
  const fileInputRef = useRef<HTMLInputElement>(null);
  const [currentPhoto, setCurrentPhoto] = useState('');
  const [zoom, setZoom] = useState(100);
  const [rotation, setRotation] = useState(0);

  const handleFileUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => {
        setCurrentPhoto(e.target?.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSave = () => {
    message.success("Photo Updated", 2);
    onClose();
  };

  const handleRemove = () => {
    setCurrentPhoto("");
    message.success("Photo Removed", 2);
  };

  const handleRotate = () => {
    setRotation(prev => (prev + 90) % 360);
  };

  const handleZoomIn = () => {
    setZoom(prev => Math.min(prev + 10, 200));
  };

  const handleZoomOut = () => {
    setZoom(prev => Math.max(prev - 10, 50));
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-md">
        <DialogHeader>
          <DialogTitle>Edit Profile Photo</DialogTitle>
        </DialogHeader>
        
        <div className="space-y-6">
          <div className="flex justify-center">
            <div className="relative">
              <Avatar className="w-32 h-32">
                <AvatarImage 
                  src={currentPhoto} 
                  alt="Profile" 
                  style={{
                    transform: `rotate(${rotation}deg) scale(${zoom / 100})`,
                    transformOrigin: "center"
                  }}
                />
                <AvatarFallback>SM</AvatarFallback>
              </Avatar>
            </div>
          </div>

          <div className="flex justify-center space-x-2">
            <Button
              size="icon"
              variant="outline"
              onClick={handleZoomOut}
              disabled={zoom <= 50}
            >
              <ZoomOut className="w-4 h-4" />
            </Button>
            <Button
              size="icon"
              variant="outline"
              onClick={handleZoomIn}
              disabled={zoom >= 200}
            >
              <ZoomIn className="w-4 h-4" />
            </Button>
            <Button
              size="icon"
              variant="outline"
              onClick={handleRotate}
            >
              <RotateCw className="w-4 h-4" />
            </Button>
          </div>

          <div className="grid grid-cols-2 gap-3">
            <Button
              variant="outline"
              onClick={() => fileInputRef.current?.click()}
              className="flex items-center gap-2"
            >
              <Upload className="w-4 h-4" />
              Upload
            </Button>
            <Button
              variant="outline"
              className="flex items-center gap-2"
            >
              <Camera className="w-4 h-4" />
              Camera
            </Button>
          </div>

          <div className="grid grid-cols-2 gap-3">
            <Button
              variant="outline"
              onClick={handleRemove}
              className="flex items-center gap-2 text-destructive hover:text-destructive"
            >
              <Trash2 className="w-4 h-4" />
              Remove
            </Button>
            <Button onClick={handleSave}>
              Save Photo
            </Button>
          </div>
        </div>

        <input
          ref={fileInputRef}
          type="file"
          accept="image/*"
          onChange={handleFileUpload}
          className="hidden"
        />
      </DialogContent>
    </Dialog>
  );
}