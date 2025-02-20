import { SidebarProvider } from "@/components/ui/sidebar";
import { Outlet } from "react-router";
import Navbar from "./Navbar";
import { AppSidebar } from "./AppSideBar";

function DashboardLayout() {
  return (
    <SidebarProvider>
      <AppSidebar />
      <Navbar />
      <main className="w-full">
        <Outlet />
      </main>
    </SidebarProvider>
  );
}

export default DashboardLayout;
