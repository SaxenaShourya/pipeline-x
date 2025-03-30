import { IconPlus, type Icon } from "@tabler/icons-react";
import { Button } from "@/components/ui/button";
import {
  SidebarGroup,
  SidebarGroupContent,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar";

const NavMain = ({
  items,
}: {
  items: {
    title: string;
    url: string;
    icon?: Icon;
  }[];
}) => {
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
            return (
              <SidebarMenuItem key={item.title}>
                <SidebarMenuButton
                  tooltip={item.title}
                  className="flex items-center gap-2 px-3 py-2 rounded-md text-sm font-normal transition-all duration-200 hover:bg-gray-100 cursor-pointer"
                >
                  {item.icon && <item.icon size={18} />}
                  <span>{item.title}</span>
                </SidebarMenuButton>
              </SidebarMenuItem>
            );
          })}
        </SidebarMenu>
      </SidebarGroupContent>
    </SidebarGroup>
  );
};

export default NavMain;