"use client";

import { Layout, Compass } from "lucide-react";
import { SidebarItem } from "@/app/(dashboard)/_components/sidebarItem";

const guestRoutes = [
    {
        icon: Layout,
        label: "Dashboard",
        href: "/",
    },
    {
        icon: Compass,
        label: "Browse",
        href: "/search",
    },
];

export function SidebarRoutes() {
    const routes = guestRoutes;

    return (
        <div className="flex flex-col w-ful">
            {routes.map(route => (
                <SidebarItem
                    key={route.href}
                    icon={route.icon}
                    label={route.label}
                    href={route.href}
                />
            ))}
        </div>
    );
}
