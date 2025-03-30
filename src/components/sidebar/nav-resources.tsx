import {
  IconFolder,
  IconShare3,
  IconTrash,
  IconClockHour4, // New "Coming Soon" Icon
  type Icon,
} from "@tabler/icons-react";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  SidebarGroup,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuAction,
  SidebarMenuButton,
  SidebarMenuItem,
  useSidebar,
} from "@/components/ui/sidebar";

const NavResources = ({
  items,
}: {
  items: {
    name: string;
    icon: Icon;
  }[];
}) => {
  const { isMobile } = useSidebar();

  return (
    <SidebarGroup className="group-data-[collapsible=icon]:hidden">
      <SidebarGroupLabel className="uppercase tracking-wider flex items-center gap-1">
        Resources
        <span className="text-xs text-neutral-400 flex items-center gap-1 tracking-normal capitalize">
          (Coming Soon
          <IconClockHour4 size={14} className="text-gray-400" />)
        </span>
      </SidebarGroupLabel>
      <SidebarMenu>
        {items.map((item) => (
          <SidebarMenuItem key={item.name}>
            <SidebarMenuButton
              asChild
              className="flex items-center gap-2 px-3 py-2 rounded-md text-sm transition-all duration-200 hover:bg-gray-100 cursor-not-allowed"
            >
              <span className="text-neutral-600">
                <item.icon size={18} />
                <span>{item.name}</span>
              </span>
            </SidebarMenuButton>
            {/* Dropdown Menu */}
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <SidebarMenuAction
                  showOnHover
                  className="data-[state=open]:bg-accent rounded-sm"
                >
                  <IconFolder size={16} />
                </SidebarMenuAction>
              </DropdownMenuTrigger>
              <DropdownMenuContent
                className="w-28 rounded-lg"
                side={isMobile ? "bottom" : "right"}
                align={isMobile ? "end" : "start"}
              >
                <DropdownMenuItem>
                  <IconFolder size={16} />
                  <span>Open</span>
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <IconShare3 size={16} />
                  <span>Share</span>
                </DropdownMenuItem>
                <DropdownMenuSeparator />
                <DropdownMenuItem variant="destructive">
                  <IconTrash size={16} />
                  <span>Delete</span>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </SidebarMenuItem>
        ))}
      </SidebarMenu>
    </SidebarGroup>
  );
};

export default NavResources;
