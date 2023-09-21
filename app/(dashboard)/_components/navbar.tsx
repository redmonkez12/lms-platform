import { MobileSidebar } from "@/app/(dashboard)/_components/mobileSidebar";
import { NavbarRoutes } from "@/components/navbarRoutes";

export function Navbar() {
    return (
        <div className={"p-4 border-b h-full flex items-center bg-white shadow-sm"}>
            <MobileSidebar/>
            <NavbarRoutes/>
        </div>
    );
}