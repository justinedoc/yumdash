import React, { useRef, useState } from "react";
import Cropper, { ReactCropperElement } from "react-cropper";
import Camera from "@/assets/icons/camera.svg?react";

const ImageCropper = () => {
  const [image, setImage] = useState<string>("");
  const cropperRef = useRef<ReactCropperElement>(null);

  const onFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    const files = e.target.files;
    if (files && files.length > 0) {
      const reader = new FileReader();
      reader.onload = () => {
        setImage(reader.result as string);
      };
      reader.readAsDataURL(files[0]);
    }
  };

  const handleCrop = () => {
    const cropper = cropperRef.current?.cropper;
    if (cropper) {
      const croppedCanvas = cropper.getCroppedCanvas();
      const croppedImageDataUrl = croppedCanvas.toDataURL();

      console.log("Cropped Image:", croppedImageDataUrl);

      window.open(croppedImageDataUrl, "_blank");
    }
  };

  return (
    <>
      {/* Initial image (user initials) */}
      <div className="flex h-full w-full items-center justify-center bg-[#2D68FF]">
        <span className="text-8xl font-medium text-white">JS</span>
      </div>

      {/* upload section */}
      <div className="absolute bottom-0 left-0 flex w-full items-center justify-center bg-white/70">
        {/* Camera Upload Button */}
        <label className="cursor-pointer p-2.5">
          <Camera className="size-8 text-[#1A1A1A]" />
          <input type="file" className="hidden" onChange={onFileChange} />
        </label>
      </div>

      {/* Cropper only appears once an image is loaded */}
      {image && (
        <div className="absolute top-0 z-50 mb-4 w-full rounded-full">
          <Cropper
            src={image}
            style={{ height: 400, width: "100%" }}
            // Cropper.js options:
            initialAspectRatio={1}
            guides={true}
            // More config options: https://github.com/fengyuanchen/cropperjs#options
            ref={cropperRef}
          />
        </div>
      )}

      {/* Crop button */}
      {image && (
        <button
          onClick={handleCrop}
          className="rounded bg-blue-500 px-4 py-2 text-white hover:bg-blue-600"
        >
          Crop Image
        </button>
      )}
    </>
  );
};

export default ImageCropper;
