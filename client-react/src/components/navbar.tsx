import { cn } from "@/lib/utils";
import { FC } from "react";
import { Link } from "react-router-dom";
import { Button, buttonVariants } from "./ui/button";
import { navLinks } from "@/lib/data/nav-links";
import { Input } from "./ui/input";
import { SearchIcon } from "lucide-react";
import Sidebar from "./sidebar";
import { ModeToggle } from "./ui/mode-toggle";

interface NavbarProps {}

const Navbar: FC<NavbarProps> = ({}) => {
  return (
    <nav className="flex min-h-20 items-center justify-between px-2 shadow-md shadow-secondary">
      <Link className="flex justify-center items-center" to={"/"}>
        <img className="size-12 pt-1 " src="/logo.png" />
        <h1 className="text-xl md:text-2xl font-bold">Notes</h1>
      </Link>
      <Button
        className="w-60 justify-between hidden md:flex"
        variant={"secondary"}
        size={"lg"}
      >
        Search...
        <div className="flex">
          {" "}
          <SearchIcon className="size-4 ml-3" />
          <kbd className="pointer-events-none inline-flex h-5 select-none items-center gap-1 rounded border bg-muted px-1.5 font-mono text-[10px] font-medium text-muted-foreground opacity-100">
            <span className="text-xs">⌘</span>K
          </kbd>
        </div>
      </Button>
      <div className="flex md:hidden px-2 gap-x-5 justify-center items-center">
        <Button variant={"secondary"} size={"icon"}>
          <SearchIcon className="size-4" />
        </Button>
        {/* Menu */}
        <Sidebar />
        <ModeToggle />
      </div>

      <div className="flex gap-x-5 px-2 hidden md:flex">
        {navLinks.map((link) => (
          <Link
            className={cn(buttonVariants({ variant: "ghost" }))}
            key={link.href}
            to={link.href}
          >
            {link.label}
          </Link>
        ))}
        <ModeToggle />
      </div>
    </nav>
  );
};

export default Navbar;
