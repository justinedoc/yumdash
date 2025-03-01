import { cn } from "@/lib/utils";

interface SecondaryButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  icon?: React.ReactElement;
  label: string;
  className?: string;
}

function SecondaryButton({
  icon,
  label,
  className,
  ...props
}: SecondaryButtonProps) {
  return (
    <button
      {...props}
      className={cn(
        "p-1 px-2 rounded-full text-sm flex items-center gap-1 bg-[#00674B29] text-secondary hover:bg-secondary hover:text-white transition-all font-medium my-2",
        className
      )}
    >
      {icon} <span>{label}</span>
    </button>
  );
}

export default SecondaryButton;
