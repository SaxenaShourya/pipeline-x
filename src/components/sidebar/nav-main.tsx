import { IconPlus, type Icon } from "@tabler/icons-react";
import { Button } from "@/components/ui/button";
import {
  SidebarGroup,
  SidebarGroupContent,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar";
import { Link, useLocation } from "react-router";

const NavMain = ({
  items,
}: {
  items: {
    title: string;
    url: string;
    icon?: Icon;
  }[];
}) => {
  const location = useLocation();

  return (
    <SidebarGroup>
      <SidebarGroupContent className="flex flex-col gap-3">
        {/* Add Product Button */}
        <Button className="w-full bg-primary text-white hover:bg-primary/90">
          <IconPlus size={18} />
          <span className="ml-2">Add Product</span>
        </Button>

        {/* Navigation Menu */}
        <SidebarMenu>
          {items.map((item) => {
            const isActive = location.pathname === item.url; // Check if the link is active

            return (
              <SidebarMenuItem key={item.title}>
                <Link to={item.url}>
                  <SidebarMenuButton
                    tooltip={item.title}
                    className={`flex items-center gap-2 px-3 py-2 rounded-md text-sm font-normal transition-all duration-200 cursor-pointer 
                    ${isActive ? "bg-neutral-200" : "hover:bg-muted"}`}
                  >
                    {item.icon && <item.icon size={18} />}
                    <span>{item.title}</span>
                  </SidebarMenuButton>
                </Link>
              </SidebarMenuItem>
            );
          })}
        </SidebarMenu>
      </SidebarGroupContent>
    </SidebarGroup>
  );
};

export default NavMain;
