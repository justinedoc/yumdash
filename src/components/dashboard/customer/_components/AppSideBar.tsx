import { HandCoins, Send, Star } from "lucide-react";

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

// Menu items.
const items = [
  {
    title: "Home",
    url: "/dashboard",
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
];

export function AppSidebar() {
  const location = useLocation();
  const { setOpenMobile } = useSidebar();

  return (
    <Sidebar>
      <SidebarHeader className="flex flex-row items-center justify-between py-5">
        <img src="/logo.svg" alt="" className="-translate-x-3" />
        <SidebarTrigger>
          <svg
            className="size-6"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g clipPath="url(#clip0_2574_757)">
              <path
                d="M3 5C3 4.44772 3.44772 4 4 4H20C20.5523 4 21 4.44772 21 5C21 5.55228 20.5523 6 20 6H4C3.44772 6 3 5.55228 3 5ZM9 12C9 11.4477 9.44772 11 10 11H20C20.5523 11 21 11.4477 21 12C21 12.5523 20.5523 13 20 13H10C9.44771 13 9 12.5523 9 12ZM3 19C3 18.4477 3.44772 18 4 18H20C20.5523 18 21 18.4477 21 19C21 19.5523 20.5523 20 20 20H4C3.44772 20 3 19.5523 3 19Z"
                fill="#222222"
              />
            </g>
            <defs>
              <clipPath id="clip0_2574_757">
                <rect width="24" height="24" fill="white" />
              </clipPath>
            </defs>
          </svg>
        </SidebarTrigger>
      </SidebarHeader>

      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupContent className="text-md">
            <SidebarMenu>
              {items.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton
                    className="border border-transparent data-[active=true]:border-secondary/60 rounded-sm px-4"
                    isActive={
                      location.pathname.split("/").at(-1) ===
                      item.url.split("/").at(-1)
                    }
                    onClick={() => setOpenMobile(false)}
                    size="lg"
                    asChild
                  >
                    <Link to={item.url}>
                      <item.icon />
                      <span>{item.title}</span>
                    </Link>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>

      <SidebarFooter className="py-10">
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton
              className="data-[active=true]:border border-secondary/60 rounded-sm px-4"
              isActive={location.pathname.split("/").at(-1) === "support"}
              size="lg"
              asChild
            >
              <Link to={"/dashboard/support"}>
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
