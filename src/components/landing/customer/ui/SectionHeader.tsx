import { cn } from "@/lib/utils";
import { ClassValue } from "clsx";

function SectionHeader({
  text,
  className,
  color,
}: {
  text: string;
  className?: ClassValue;
  color?: string;
}) {
  return (
    <div className="text-[#C20143] flex gap-2 items-center text-hero">
      <Line style={color && { backgroundColor: color }} />
      <h1 className={cn("text-lg", className)}>{text}</h1>
      <Line style={color && { backgroundColor: color }} />
    </div>
  );
}

export function Line({ ...props }) {
  return <div {...props} className="w-8 h-[0.1rem] bg-[#C20143]"></div>;
}

export default SectionHeader;
