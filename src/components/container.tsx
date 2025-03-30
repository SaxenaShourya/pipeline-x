import React from "react";
import AppSidebar from "@/components/sidebar";
import SiteHeader from "./site-header";
import { SidebarInset, SidebarProvider } from "@/components/ui/sidebar";

const Container = ({ children }: { children: React.ReactNode }) => {
  return (
    <SidebarProvider className="h-full lg:h-screen w-full overflow-hidden">
      {/* Sidebar */}
      <AppSidebar variant="inset" />

      {/* Main Layout */}
      <SidebarInset className="!rounded-none !shadow-none !m-0 md:border-l">
        <SiteHeader />
        {children}
      </SidebarInset>
    </SidebarProvider>
  );
};

export default Container;
