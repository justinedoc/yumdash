import React, { JSX, useRef } from "react";
import { Button } from "@/components/ui/button";
import { ClassValue } from "clsx";
import { cn } from "@/lib/utils";
import ScrollButtons from "./ScrollButtons";

type RestaurantListProps = {
  title?: string;
  icon?: React.ReactElement;
  actionLabel?: string;
  action?: () => void;
  render: JSX.Element[];
  className?: ClassValue;
};

function RestaurantList({
  title,
  icon,
  action,
  actionLabel,
  render,
  className,
}: RestaurantListProps) {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scrollLeft = () => {
    scrollRef.current?.scrollBy({ left: -350, behavior: "smooth" });
  };

  const scrollRight = () => {
    scrollRef.current?.scrollBy({ left: 350, behavior: "smooth" });
  };

  return (
    <section className={cn("my-7 relative", className)}>
      <header className="mb-5 flex justify-between items-center">
        <h1 className="inline-flex items-center gap-1 text-2xl font-bold">
          {icon}
          <span>{title}</span>
        </h1>
        {action && (
          <Button variant="outline" className="rounded-sm" onClick={action}>
            {actionLabel}
          </Button>
        )}
      </header>

      <div className="relative">
        <ScrollButtons scrollLeft={scrollLeft} scrollRight={scrollRight} />

        {/* Scrollable container */}
        <div ref={scrollRef} className="md:overflow-x-scroll scrollbar-hide">
          <div className="flex gap-4 flex-wrap md:flex-nowrap justify-center py-2 w-fit">
            {render}
          </div>
        </div>
      </div>
    </section>
  );
}

export default RestaurantList;
