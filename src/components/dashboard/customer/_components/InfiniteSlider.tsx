// import { RestaurantCardProps } from "@/types/resturantCardTypes";
// import { FC, useRef, useEffect, useState } from "react";
// import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
// import { motion, useMotionValue, useAnimationFrame } from "motion/react";
// import RestaurantCard from "./ResturantCard";

// interface InfiniteSliderProps {
//   restaurants: RestaurantCardProps[];
// }

// const InfiniteSlider: FC<InfiniteSliderProps> = ({ restaurants }) => {
//   const items = [...restaurants, ...restaurants];

//   const sliderRef = useRef<HTMLDivElement | null>(null);
//   const [sliderWidth, setSliderWidth] = useState<number>(0);

//   const x = useMotionValue(0);
//   const [direction, setDirection] = useState<number>(1);

//   const speed = 50;

//   useEffect(() => {
//     if (sliderRef.current) {
//       setSliderWidth(sliderRef.current.scrollWidth / 2);
//     }
//   }, [restaurants]);

//   useAnimationFrame((_, delta) => {
//     const moveBy = (delta / 1000) * speed * direction;
//     const currentX = x.get();
//     const newX = currentX - moveBy;

//     if (newX <= -sliderWidth) {
//       x.set(0);
//     } else if (newX >= 0) {
//       x.set(-sliderWidth);
//     } else {
//       x.set(newX);
//     }
//   });

//   const handleScrollLeft = (): void => {
//     setDirection(-1);
//   };

//   const handleScrollRight = (): void => {
//     setDirection(1);
//   };

//   return (
//     <div className="relative max-w-max overflow-hidden">
//       {/* Left Arrow Button */}
//       <div className="absolute top-1/2 left-0 z-10 transform -translate-y-1/2">
//         <button
//           onClick={handleScrollLeft}
//           className="bg-gray-200 rounded-full p-2 m-2 shadow hover:bg-gray-300"
//           aria-label="Scroll Left"
//         >
//           <FaArrowLeft />
//         </button>
//       </div>

//       {/* Right Arrow Button */}
//       <div className="absolute top-1/2 right-0 z-10 transform -translate-y-1/2">
//         <button
//           onClick={handleScrollRight}
//           className="bg-gray-200 rounded-full p-2 m-2 shadow hover:bg-gray-300"
//           aria-label="Scroll Right"
//         >
//           <FaArrowRight />
//         </button>
//       </div>

//       {/* The Sliding Container */}
//       <motion.div ref={sliderRef} className="flex" style={{ x }}>
//         {items.map((restaurant, index) => (
//           <div key={`${restaurant.id}-${index}`} className="mx-2">
//             <RestaurantCard {...restaurant} />
//           </div>
//         ))}
//       </motion.div>
//     </div>
//   );
// };

// export default InfiniteSlider;
