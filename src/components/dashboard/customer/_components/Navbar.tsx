import { Dialog, DialogTrigger } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Separator } from "@/components/ui/separator";
import { SidebarTrigger, useSidebar } from "@/components/ui/sidebar";
import { useIsMobile } from "@/hooks/use-mobile";
import { Search } from "lucide-react";
import { FaMapMarkerAlt } from "react-icons/fa";
import { IoIosArrowDown } from "react-icons/io";
import AddressManager from "./AddressManager";
import { createContext, useState } from "react";

// Import SVG icons directly
import cartIcon from "@/assets/icons/cart.svg";
import profileIcon from "@/assets/icons/profile.svg";
import notificationsIcon from "@/assets/icons/notifications.svg";

export const LocationContext = createContext<
  | {
      location: string;
      handleLocationChange: (location: string) => void;
    }
  | undefined
>(undefined);

const Navbar = () => {
  const [location, setLocation] = useState("");

  const handleLocationChange = (location: string) => {
    setLocation(location);
  };

  const { state } = useSidebar();
  const isMobile = useIsMobile();
  const shouldShowSidebarTrigger = state === "collapsed" || isMobile;

  return (
    <LocationContext.Provider value={{ location, handleLocationChange }}>
      <nav className="bg-white shadow p-4 sticky top-0 right-0 z-[40]">
        <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
          {/* ============ Top Row (Mobile) / Left Side (Desktop) ============ */}
          <div className="flex items-center justify-between">
            {/* Left cluster: Sidebar trigger, Vendor logo, Address (desktop) */}
            <div className="flex items-center gap-1 md:gap-4">
              {shouldShowSidebarTrigger && (
                <>
                  <SidebarTrigger />
                  <Separator orientation="vertical" className="mr-2 h-4" />
                </>
              )}

              {/* Address dropdown - hidden on mobile, visible on md+ */}
              <div className="hidden md:flex items-center gap-2">
                <Dialog>
                  <FaMapMarkerAlt
                    className="text-secondary"
                    aria-hidden="true"
                  />
                  <DialogTrigger className="cursor-pointer">
                    <h3 className="text-sm text-left font-medium">
                      {!location
                        ? "Enter Address"
                        : location.slice(0, 20) + "..."}
                    </h3>
                  </DialogTrigger>
                  <IoIosArrowDown aria-hidden="true" />
                  <AddressManager />
                </Dialog>
              </div>
            </div>

            {/* Right cluster: Address (mobile), Cart, Profile, Notification */}
            <div className="flex items-center space-x-1 md:hidden">
              {/* Address dropdown - visible on mobile, hidden on md+ */}
              <div className="flex md:hidden cursor-pointer">
                <Dialog>
                  <DialogTrigger className="cursor-pointer">
                    <FaMapMarkerAlt className="text-secondary text-3xl" />
                  </DialogTrigger>
                  <AddressManager />
                </Dialog>
              </div>

              <button
                type="button"
                aria-label="View cart"
                className="p-2 focus:outline-none"
              >
                <img src={cartIcon} alt="Cart icon" />
              </button>
              <button
                type="button"
                aria-label="View profile"
                className="p-2 focus:outline-none"
              >
                <img src={profileIcon} alt="Profile icon" />
              </button>
              <button
                type="button"
                aria-label="Toggle dark mode"
                className="p-2 focus:outline-none"
              >
                <img src={notificationsIcon} alt="Notification icon" />
              </button>
            </div>
          </div>

          {/* ============ Second Row (Mobile) / Center (Desktop) ============ */}
          <div className="flex items-center justify-center md:justify-start">
            <section
              id="search"
              className="relative bg-[#ECECEC] w-full max-w-xl rounded-md"
            >
              <Input
                type="text"
                placeholder="Search for anything..."
                title="Press Enter to search"
                aria-label="Search for anything"
                className="w-full xl:min-w-[31rem] px-4 py-5 pl-10 text-sm bg-transparent focus:outline-none rounded-md"
              />
              <Search
                size={18}
                className="absolute top-1/2 left-3 -translate-y-1/2 text-gray-500 dark:text-blue-300/40"
                aria-hidden="true"
              />
            </section>
          </div>

          {/* ============ Right Side (Desktop) ============ */}
          <div className="hidden md:flex items-center">
            <button
              type="button"
              aria-label="View cart"
              className="p-2 focus:outline-none"
            >
              <img src={cartIcon} alt="Cart icon" />
            </button>
            <button
              type="button"
              aria-label="View profile"
              className="p-2 focus:outline-none"
            >
              <img src={profileIcon} alt="Profile icon" />
            </button>
            <button
              type="button"
              aria-label="Toggle dark mode"
              className="p-2 focus:outline-none"
            >
              <img src={notificationsIcon} alt="Notification icon" />
            </button>
          </div>
        </div>
      </nav>
    </LocationContext.Provider>
  );
};

export default Navbar;
