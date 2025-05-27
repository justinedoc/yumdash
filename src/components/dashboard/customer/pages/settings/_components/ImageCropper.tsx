// components/ImageCropper.tsx
import { useRef, useState } from "react";
import ReactCrop, {
  centerCrop,
  convertToPixelCrop,
  makeAspectCrop,
  type PercentCrop,
  type PixelCrop,
} from "react-image-crop";
import setCanvasPreview from "./setCanvasPreview";

const ASPECT_RATIO = 1;
const MIN_DIMENSION = 150;

type ImageCropperProps = {
  imgSrc: string;
  updateAvatar: (dataUrl: string) => void;
  closeModal: () => void;
};

const ImageCropper = ({ imgSrc, updateAvatar, closeModal }: ImageCropperProps) => {
  const imgRef = useRef<HTMLImageElement | null>(null);
  const previewCanvasRef = useRef<HTMLCanvasElement | null>(null);
  const [crop, setCrop] = useState<PercentCrop>();

  const onImageLoad = (e: React.SyntheticEvent<HTMLImageElement>) => {
    const { naturalWidth: width, naturalHeight: height } = e.currentTarget;
    const cropWidthInPercent = (MIN_DIMENSION / width) * 100;

    const crop = makeAspectCrop(
      { unit: "%", width: cropWidthInPercent },
      ASPECT_RATIO,
      width,
      height
    );
    const centeredCrop = centerCrop(crop, width, height);
    setCrop(centeredCrop);
  };

  const handleCrop = () => {
    if (!imgRef.current || !previewCanvasRef.current || !crop) return;

    const pixelCrop: PixelCrop = convertToPixelCrop(
      crop,
      imgRef.current.naturalWidth,
      imgRef.current.naturalHeight
    );

    setCanvasPreview(imgRef.current, previewCanvasRef.current, pixelCrop);
    const dataUrl = previewCanvasRef.current.toDataURL();
    updateAvatar(dataUrl);
    closeModal();
  };

  return (
    <div className="flex flex-col items-center">
      <ReactCrop
        crop={crop}
        onChange={(_, percentCrop) => setCrop(percentCrop)}
        circularCrop
        keepSelection
        aspect={ASPECT_RATIO}
        minWidth={MIN_DIMENSION}
      >
        <img
          ref={imgRef}
          src={imgSrc}
          alt="Upload"
          style={{ maxHeight: "60vh" }}
          onLoad={onImageLoad}
        />
      </ReactCrop>
      <button
        className="mt-4 rounded-2xl bg-sky-500 px-4 py-2 font-mono text-xs text-white hover:bg-sky-600"
        onClick={handleCrop}
      >
        Crop Image
      </button>
      <canvas
        ref={previewCanvasRef}
        style={{ display: "none", width: 150, height: 150 }}
      />
    </div>
  );
};

export default ImageCropper;
