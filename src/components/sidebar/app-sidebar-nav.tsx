"use client";

import { SidebarNav, SidebarTrigger } from "@/components/ui/sidebar";

import { Breadcrumbs } from "@/components/ui/breadcrumbs";
import { Separator } from "@/components/ui/separator";
import { ThemeSwitcher } from "../theme/theme-switcher";

export default function AppSidebarNav() {
  return (
    <SidebarNav className="border-b">
      <div className="flex items-center justify-between w-full">
        <div className="flex items-center gap-x-4">
          <span className="flex items-center gap-x-4">
            <SidebarTrigger className="-mx-2" />
            <Separator className="h-6" orientation="vertical" />
            <Breadcrumbs className="@md:flex hidden">
              <Breadcrumbs.Item href="/blocks/sidebar/sidebar-01">
                Dashboard
              </Breadcrumbs.Item>
              <Breadcrumbs.Item>Newsletter</Breadcrumbs.Item>
            </Breadcrumbs>
          </span>
        </div>
        <ThemeSwitcher appearance="outline" />
      </div>
    </SidebarNav>
  );
}
