import * as React from "react";
import {
  IconDashboard,
  IconChartBar,
  IconUsers,
  IconGraph,
  IconSettings,
  IconHelp,
  IconReport,
  IconDatabase,
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
    avatar: "/avatars/shourya.jpg",
  },
  navMain: [
    {
      title: "Dashboard",
      url: "#",
      icon: IconDashboard,
    },
    {
      title: "Sales Overview",
      url: "#",
      icon: IconChartBar,
    },
    {
      title: "Clients & Deals",
      url: "#",
      icon: IconUsers,
    },
    {
      title: "Revenue Analytics",
      url: "#",
      icon: IconGraph,
    },
  ],
  navSecondary: [
    {
      title: "Settings",
      url: "#",
      icon: IconSettings,
    },
    {
      title: "Help Center",
      url: "#",
      icon: IconHelp,
    },
  ],
  navResources: [
    {
      name: "Sales Reports",
      url: "#",
      icon: IconReport,
    },
    {
      name: "Client Database",
      url: "#",
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
