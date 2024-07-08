import { FC } from "react";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { MenuIcon } from "lucide-react";
import { navLinks } from "@/lib/data/nav-links";
import { buttonVariants } from "./ui/button";
import { Link } from "react-router-dom";
import { cn } from "@/lib/utils";

interface SidebarProps {}

const Sidebar: FC<SidebarProps> = ({}) => {
  return (
    <div>
      <Sheet>
        <SheetTrigger><MenuIcon className="size-4"/></SheetTrigger>
        <SheetContent>
          <div className="w-full flex flex-col justify-center items-center">
            {navLinks.map((link)=>(
              <Link className={cn(buttonVariants({
                variant:"ghost"
              }),
              'w-full'
            )}
              key={link.href}
              to={link.href}>{link.label}</Link>
            ))}
          </div>
        </SheetContent>
      </Sheet>
    </div>
  );
};

export default Sidebar;
