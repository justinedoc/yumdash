import { useState } from "react";
import restaurantProfile from "@/assets/images/temp/restaurant-profile.png";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

function BannerBio() {
  const [expanded, setExpanded] = useState(false);

  const toggleExpanded = () => setExpanded((prev) => !prev);

  return (
    <div className="bg-[#FFFFFFED] absolute bottom-0 left-0 md:w-[65%] flex items-center gap-1 rounded-t-md p-3">
      <Avatar className="size-25">
        <AvatarImage src={restaurantProfile} />
        <AvatarFallback>CN</AvatarFallback>
      </Avatar>
      <article>
        <div className="flex items-center gap-1">
          <h1 className="text-2xl font-medium">Alessio_Fiore</h1>
          <span className="text-[#A5A5A5]">(Lagos)</span>
        </div>
        <p
          className={`text-xs text-[#535353] ${
            expanded ? "" : "line-clamp-2"
          } md:line-clamp-none`}
        >
          Allesio Fiore is an organic food vendor offering a wide range of
          fresh, sustainably sourced foods, from produce to prepared meals.
          Committed to quality and sustainability, Allesio Fiore brings
          nutritious and delicious options to your table.
        </p>

        <button
          onClick={toggleExpanded}
          className="text-secondary underline text-xs mt-1 md:hidden"
        >
          {expanded ? "Show less" : "Read more"}
        </button>
      </article>
    </div>
  );
}

export default BannerBio;
