import React, { useRef, useState } from "react";
import Cropper, { ReactCropperElement } from "react-cropper";
import "cropperjs/dist/cropper.css";
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
      <div className="w-full h-full bg-[#2D68FF] flex items-center justify-center">
        <span className="text-8xl font-medium text-white">JS</span>
      </div>

      {/* upload section */}
      <div className="bg-white/70 absolute left-0 bottom-0 flex items-center justify-center w-full">
        {/* Camera Upload Button */}
        <label className="p-2.5 cursor-pointer">
          <Camera className="size-8 text-[#1A1A1A]" />
          <input type="file" className="hidden" onChange={onFileChange} />
        </label>
      </div>

      {/* Cropper only appears once an image is loaded */}
      {image && (
        <div className="w-full overflow-hidden rounded-full max-w-lg mb-4 absolute top-0">
          <Cropper
            src={image}
            style={{ height: 400, width: "100%" }}
            // Cropper.js options:
            initialAspectRatio={1} // Keep a square by default
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
          className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
        >
          Crop Image
        </button>
      )}
    </>
  );
};

export default ImageCropper;
