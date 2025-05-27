// components/AvatarCropperWrapper.tsx
import { useState } from "react";
import Camera from "@/assets/icons/camera.svg?react";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogFooter,
} from "@/components/ui/dialog";
import ImageCropper from "./ImageCropper";

export default function AvatarCropperWrapper() {
  const [imgSrc, setImgSrc] = useState<string>("");
  const [isOpen, setIsOpen] = useState(false);
  const [avatar, setAvatar] = useState(
    "https://avatarfiles.alphacoders.com/161/161002.jpg",
  );

  const onFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onload = () => {
      if (reader.result) {
        setImgSrc(reader.result as string);
        setIsOpen(true);
      }
    };
    reader.readAsDataURL(file);
  };

  const updateAvatar = (dataUrl: string) => {
    setAvatar(dataUrl);
  };

  return (
    <div className="relative size-full">
      <div className="relative size-full overflow-hidden rounded-full">
        <img src={avatar} alt="Avatar" className="h-full w-full object-cover" />
      </div>
      <div className="absolute bottom-0 left-0 flex w-full items-center justify-center rounded-b-full bg-white/70">
        <label className="cursor-pointer p-2.5">
          <Camera className="size-8 text-[#1A1A1A]" />
          <input
            type="file"
            className="hidden"
            onChange={onFileChange}
            accept="image/*"
          />
        </label>
      </div>

      <Dialog open={isOpen} onOpenChange={setIsOpen}>
        <DialogContent className="max-w-lg overflow-hidden p-0">
          <DialogHeader className="bg-gray-100 p-4">
            <DialogTitle className="text-lg">Crop Your Image</DialogTitle>
          </DialogHeader>
          <div className="p-4">
            <ImageCropper
              imgSrc={imgSrc}
              updateAvatar={updateAvatar}
              closeModal={() => setIsOpen(false)}
            />
          </div>
          <DialogFooter className="flex justify-end space-x-2 bg-gray-100 p-4">
            <Button variant="outline" onClick={() => setIsOpen(false)}>
              Cancel
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  );
}
