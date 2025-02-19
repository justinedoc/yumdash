import { cn } from "@/lib/utils";
import { StarIcon } from "lucide-react";

export function DisplayRating({
  maxRating = 5,
  rating,
  stars,
}: {
  rating: number;
  maxRating?: number;
  stars: number;
}) {
  return (
    <aside className="flex items-center gap-1">
      <div className="flex">
        {Array.from({ length: maxRating }, (_, i) => (
          <Star key={i} full={i + 1 <= stars} />
        ))}
      </div>
      <span className="text-xs dark:text-gray-400 text-gray-600 font-medium">
        ({rating} Ratings)
      </span>
    </aside>
  );
}

export function Star({
  full = true,
  className,
}: {
  full?: boolean;
  className?: string;
}) {
  return full ? (
    <StarIcon
      className={cn(
        "w-4 h-4 fill-[#FFC806] text-[#FFC806] stroke-none",
        className
      )}
    />
  ) : (
    <StarIcon
      className={cn(
        "w-4 h-4 fill-[#b1b1b1] text-[#b1b1b1] stroke-none",
        className
      )}
    />
  );
}
