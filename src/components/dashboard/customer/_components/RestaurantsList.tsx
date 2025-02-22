import React, { JSX, useEffect, useRef, useState } from "react";
import { restaurants } from "../data/restaurants";
import { useMotionValue, useAnimationFrame, motion } from "motion/react";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import { Button } from "@/components/ui/button";
import { ClassValue } from "clsx";
import { cn } from "@/lib/utils";

type ResturantListProps = {
  title?: string;
  icon?: React.ReactElement;
  actionLabel?: string;
  action?: () => void;
  render: JSX.Element[];
  children?: React.ReactElement;
  className?: ClassValue;
};
function RestaurantList({
  title,
  icon,
  action,
  actionLabel,
  render,
  children,
  className,
}: ResturantListProps) {
  const sliderRef = useRef<HTMLDivElement | null>(null);
  const [sliderWidth, setSliderWidth] = useState<number>(0);

  const x = useMotionValue(0);
  const [direction, setDirection] = useState<number>(1);

  const speed = 50;

  useEffect(() => {
    if (sliderRef.current) {
      setSliderWidth(sliderRef.current.scrollWidth / 2);
    }
  }, [restaurants]);

  useAnimationFrame((_, delta) => {
    const moveBy = (delta / 1000) * speed * direction;
    const currentX = x.get();
    const newX = currentX - moveBy;

    if (newX <= -sliderWidth) {
      x.set(0);
    } else if (newX >= 0) {
      x.set(-sliderWidth);
    } else {
      x.set(newX);
    }
  });

  const handleScrollLeft = (): void => {
    setDirection(-1);
  };

  const handleScrollRight = (): void => {
    setDirection(1);
  };
  return (
    <section className={cn("my-15", className)}>
      {!children ? (
        <header className="mb-5 flex justify-between">
          <h1 className="inline-flex items-center gap-1">
            {icon}
            <span className="text-2xl font-bold">{title}</span>
          </h1>
          {action && (
            <Button variant="outline" className="rounded-sm" onClick={action}>
              {actionLabel}
            </Button>
          )}
        </header>
      ) : (
        children && <div className="my-4">{children}</div>
      )}

      <div className="mx-auto  overflow-hidden relative">
        {/* <div className="absolute top-1/2 left-0 z-10 transform -translate-y-1/2">
          <button
            onClick={handleScrollLeft}
            className="bg-gray-200 rounded-full p-2 m-2 shadow hover:bg-gray-300"
            aria-label="Scroll Left"
          >
            <FaArrowLeft />
          </button>
        </div> */}
        {/* Right Arrow Button */}
        {/* <div className="absolute top-1/2 right-0 z-10 transform -translate-y-1/2">
          <button
            onClick={handleScrollRight}
            className="bg-gray-200 rounded-full p-2 m-2 shadow hover:bg-gray-300"
            aria-label="Scroll Right"
          >
            <FaArrowRight />
          </button>
        </div> */}

        <div className="grid gap-3 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 3xl:grid-cols-4 py-2">
          {render}
        </div>

        {/* The Sliding Container */}
        {/* <motion.div ref={sliderRef} className="flex" style={{ x }}>
          {render}
        </motion.div> */}
      </div>
    </section>
  );
}

export default RestaurantList;
