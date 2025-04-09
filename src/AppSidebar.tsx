"use client";

import * as React from "react";
import {
  AudioWaveform,
  BookOpen,
  Command, FileText,
  Frame,
  GalleryVerticalEnd,
  Map,
  PieChart,
  Settings2,
  Users,
} from "lucide-react";

import { NavMain } from "@/atoms/nav-main";
import { NavProjects } from "@/atoms/nav-projects";
import { NavUser } from "@/atoms/nav-user";
import { TeamSwitcher } from "@/atoms/team-switcher";
import { Sidebar, SidebarContent, SidebarFooter, SidebarHeader, SidebarRail } from "@/atoms/sidebar";

// This is sample data.
const data = {
  user: {
    name: "shadcn",
    email: "m@example.com",
    avatar: "/avatars/shadcn.jpg",
  },
  teams: [
    {
      name: "Acme Inc",
      logo: GalleryVerticalEnd,
      plan: "Enterprise",
    },
    {
      name: "Acme Corp.",
      logo: AudioWaveform,
      plan: "Startup",
    },
    {
      name: "Evil Corp.",
      logo: Command,
      plan: "Free",
    },
  ],
  navMain: [
    {
      title: "Invoices",
      url: "/invoices",
      icon: FileText,
      isActive: true,
      items: [
        {
          title: "Overview",
          url: "/invoices",
        },
      ],
    },
    {
      title: "Customers",
      url: "/customers",
      icon: Users,
      items: [
        {
          title: "Overview",
          url: "/customers",
        },
      ],
    }
  ],
  projects: [
    {
      name: "Design Engineering",
      url: "#",
      icon: Frame,
    },
    {
      name: "Sales & Marketing",
      url: "#",
      icon: PieChart,
    },
    {
      name: "Travel",
      url: "#",
      icon: Map,
    },
  ],
};

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  return (
    <Sidebar collapsible="icon" {...props}>
      <SidebarHeader>
        <TeamSwitcher teams={data.teams} />
      </SidebarHeader>
      <SidebarContent>
        <NavMain items={data.navMain} />
        <NavProjects projects={data.projects} />
      </SidebarContent>
      <SidebarFooter>
        <NavUser user={data.user} />
      </SidebarFooter>
      <SidebarRail />
    </Sidebar>
  );
}
