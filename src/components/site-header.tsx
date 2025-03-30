import React from "react";
import { Link, useLocation } from "react-router"; // Fixed import for React Router
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { SidebarTrigger } from "@/components/ui/sidebar";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";

const SiteHeader = () => {
  const location = useLocation();

  // Generate breadcrumb items from URL path
  const pathSegments = location.pathname
    .split("/")
    .filter((segment) => segment !== "");

  return (
    <header className="flex h-[--header-height] shrink-0 items-center gap-2 border-b transition-[width,height] ease-linear group-has-data-[collapsible=icon]/sidebar-wrapper:h-[--header-height] py-1">
      <div className="flex w-full items-center gap-1 px-4 lg:gap-2 lg:px-6">
        <SidebarTrigger className="-ml-1" />
        <Separator orientation="vertical" className="mx-2 !h-4" />

        {/* Breadcrumbs */}
        <Breadcrumb>
          <BreadcrumbList>
            <BreadcrumbItem>
              <BreadcrumbLink href="/">Dashboard</BreadcrumbLink>
            </BreadcrumbItem>

            {pathSegments.map((segment, index) => {
              const href = `/${pathSegments.slice(0, index + 1).join("/")}`;
              const isLast = index === pathSegments.length - 1;

              return (
                <React.Fragment key={href}>
                  <BreadcrumbSeparator />
                  <BreadcrumbItem className="capitalize">
                    {isLast ? (
                      <BreadcrumbPage>{decodeURIComponent(segment)}</BreadcrumbPage>
                    ) : (
                      <BreadcrumbLink href={href}>
                        {decodeURIComponent(segment)}
                      </BreadcrumbLink>
                    )}
                  </BreadcrumbItem>
                </React.Fragment>
              );
            })}
          </BreadcrumbList>
        </Breadcrumb>

        {/* Social Links */}
        <div className="ml-auto flex items-center gap-2">
          <Button variant="ghost" asChild size="sm">
            <Link to="https://github.com/SaxenaShourya" target="_blank" rel="noopener noreferrer">
              GitHub
            </Link>
          </Button>
          <Button variant="ghost" asChild size="sm">
            <Link to="https://linkedin.com/in/the-webfluencer" target="_blank" rel="noopener noreferrer">
              LinkedIn
            </Link>
          </Button>
        </div>
      </div>
    </header>
  );
};

export default SiteHeader;
