import { Link } from "react-router";
import { cn } from "@/lib/utils";
import type { ClassValue } from "clsx";

interface LogoProps
  extends Omit<React.ImgHTMLAttributes<HTMLImageElement>, "className"> {
  className?: ClassValue;
}

function Logo({ className, ...props }: LogoProps) {
  return (
    <Link to="/">
      <img
        src="/logo-transparent.png"
        alt="Yumdash"
        {...props}
        className={cn(className)}
      />
    </Link>
  );
}

export default Logo;
