import { SidebarProvider } from "@/components/ui/sidebar";
import { Outlet } from "react-router";
import Navbar from "./_components/Navbar";
import { AppSidebar } from "./_components/AppSideBar";
import { useState } from "react";
import { LocationContext } from "./hooks/useLocationContext";
import { AuthStateContext } from "./hooks/useAuthStateContext";

const tempAddresses = [
  "Command Road, Alimosho, Lagos",
  "Ipaja, Lagos",
  "25 Hortico Way, Command Rd, Ipaja Lagos",
];

interface DashboardLayoutProps {
  isLoggedIn?: boolean;
}

function DashboardLayout({ isLoggedIn = false }: DashboardLayoutProps) {
  const [addresses, setAddresses] = useState<string[]>(tempAddresses);

  const handleAddressChange = (location: string) => {
    if (
      addresses.some((addr) => addr.toLowerCase() === location.toLowerCase())
    ) {
      console.warn("address already stored");
      return;
    }
    setAddresses((prevAddresses) => [location, ...prevAddresses]);
  };

  return (
    <AuthStateContext.Provider value={{ isLoggedIn }}>
      <SidebarProvider>
        <AppSidebar />
        <main className="w-full overflow-x-hidden h-screen overflow-y-scroll">
          <LocationContext.Provider value={{ addresses, handleAddressChange }}>
            <Navbar />
            <Outlet />
          </LocationContext.Provider>
        </main>
      </SidebarProvider>
    </AuthStateContext.Provider>
  );
}

export default DashboardLayout;
