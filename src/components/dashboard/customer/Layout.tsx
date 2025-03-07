import { SidebarProvider } from "@/components/ui/sidebar";
import { Outlet } from "react-router";
import Navbar from "./_components/Navbar";
import { AppSidebar } from "./_components/AppSideBar";
import { createContext, useState } from "react";
import { LocationContext } from "./hooks/useLocationContext";

export const AuthStateContext = createContext<
  | {
      isLoggedIn: boolean;
    }
  | undefined
>(undefined);

function DashboardLayout({ isLoggedIn = false }) {
  const [location, setLocation] = useState("");

  const handleLocationChange = (location: string) => {
    setLocation(location);
  };

  return (
    <AuthStateContext.Provider value={{ isLoggedIn }}>
      <SidebarProvider>
        <AppSidebar />
        <main className="w-full overflow-x-hidden h-screen overflow-y-scroll">
          <LocationContext.Provider value={{ location, handleLocationChange }}>
            <Navbar />
            <Outlet />
          </LocationContext.Provider>
        </main>
      </SidebarProvider>
    </AuthStateContext.Provider>
  );
}

export default DashboardLayout;
