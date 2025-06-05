import { Separator } from "@/components/ui/separator";
import { SidebarTrigger, useSidebar } from "@/components/ui/sidebar";
import { useIsMobile } from "@/hooks/use-mobile";

// SVG icons
import profileIcon from "@/assets/icons/profile.svg";
import notificationsIcon from "@/assets/icons/notifications.svg";
import { cn } from "@/lib/utils";

import NavSearchbar from "../../_components/NavSearchbar";
import { Button } from "@/components/ui/button";

const Navbar = () => {
  const { state } = useSidebar();
  const isMobile = useIsMobile();

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

            <Button
              variant="secondary"
              className="text-secondary border-secondary hover:bg-secondary rounded-sm border bg-transparent text-sm shadow-none hover:text-white"
            >
              View Store
            </Button>
          </div>

          {/* Right cluster: (mobile), Profile, Notification */}
          <div className="flex items-center space-x-1 md:hidden">
            <NavActions />
          </div>
        </div>

        {/* ============ Second Row (Mobile) / Center (Desktop) ============ */}
        <div className="flex items-center justify-center md:justify-start">
          <NavSearchbar />
        </div>

        {/* ============ Right Side (Desktop) ============ */}
        <div className="hidden items-center md:flex">
          <NavActions />
        </div>
      </div>
    </nav>
  );
};

function NavActions() {
  return (
    <>
      <button
        type="button"
        aria-label="View profile"
        className={cn("p-2 focus:outline-none")}
      >
        <img src={profileIcon} alt="Profile icon" />
      </button>
      <button
        type="button"
        aria-label="open notification"
        className={cn("p-2 focus:outline-none")}
      >
        <img src={notificationsIcon} alt="Notification icon" />
      </button>
    </>
  );
}

export default Navbar;
