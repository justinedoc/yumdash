import { cn } from "@/lib/utils";
import { ClassValue } from "clsx";
import { Link } from "react-router";

type AuthContainerType = {
  children: string;
  to: "login" | "signup";
  className?: ClassValue;
};

function AuthPromptBanner({ children, to, className }: AuthContainerType) {
  return (
    <div className={cn("flex gap-2 items-center absolute top-16 right-3 text-xs", className)}>
      <span>{children}</span>
      <Link to={`/${to}`}>
        <button className="btn-glow secondary-grad-bg w-fit capitalize text-white px-3 p-[0.35rem] rounded-md text-xs cursor-pointer">
          {to}
        </button>
      </Link>
    </div>
  );
}

export default AuthPromptBanner;
