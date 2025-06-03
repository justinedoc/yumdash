import { SidebarMenuButton } from "@/components/ui/sidebar";
import { cn } from "@/lib/utils";
import { ClassValue } from "clsx";
import { Link } from "react-router";

type SidebarAuthPromptButtonProps = {
  className?: ClassValue;
  label: string;
  link: "signup" | "login";
};

function SidebarAuthPromptButton({
  className,
  label,
  link,
}: SidebarAuthPromptButtonProps) {
  return (
    <SidebarMenuButton
      className={cn(
        "rounded-sm px-6 text-white transition duration-500",
        className,
      )}
      size="lg"
      asChild
    >
      <Link to={`/${link}`}>
        <span>{label}</span>
      </Link>
    </SidebarMenuButton>
  );
}

export default SidebarAuthPromptButton;
