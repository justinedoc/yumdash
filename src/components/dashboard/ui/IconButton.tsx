import React from "react";
import { Button } from "@/components/ui/button";

export interface IconButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  icon: React.ReactNode;
}

const IconButton: React.FC<IconButtonProps> = ({
  icon,
  className = "",
  "aria-label": ariaLabel,
  ...props
}) => {
  return (
    <Button
      {...props}
      className={`absolute right-1 top-1/2 z-10 hidden md:flex items-center justify-center w-10 h-10 bg-white rounded-full shadow hover:bg-gray-100 transform -translate-y-1/2 text-primary ${className}`}
      aria-label={ariaLabel || "Scroll Right"}
    >
      {icon}
    </Button>
  );
};

export default IconButton;
