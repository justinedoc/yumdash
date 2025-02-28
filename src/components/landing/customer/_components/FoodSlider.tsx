import { MapPin } from "lucide-react";
import { cn } from "@/lib/utils";
import { Star } from "../../ui/DisplayRating";

// Import your images from the assets folder
import mimisPlaceImg from "@/assets/images/temp/food-1.png";
import femisCourtImg from "@/assets/images/temp/food-2.png";
import sunicFoodImg from "@/assets/images/temp/food-3.png";
import wideplainsImg from "@/assets/images/temp/food-4.png";
import theHiveImg from "@/assets/images/temp/food-5.png";

const foodItems = [
  {
    name: "Mimi’s place",
    address: "107 Wetheral Rd, Owerri 460211 Nigeria.",
    image: mimisPlaceImg,
    rating: 4.5,
    reviews: 23,
    color: "bg-pink-200",
  },
  {
    name: "Femi’s court",
    address: "107 Wetheral Rd, Owerri 460211 Nigeria.",
    image: femisCourtImg,
    rating: 4.5,
    reviews: 23,
    color: "bg-blue-200",
  },
  {
    name: "Sunic food",
    address: "107 Wetheral Rd, Owerri 460211 Nigeria.",
    image: sunicFoodImg,
    rating: 4.5,
    reviews: 23,
    color: "bg-yellow-200",
  },
  {
    name: "Wideplains",
    address: "107 Wetheral Rd, Owerri 460211 Nigeria.",
    image: wideplainsImg,
    rating: 4.5,
    reviews: 23,
    color: "bg-purple-200",
  },
  {
    name: "The Hive",
    address: "107 Wetheral Rd, Owerri 460211 Nigeria.",
    image: theHiveImg,
    rating: 4.5,
    reviews: 23,
    color: "bg-green-200",
  },
];

const FoodSlider = () => {
  return (
    <div className="py-6 mt-4 absolute overflow-x-hidden w-full">
      <div className="min-h-[450px] py-3 m-auto relative w-full grid place-items-center">
        <div className="slider-track gap-4">
          {[...foodItems, ...foodItems].map((food, i) => (
            <div
              key={i}
              className={cn(
                "h-[25rem]",
                (i + 1) % 2 === 0 && "mt-[4rem]",
                food.color
              )}
            >
              <div className="slide">
                <img
                  src={food.image}
                  alt={food.name}
                  className={cn("h-[15rem] mx-auto", food.color)}
                  loading="lazy"
                />
                <div className="p-2">
                  <div>
                    <h1 className="text-hero text-2xl font-bold">
                      {food.name}
                    </h1>
                    <p className="text-sm mt-3 flex items-center justify-center gap-3 font-bold">
                      <span className="bg-white p-1 rounded-full">
                        <MapPin size={18} />
                      </span>
                      <span className="text-xs">{food.address}</span>
                    </p>
                  </div>
                  <div className="text-sm flex items-center justify-center gap-1 mt-3">
                    <div className="flex">
                      <Star />
                      <Star />
                      <Star />
                      <Star />
                      <Star full={false} />
                    </div>
                    <div>
                      <p>
                        {food.rating}/{" "}
                        <span className="underline">
                          {food.reviews} reviews
                        </span>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FoodSlider;
