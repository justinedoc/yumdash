import { cn } from "@/lib/utils";
import { type ClassValue } from "clsx";
import { Link } from "react-router";

function Logo({ className, ...props }: { className?: ClassValue }) {
  return (
    <Link to="/">
      <img src="/logo-transparent.png" alt="Yumdash" {...props} className={cn(className)} />
    </Link>
  );
}

export default Logo;
