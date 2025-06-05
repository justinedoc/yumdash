import { HandCoins, Send, Settings, Star } from "lucide-react";
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupContent,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarTrigger,
  useSidebar,
} from "@/components/ui/sidebar";
import { Link, useLocation } from "react-router";
import { GoHomeFill } from "react-icons/go";
import { BsBookHalf } from "react-icons/bs";
import { LuShoppingBag } from "react-icons/lu";
import { BiSupport } from "react-icons/bi";
import { useAuthStateContext } from "../hooks/useAuthStateContext";
import AuthDivider from "@/components/auth/ui/AuthDivider";
import SidebarAuthPromptButton from "../../ui/SidebarAuthPromptButton";
import SidebarTriggerBtnIcon from "../../ui/SidebarTriggerBtnIcon";

interface MenuItem {
  title: string;
  url: string;
  icon: React.ComponentType;
}

const menuItems: MenuItem[] = [
  {
    title: "Home",
    url: "/dashboard/home",
    icon: GoHomeFill,
  },
  {
    title: "Food Order",
    url: "/dashboard/food-order",
    icon: BsBookHalf,
  },
  {
    title: "Order History",
    url: "/dashboard/order-history",
    icon: LuShoppingBag,
  },
  {
    title: "Favourites",
    url: "/dashboard/favourites",
    icon: Star,
  },
  {
    title: "Messages",
    url: "/dashboard/messages",
    icon: Send,
  },
  {
    title: "Payment Details",
    url: "/dashboard/payment-details",
    icon: HandCoins,
  },
  {
    title: "Settings",
    url: "/dashboard/settings",
    icon: Settings,
  },
];

export function AppSidebar() {
  const location = useLocation();
  const { setOpenMobile } = useSidebar();
  const { isLoggedIn } = useAuthStateContext();

  // Determines if the given URL matches the current location.
  const isActive = (url: string): boolean => {
    return location.pathname === url || location.pathname.startsWith(url + "/");
  };

  const anyOtherActive = menuItems
    .filter((item) => item.title !== "Home")
    .some((item) => isActive(item.url));

  return (
    <Sidebar>
      <SidebarHeader className="flex flex-row items-center justify-between py-5">
        <img src="/logo.svg" alt="Logo" className="-translate-x-3" />
        <SidebarTrigger>
          <SidebarTriggerBtnIcon />
        </SidebarTrigger>
      </SidebarHeader>

      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupContent className="text-md">
            {isLoggedIn ? (
              <SidebarMenu>
                {menuItems.map((item) => {
                  const active =
                    item.title === "Home"
                      ? isActive(item.url) || !anyOtherActive
                      : isActive(item.url);
                  return (
                    <SidebarMenuItem key={item.title}>
                      <SidebarMenuButton
                        className="data-[active=true]:border-secondary/60 rounded-sm border border-transparent px-4"
                        isActive={active}
                        onClick={() => setOpenMobile(false)}
                        size="lg"
                        asChild
                      >
                        <Link
                          to={item.url}
                          className="flex items-center space-x-2"
                        >
                          <item.icon />
                          <span>{item.title}</span>
                        </Link>
                      </SidebarMenuButton>
                    </SidebarMenuItem>
                  );
                })}
              </SidebarMenu>
            ) : (
              <SidebarMenu>
                <SidebarMenuItem className="mx-auto mt-20 space-y-5">
                  <SidebarAuthPromptButton
                    label="Register For An Account"
                    link="signup"
                    className="secondary-grad-bg hover:text-white"
                  />

                  <AuthDivider />

                  <SidebarAuthPromptButton
                    label="Log In To Your Account"
                    link="login"
                    className="border-secondary text-secondary border bg-[#D6E6E2]"
                  />
                </SidebarMenuItem>
              </SidebarMenu>
            )}
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>

      <SidebarFooter className="py-10">
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton
              className="data-[active=true]:border-secondary/60 rounded-sm border border-transparent px-4"
              isActive={isActive("/dashboard/support")}
              size="lg"
              asChild
            >
              <Link
                to="/dashboard/support"
                className="flex items-center space-x-2"
              >
                <BiSupport />
                <span>Support</span>
              </Link>
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarFooter>
    </Sidebar>
  );
}
