import { SidebarProvider } from "@/components/ui/sidebar";
import { Outlet } from "react-router";
import Navbar from "./_components/Navbar";
import VendorAppSideBar from "./_components/VendorAppSideBar";

function VendorDashboardLayout() {
  return (
    <SidebarProvider>
      <VendorAppSideBar />
      <main className="h-screen w-full overflow-x-hidden overflow-y-scroll">
        <Navbar />
        <Outlet />
      </main>
    </SidebarProvider>
  );
}

export default VendorDashboardLayout;
