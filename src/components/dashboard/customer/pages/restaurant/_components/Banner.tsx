import restaurantBanner from "@/assets/images/temp/restaurant-banner.jpg";
import BannerBio from "./BannerBio";

function Banner() {
  return (
    <header>
      <head>
        <title>Alessio_Fiore on Yumdash</title>
        <meta name="description" content="Alessio_Fiore on yumdash" />
      </head>
      <div className="relative bg-[#014921]">
        {/* Background image */}
        <div
          className="w-full h-80 md:h-60 overflow-hidden bg-center bg-cover bg-no-repeat"
          style={{ backgroundImage: `url(${restaurantBanner})` }}
        />
        {/* Optional overlay to improve text readability */}
        <div className="absolute inset-0 bg-black opacity-25 md:opacity-0"></div>
        {/* Banner content */}
        <BannerBio />
      </div>
    </header>
  );
}

export default Banner;
