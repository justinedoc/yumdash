import React, { useState, useTransition } from "react";
import {
  StarIcon,
  HeartIcon,
  PhoneIcon,
  MapPinIcon,
  ClockIcon,
  Loader2Icon,
} from "lucide-react";
import { RestaurantCardProps } from "@/types/resturantCardTypes";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";

const RestaurantCard: React.FC<RestaurantCardProps> = ({
  id,
  name,
  description,
  logoUrl,
  contact,
  rating,
  hours,
  tags = [],
  isFavorite = false,
  className = "",
}) => {
  const [isOrdering, setIsOrdering] = useState(false);
  const [favorite, setFavorite] = useState(isFavorite);
  const [isPending, startTransition] = useTransition();
  const [isHovered, setIsHovered] = useState(false);

  const handleOrder = async () => {
    if (isOrdering) return;
    setIsOrdering(true);
    try {
      // Simulate network delay
      await new Promise((resolve) => setTimeout(resolve, 1500));
      console.log("Order placed for restaurant:", id);
      // Optionally, trigger a success notification here
    } catch (error) {
      console.error("Error during ordering:", error);
    } finally {
      setIsOrdering(false);
    }
  };

  const handleFavorite = () => {
    if (isPending) return;
    startTransition(async () => {
      const newFavoriteState = !favorite;
      setFavorite(newFavoriteState);
      try {
        // Simulate network delay
        await new Promise((resolve) => setTimeout(resolve, 800));
        console.log("Favorite toggled for restaurant:", id, newFavoriteState);
      } catch (error) {
        console.error("Error toggling favorite:", error);
        setFavorite(!newFavoriteState); // revert on error
      }
    });
  };

  return (
    <div
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className={cn(
        "relative overflow-hidden rounded-xl p-4 shadow backdrop-blur-sm transition-shadow hover:shadow-md w-full min-w-[20rem] sm:w-1/2 md:w-1/3 lg:w-1/4 border border-[#0F5D8F29]",
        className
      )}
    >
      <div className="relative z-10">
        {/* Header: Status & Favorite */}
        <div className="flex justify-between items-start mb-4">
          <div
            className={cn(
              "flex items-center gap-1 rounded-full px-3 py-2 shadow-sm",
              hours.isOpen24Hours
                ? "bg-emerald-50 text-emerald-700"
                : hours.currentlyOpen
                ? "bg-green-50 text-green-700"
                : "bg-red-50 text-red-700"
            )}
          >
            <ClockIcon className="w-4 h-4" />
            <span className="text-xs font-medium">
              {hours.isOpen24Hours
                ? "Open 24/7"
                : hours.currentlyOpen
                ? `Open until ${hours.closingTime}`
                : `Opens at ${hours.openingTime}`}
            </span>
          </div>
          <button
            onClick={handleFavorite}
            disabled={isPending}
            className={cn(
              "rounded-full bg-white p-2 shadow-sm transition-colors",
              isPending ? "opacity-50" : "hover:bg-gray-50"
            )}
          >
            <HeartIcon
              className={cn(
                "w-5 h-5 transition-colors",
                favorite ? "fill-orange-400 text-orange-400" : "text-gray-400"
              )}
            />
          </button>
        </div>

        {/* Content: Name, Description, Tags & Logo */}
        <div className="flex flex-col-reverse md:flex-row justify-between items-start">
          <div className="flex-1">
            <h2
              className={cn(
                "text-base font-bold mb-2 transition-colors",
                isHovered ? "text-emerald-700" : "text-gray-800"
              )}
            >
              {name}
            </h2>
            <p className="text-gray-500 mb-4 text-xs md:max-w-[80%]">
              {description}
            </p>
            {tags.length > 0 && (
              <div className="flex flex-wrap gap-2 mb-3">
                {tags.slice(0, 3).map((tag) => (
                  <span
                    key={tag}
                    className="px-2 py-1 text-xs rounded-full bg-emerald-100 text-emerald-700"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            )}
          </div>
          <img
            src={logoUrl}
            alt={`${name} logo`}
            className="size-20 md:size-15 rounded-full shadow-md transition-transform hover:scale-105 mb-3"
          />
        </div>

        {/* Contact Info */}
        <div className="flex gap-3 md:flex-row flex-col text-xs">
          <div className="flex items-center gap-2 text-gray-600 bg-white px-2 py-1 text-xs rounded-full w-fit">
            <PhoneIcon className="w-5 h-5" />
            <a href={`tel:${contact.phone}`} className="hover:text-emerald-700">
              {contact.phone}
            </a>
          </div>
          <div className="flex items-center gap-2 text-gray-600 bg-white px-2 py-1 text-xs rounded-full w-fit">
            <MapPinIcon className="w-5 h-5" />
            <a
              href={`https://maps.google.com/?q=${contact.location}`}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-emerald-700"
            >
              {contact.location}
            </a>
          </div>
        </div>

        {/* Footer: Rating & Order Button */}
        <div className="flex items-center justify-between mt-2">
          {/* RatingStars */}
          <div className="flex flex-col">
            <div className="flex items-center gap-1">
              {[...Array(5)].map((_, i) => (
                <div key={i}>
                  <StarIcon
                    className={cn(
                      "w-5 h-5",
                      i < Math.floor(rating.average)
                        ? "fill-yellow-400 text-yellow-400"
                        : i + 1 > Math.floor(rating.average) &&
                          i < rating.average
                        ? "fill-yellow-400/50 text-yellow-400"
                        : "fill-gray-200 text-gray-200"
                    )}
                  />
                </div>
              ))}
            </div>

            <div className="space-x-1">
              <span className="text-xs font-medium text-gray-700">
                {rating.average.toFixed(1)}
              </span>
              <span className="text-xs text-gray-500">
                ({rating.total} reviews)
              </span>
            </div>
          </div>
          {/* Order Button */}
          <Button
            onClick={handleOrder}
            disabled={isOrdering}
            className="secondary-grad-bg"
          >
            {isOrdering ? (
              <span className="flex items-center gap-2">
                <Loader2Icon className="w-5 h-5 animate-spin" />
                Ordering...
              </span>
            ) : (
              <span>Go to Restaurant</span>
            )}
          </Button>
        </div>
      </div>
    </div>
  );
};

export default RestaurantCard;
