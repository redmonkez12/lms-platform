import { Logo } from "@/app/(dashboard)/_components/logo";
import { SidebarRoutes } from "@/app/(dashboard)/_components/sidebarRoutes";

export function Sidebar() {
    return (
        <div className={"h-full border-r flex flex-col overflow-y-auto bg-white shadow-sm"}>
            <div className="p-6">
                <Logo/>
            </div>

            <div className="flex flex-col w-ful">
                <SidebarRoutes/>
            </div>
        </div>
    );
}