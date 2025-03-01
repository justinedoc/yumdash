import restaurantBanner from "@/assets/images/temp/restaurant-banner.jpg";

import BannerBio from "./BannerBio";
import RestaurantTabs from "./RestaurantTabs";

function Banner() {
  return (
    <header>
      <title>Alessio_Fiore on Yumdash</title>
      <meta name="description" content="Alessio_Fiore on yumdash" />
      <div className="relative bg-[#014921]">
        {/* Backgroung image  */}
        <div
          className="h-45 w-full overflow-hidden bg-center bg-cover bg-no-repeat"
          style={{ backgroundImage: `url(${restaurantBanner})` }}
        />

        {/* Header content  */}
        <BannerBio />
      </div>
      {/* Tabs  */}
      <RestaurantTabs />
    </header>
  );
}

export default Banner;
