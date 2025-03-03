import { SidebarProvider } from "@/components/ui/sidebar";
import { Outlet } from "react-router";
import Navbar from "./Navbar";
import { AppSidebar } from "./AppSideBar";
import { createContext } from "react";

export const AuthStateContext = createContext<
  | {
      isLoggedIn: boolean;
    }
  | undefined
>(undefined);

function DashboardLayout({ isLoggedIn = false }) {
  return (
    <AuthStateContext.Provider value={{ isLoggedIn }}>
      <SidebarProvider>
        <AppSidebar />
        <main className="w-full overflow-x-hidden h-screen overflow-y-scroll">
          <Navbar />
          <Outlet />
        </main>
      </SidebarProvider>
    </AuthStateContext.Provider>
  );
}

export default DashboardLayout;
