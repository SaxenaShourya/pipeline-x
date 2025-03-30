import * as React from "react";
import {
  IconDashboard,
  IconGraph,
  IconSettings,
  IconHelp,
  IconReport,
  IconDatabase,
  IconPackage,
} from "@tabler/icons-react";

import NavMain from "@/components/sidebar/nav-main";
import NavResources from "@/components/sidebar/nav-resources";
import NavSecondary from "@/components/sidebar/nav-secondary";
import NavUser from "@/components/sidebar/nav-user";
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarMenu,
} from "@/components/ui/sidebar";
import { Link } from "react-router";

// SIDEBAR DATA
const data = {
  user: {
    name: "Shourya Saxena",
    email: "saxenashourya000@gmail.com",
    avatar: "https://randomuser.me/api/portraits/men/1.jpg",
  },
  navMain: [
    {
      title: "Dashboard",
      url: "/",
      icon: IconDashboard,
    },
    {
      title: "Products",
      url: "/products",
      icon: IconPackage,
    },
    {
      title: "Revenue Analytics",
      url: "/analytics",
      icon: IconGraph,
    },
  ],
  navSecondary: [
    {
      title: "Settings",
      icon: IconSettings,
    },
    {
      title: "Help Center",
      icon: IconHelp,
    },
  ],
  navResources: [
    {
      name: "Sales Reports",
      icon: IconReport,
    },
    {
      name: "Client Database",
      icon: IconDatabase,
    },
  ],
};

const AppSidebar = ({ ...props }: React.ComponentProps<typeof Sidebar>) => {
  return (
    <Sidebar collapsible="offcanvas" {...props}>
      <SidebarHeader>
        <SidebarMenu>
              <Link to="#" className="flex gap-1 items-center">
                <span className="text-base font-semibold">Pipeline</span>
                <span className="size-7 bg-black rounded-sm relative">
                  <span className="text-sm absolute top-1/2 left-1/2 -translate-[48%] text-white font-['Press_Start_2P']">X</span>
                </span>
              </Link>
        </SidebarMenu>
      </SidebarHeader>

      <SidebarContent>
        <NavMain items={data.navMain} />
        <NavResources items={data.navResources} />
        <NavSecondary items={data.navSecondary} className="mt-auto" />
      </SidebarContent>
      <SidebarFooter>
        <NavUser user={data.user} />
      </SidebarFooter>
    </Sidebar>
  );
};

export default AppSidebar;
