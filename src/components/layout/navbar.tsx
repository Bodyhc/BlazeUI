import { Moon, Sun, Menu } from "lucide-react";
import { NavLink, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { useTheme } from "@/contexts/theme-context";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { Sheet, SheetContent, SheetTrigger, SheetHeader, SheetTitle, SheetClose } from "@/components/ui/sheet";

const Navbar = () => {
  const { theme, setTheme } = useTheme();
  const location = useLocation();

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "Components", path: "/components" },
    { name: "Templates", path: "/templates" },
    { name: "Docs", path: "/docs" },
  ];

  return (
    <header className="sticky top-0 z-50 w-full border-b border-black/[0.05] dark:border-white/[0.05] bg-white/70 dark:bg-black/70 backdrop-blur-xl supports-[backdrop-filter]:bg-white/60 dark:supports-[backdrop-filter]:bg-black/60">
      <div className="container h-16 flex items-center justify-between">
        <NavLink to="/" className="flex items-center space-x-2 transition-transform hover:scale-105 active:scale-95">
          <div className="size-8 rounded-lg bg-gradient-to-tr from-primary to-purple-600 flex items-center justify-center font-black text-white italic">
            B
          </div>
          <span className="font-bold text-xl tracking-tight">BlazeUI</span>
        </NavLink>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-8 text-sm font-medium">
          {navLinks.map((link) => {
            const isActive = location.pathname === link.path || 
                             (link.path !== "/" && location.pathname.startsWith(link.path));
            
            return (
              <NavLink
                key={link.path}
                to={link.path}
                className={cn(
                  "relative py-1 transition-colors hover:text-primary",
                  isActive ? "text-primary" : "text-foreground/60"
                )}
              >
                {link.name}
                {isActive && (
                  <motion.div
                    layoutId="navbar-underline"
                    className="absolute bottom-0 left-0 right-0 h-0.5 bg-primary rounded-full"
                    transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                  />
                )}
              </NavLink>
            );
          })}
        </nav>

        <div className="flex items-center gap-4">
          <div className="h-6 w-px bg-black/[0.1] dark:bg-white/[0.1] hidden sm:block" />
          <Button
            variant="ghost"
            size="icon"
            className="rounded-full hover:bg-black/5 dark:hover:bg-white/5"
            onClick={() => setTheme(theme === "light" ? "dark" : "light")}
          >
            <Sun className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
            <Moon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
            <span className="sr-only">Toggle theme</span>
          </Button>
          <Button size="sm" className="hidden sm:flex rounded-full px-5 shadow-lg shadow-primary/20">
             Get Started
          </Button>

          {/* Mobile Menu */}
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="md:hidden">
                <Menu className="h-6 w-6" />
                <span className="sr-only">Open menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[300px] sm:w-[400px]">
              <SheetHeader>
                <SheetTitle className="text-left flex items-center gap-2">
                  <div className="size-8 rounded-lg bg-gradient-to-tr from-primary to-purple-600 flex items-center justify-center font-black text-white italic">
                    B
                  </div>
                  BlazeUI
                </SheetTitle>
              </SheetHeader>
              <nav className="flex flex-col gap-4 mt-8">
                {navLinks.map((link) => (
                  <SheetClose asChild key={link.path}>
                    <NavLink
                      to={link.path}
                      className={({ isActive }) => cn(
                        "text-lg font-medium px-4 py-2 rounded-md transition-colors",
                        isActive ? "bg-primary/10 text-primary" : "hover:bg-muted"
                      )}
                    >
                      {link.name}
                    </NavLink>
                  </SheetClose>
                ))}
                <div className="h-px bg-border my-2" />
                <Button className="w-full rounded-full">Get Started</Button>
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
