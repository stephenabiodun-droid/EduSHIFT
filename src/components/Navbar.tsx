import { Link, useLocation } from "react-router-dom";
import { Button, buttonVariants } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import { cn } from "@/lib/utils";
import { Logo } from "@/components/Logo";

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const links = [
    { name: "About", path: "/about" },
    { name: "Fellowship", path: "/fellowship" },
    { name: "Events", path: "/events" },
    { name: "Partners", path: "/partners" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <nav className="sticky top-0 z-50 w-full border-b bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/60">
      <div className="container mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <div className="flex items-center">
          <Link to="/" className="flex items-center space-x-2 w-40">
            <Logo className="w-full h-auto" />
          </Link>
        </div>

        {/* Desktop Nav */}
        <div className="hidden text-sm md:flex md:items-center md:space-x-8">
          {links.map((link) => (
            <Link
              key={link.name}
              to={link.path}
              className={cn(
                "font-medium transition-colors hover:text-primary-900",
                location.pathname === link.path
                  ? "text-primary-900"
                  : "text-muted-foreground"
              )}
            >
              {link.name}
            </Link>
          ))}
          <div className="flex items-center space-x-4 ml-4 border-l pl-4">
            <Link to="/donate" className={buttonVariants({ variant: "ghost" })}>
              Donate
            </Link>
            <Link to="/apply" className={cn(buttonVariants(), "bg-accent-500 text-primary-900 hover:bg-accent-400 font-semibold hover:-translate-y-0.5 transition-all shadow-sm")}>
              Apply Now
            </Link>
          </div>
        </div>

        {/* Mobile Nav Toggle */}
        <div className="flex items-center md:hidden">
          <Button
            variant="ghost"
            size="icon"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle Menu"
          >
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </Button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden border-b bg-white px-4 py-4">
          <div className="flex flex-col space-y-4">
            {links.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                onClick={() => setIsOpen(false)}
                className={cn(
                  "block text-base font-medium transition-colors",
                  location.pathname === link.path
                    ? "text-primary-900"
                    : "text-muted-foreground"
                )}
              >
                {link.name}
              </Link>
            ))}
            <div className="flex flex-col space-y-2 pt-4 border-t">
              <Link to="/donate" className={cn(buttonVariants({ variant: "outline" }), "w-full justify-center")} onClick={() => setIsOpen(false)}>
                Donate
              </Link>
              <Link to="/apply" className={cn(buttonVariants(), "w-full justify-center bg-accent-500 text-primary-900 font-semibold hover:bg-accent-400 transition-colors")} onClick={() => setIsOpen(false)}>
                Apply Now
              </Link>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}
