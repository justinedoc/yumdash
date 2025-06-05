import { cn } from "@/lib/utils";
import { ClassValue } from "clsx";
import { Link } from "react-router";

type AuthContainerType = {
  children: string;
  to: "login" | "signup" | "vendor/signup" | "vendor/login";
  className?: ClassValue;
};

function AuthPromptBanner({ children, to, className }: AuthContainerType) {
  const label = to.split("/").slice(-1);
  return (
    <div
      className={cn(
        "absolute top-15 right-3 flex items-center gap-2 text-xs 2xl:top-25",
        className,
      )}
    >
      <span>{children}</span>
      <Link to={`/${to}`}>
        <button className="btn-glow secondary-grad-bg w-fit cursor-pointer rounded-md p-[0.35rem] px-3 text-xs text-white capitalize">
          {label}
        </button>
      </Link>
    </div>
  );
}

export default AuthPromptBanner;
