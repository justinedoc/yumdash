import { Dialog, DialogTrigger } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Separator } from "@/components/ui/separator";
import { SidebarTrigger, useSidebar } from "@/components/ui/sidebar";
import { useIsMobile } from "@/hooks/use-mobile";
import { Search } from "lucide-react";
import { FaMapMarkerAlt } from "react-icons/fa";
import { IoIosArrowDown } from "react-icons/io";

// Import SVG icons directly
import cartIcon from "@/assets/icons/cart.svg";
import profileIcon from "@/assets/icons/profile.svg";
import notificationsIcon from "@/assets/icons/notifications.svg";
import { useAuthStateContext } from "../hooks/useAuthStateContext";
import { cn } from "@/lib/utils";
import { useActiveAddress, useAddresses } from "@/stores/LocationStore";
import AddressesModal from "./AddressesModal";
import { truncateChar } from "@/lib/truncateChar";

const Navbar = () => {
  const addresses = useAddresses();
  const activeAddress = useActiveAddress();
  const { state } = useSidebar();
  const isMobile = useIsMobile();
  const { isLoggedIn } = useAuthStateContext();

  const shouldShowSidebarTrigger = state === "collapsed" || isMobile;

  return (
    <nav className="sticky top-0 right-0 z-[40] bg-white p-4 shadow">
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
            <div className="hidden items-center gap-2 md:flex">
              <Dialog>
                <FaMapMarkerAlt className="text-secondary" aria-hidden="true" />
                <DialogTrigger className="cursor-pointer">
                  <h3 className="text-left text-sm font-medium">
                    {addresses.length === 0
                      ? "Enter Address"
                      : truncateChar(activeAddress, 20)}
                  </h3>
                </DialogTrigger>
                <IoIosArrowDown aria-hidden="true" />
                <AddressesModal />
              </Dialog>
            </div>
          </div>

          {/* Right cluster: Address (mobile), Cart, Profile, Notification */}
          <div className="flex items-center space-x-1 md:hidden">
            {/* Address dropdown - visible on mobile, hidden on md+ */}
            <div className="flex cursor-pointer md:hidden">
              <Dialog>
                <DialogTrigger className="cursor-pointer">
                  <FaMapMarkerAlt className="text-secondary text-3xl" />
                </DialogTrigger>
                <AddressesModal />
              </Dialog>
            </div>

            <NavActions isLoggedIn={isLoggedIn} />
          </div>
        </div>

        {/* ============ Second Row (Mobile) / Center (Desktop) ============ */}
        <div className="flex items-center justify-center md:justify-start">
          <section
            id="search"
            className="relative w-full max-w-xl rounded-md bg-[#ECECEC]"
          >
            <Input
              type="text"
              placeholder="Search for anything..."
              title="Press Enter to search"
              aria-label="Search for anything"
              className="w-full rounded-md bg-transparent px-4 py-5 pl-10 text-sm focus:outline-none xl:min-w-[31rem]"
            />
            <Search
              size={18}
              className="absolute top-1/2 left-3 -translate-y-1/2 text-gray-500 dark:text-blue-300/40"
              aria-hidden="true"
            />
          </section>
        </div>

        {/* ============ Right Side (Desktop) ============ */}
        <div className="hidden items-center md:flex">
          <NavActions isLoggedIn={isLoggedIn} />
        </div>
      </div>
    </nav>
  );
};

function NavActions({ isLoggedIn }: { isLoggedIn: boolean }) {
  return (
    <>
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
        className={cn("p-2 focus:outline-none", !isLoggedIn && "hidden")}
      >
        <img src={profileIcon} alt="Profile icon" />
      </button>
      <button
        type="button"
        aria-label="Toggle dark mode"
        className={cn("p-2 focus:outline-none", !isLoggedIn && "hidden")}
      >
        <img src={notificationsIcon} alt="Notification icon" />
      </button>
    </>
  );
}

export default Navbar;
