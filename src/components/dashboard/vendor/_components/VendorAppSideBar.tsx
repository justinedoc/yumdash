import {
  IdCard,
  Send,
  Settings,
  Calendar,
  CircleUserRound,
} from "lucide-react";
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
import SidebarTriggerBtnIcon from "../../ui/SidebarTriggerBtnIcon";

interface MenuItem {
  title: string;
  url: string;
  icon: React.ComponentType;
}

const menuItems: MenuItem[] = [
  {
    title: "Dashboard",
    url: "home",
    icon: GoHomeFill,
  },
  {
    title: "Menu",
    url: "menu",
    icon: BsBookHalf,
  },
  {
    title: "Order",
    url: "order",
    icon: LuShoppingBag,
  },
  {
    title: "Customers",
    url: "customers",
    icon: IdCard,
  },
  {
    title: "Payment Method",
    url: "payment-method",
    icon: Send,
  },
  {
    title: "Transactions",
    url: "transactions",
    icon: Calendar,
  },
  {
    title: "Employees",
    url: "employees",
    icon: CircleUserRound,
  },
  {
    title: "Settings",
    url: "settings",
    icon: Settings,
  },
];

export default function VendorAppSidebar() {
  const location = useLocation();
  const { setOpenMobile } = useSidebar();

  const isActive = (url: string): boolean => {
    return (
      location.pathname.split("/").slice(-1).join("").toLocaleLowerCase() ===
      url
    );
  };

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
            {
              <SidebarMenu>
                {menuItems.map((item) => (
                  <SidebarMenuItem key={item.title}>
                    <SidebarMenuButton
                      className="data-[active=true]:border-secondary/60 rounded-sm border border-transparent px-4"
                      isActive={isActive(item.url)}
                      onClick={() => setOpenMobile(false)}
                      size="lg"
                      asChild
                    >
                      <Link
                        to={`/vendor/dashboard/${item.url}`}
                        className="flex items-center space-x-2"
                      >
                        <item.icon />
                        <span>{item.title}</span>
                      </Link>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                ))}
              </SidebarMenu>
            }
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>

      <SidebarFooter className="py-7">
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
