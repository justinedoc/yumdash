import { SidebarProvider } from "@/components/ui/sidebar";
import { Outlet } from "react-router";
import Navbar from "./_components/Navbar";
import { AppSidebar } from "./_components/AppSideBar";
import { AuthStateContext } from "./hooks/useAuthStateContext";

interface DashboardLayoutProps {
  isLoggedIn?: boolean;
}

function DashboardLayout({ isLoggedIn = false }: DashboardLayoutProps) {
  return (
    <AuthStateContext.Provider value={{ isLoggedIn }}>
      <SidebarProvider>
        <AppSidebar />
        <main className="h-screen w-full overflow-x-hidden overflow-y-scroll">
          <Navbar />
          <Outlet />
        </main>
      </SidebarProvider>
    </AuthStateContext.Provider>
  );
}

export default DashboardLayout;
