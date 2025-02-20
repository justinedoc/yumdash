import { Input } from "@/components/ui/input";
import { Separator } from "@/components/ui/separator";
import { SidebarTrigger, useSidebar } from "@/components/ui/sidebar";
import { useIsMobile } from "@/hooks/use-mobile";
import { Moon, Search } from "lucide-react";
import { FaMapMarkerAlt } from "react-icons/fa";
import { IoIosArrowDown } from "react-icons/io";

const Navbar = () => {
  const { state } = useSidebar();
  const isMobile = useIsMobile();

  // Only show the sidebar trigger if the sidebar is collapsed or if on mobile
  const shouldShowSidebarTrigger = state === "collapsed" || isMobile;

  return (
    <nav className="bg-white shadow p-4">
      <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
        {/* ============ Top Row (Mobile) / Left Side (Desktop) ============ */}
        <div className="flex items-center justify-between">
          {/* Left cluster: Sidebar trigger, Vendor logo, Address (desktop) */}
          <div className="flex items-center gap-2 md:gap-4">
            {shouldShowSidebarTrigger && (
              <>
                <SidebarTrigger />
                <Separator orientation="vertical" className="mr-2 h-4" />
              </>
            )}
            <img
              src="/src/assets/images/temp/vendor-img.png"
              alt="Vendor logo"
              className="w-14 h-14 object-cover rounded-full"
            />

            {/* Address dropdown - hidden on mobile, visible on md+ */}
            <div className="hidden md:flex items-center gap-2 cursor-pointer">
              <FaMapMarkerAlt className="text-secondary" aria-hidden="true" />
              <h3 className="text-sm font-medium">Enter Address</h3>
              <IoIosArrowDown aria-hidden="true" />
            </div>
          </div>

          {/* Right cluster: Address (mobile), Cart, Profile, Dark mode */}
          <div className="flex items-center space-x-4 md:hidden">
            {/* Address dropdown - visible on mobile, hidden on md+ */}
            <div className="flex md:hidden cursor-pointer">
              <FaMapMarkerAlt className="text-secondary text-3xl" />
            </div>

            <button
              type="button"
              aria-label="View cart"
              className="p-2 focus:outline-none"
            >
              <img src="/src/assets/icons/cart.svg" alt="Cart icon" />
            </button>
            <button
              type="button"
              aria-label="View profile"
              className="p-2 focus:outline-none"
            >
              <img src="/src/assets/icons/profile.svg" alt="Profile icon" />
            </button>
            <button
              type="button"
              aria-label="Toggle dark mode"
              className="p-2 focus:outline-none"
            >
              <Moon className="stroke-1 text-gray-400" />
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
            <img src="/src/assets/icons/cart.svg" alt="Cart icon" />
          </button>
          <button
            type="button"
            aria-label="View profile"
            className="p-2 focus:outline-none"
          >
            <img src="/src/assets/icons/profile.svg" alt="Profile icon" />
          </button>
          <button
            type="button"
            aria-label="Toggle dark mode"
            className="p-2 focus:outline-none"
          >
            <Moon className="stroke-1 text-gray-400" />
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
